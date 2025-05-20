'use client';

import { useState, useEffect, useRef } from 'react';

interface SvgPreviewProps {
  svgContent: string;
  width?: number;
  height?: number;
  fileName?: string;
}

export default function SvgPreview({ svgContent, width = 300, height = 300, fileName = 'download.svg' }: SvgPreviewProps) {
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgContent, 'image/svg+xml');
      const svgElement = svgDoc.documentElement;
      
      // 设置SVG的基本属性
      svgElement.setAttribute('width', '100%');
      svgElement.setAttribute('height', '100%');
      svgElement.setAttribute('preserveAspectRatio', 'xMidYMid meet');
      
      // 清空容器并添加SVG
      while (svgRef.current.firstChild) {
        svgRef.current.removeChild(svgRef.current.firstChild);
      }
      while (svgElement.firstChild) {
        svgRef.current.appendChild(svgElement.firstChild);
      }
    }
  }, [svgContent]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setScale(prevScale => Math.min(Math.max(prevScale * delta, 0.1), 5));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setStartPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    setPosition({
      x: e.clientX - startPosition.x,
      y: e.clientY - startPosition.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDownload = () => {
    // 创建一个新的SVG元素
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('version', '1.1');
    
    // 复制原始SVG的所有属性
    if (svgRef.current) {
      const originalSvg = svgRef.current;
      Array.from(originalSvg.attributes).forEach(attr => {
        svg.setAttribute(attr.name, attr.value);
      });
      
      // 复制所有子元素
      while (originalSvg.firstChild) {
        svg.appendChild(originalSvg.firstChild.cloneNode(true));
      }
    }

    // 将SVG转换为字符串
    const svgString = new XMLSerializer().serializeToString(svg);
    
    // 创建Blob对象
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    
    // 创建下载链接
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    
    // 触发下载
    document.body.appendChild(link);
    link.click();
    
    // 清理
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="relative overflow-hidden border border-gray-200 rounded-lg bg-white"
      style={{ width, height }}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <svg
        ref={svgRef}
        className="absolute inset-0"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          transformOrigin: 'center',
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
      />
      <div className="absolute bottom-2 right-2 flex gap-2">
        <button
          className="px-2 py-1 text-sm bg-white border border-gray-200 rounded hover:bg-gray-50"
          onClick={() => setScale(1)}
        >
          Reset
        </button>
        <button
          className="px-2 py-1 text-sm bg-white border border-gray-200 rounded hover:bg-gray-50"
          onClick={() => setPosition({ x: 0, y: 0 })}
        >
          Center
        </button>
        <button
          className="px-2 py-1 text-sm bg-white border border-gray-200 rounded hover:bg-gray-50"
          onClick={handleDownload}
        >
          Download SVG
        </button>
      </div>
    </div>
  );
} 