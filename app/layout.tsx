
export const metadata = {
  title: "世界各国轮廓地图下载",
  description: "全球 200+ 国家轮廓 SVG/EPS/PNG 免费下载",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
