# 世界国家轮廓地图资源网 (World Country Outlines)

一个提供高质量SVG国家轮廓图的多语言Next.js网站，方便设计师、数据可视化专家和教育工作者使用。

[English Documentation](#english-documentation) | [中文文档](#中文文档)

![网站预览](public/preview.png)

## 中文文档

### 项目简介

这个项目提供了全球200多个国家和地区的高质量矢量轮廓图，支持SVG、EPS和PNG格式下载。网站采用响应式设计，支持中英文双语界面，并针对SEO进行了优化。

### 特点

- **多语言支持**：完整的中英文用户界面，自动检测浏览器语言并跳转
- **多格式下载**：支持SVG、EPS和多种分辨率的PNG格式
- **响应式设计**：适配各种设备屏幕尺寸
- **SEO优化**：包含结构化数据、元标签和语义化HTML
- **现代UI**：使用Tailwind CSS和Shadcn UI构建的美观界面

### 项目结构

```
world-country-outlines-template/
├── app/                      # Next.js应用目录
│   ├── zh/                   # 中文版路由
│   │   └── country/          # 中文国家详情页
│   ├── en/                   # 英文版路由
│   │   └── country/          # 英文国家详情页
│   ├── seo.tsx               # SEO相关配置
│   └── page.tsx              # 根页面（重定向）
├── components/               # 组件目录
│   ├── i18n/                 # 国际化相关组件
│   │   ├── config.ts         # 语言配置
│   │   └── LanguageSwitcher.tsx  # 语言切换器
│   └── ui/                   # UI组件
│       ├── button.tsx        # 按钮组件
│       ├── card.tsx          # 卡片组件
│       ├── footer.tsx        # 页脚组件
│       ├── input.tsx         # 输入框组件
│       └── navbar.tsx        # 导航栏组件
├── lib/                      # 工具库
│   └── utils.ts              # 通用工具函数
├── middleware.ts             # Next.js中间件（处理路由和语言）
├── public/                   # 静态资源
│   └── maps/                 # 地图资源文件
└── tailwind.config.js        # Tailwind CSS配置
```

### 安装与运行

1. 克隆项目

```bash
git clone https://github.com/username/world-country-outlines-template.git
cd world-country-outlines-template
```

2. 安装依赖

```bash
pnpm install
```

3. 开发环境运行

```bash
pnpm dev
```

4. 构建生产版本

```bash
pnpm build
pnpm start
```

### 技术栈

- **框架**：Next.js 15
- **语言**：TypeScript
- **CSS框架**：Tailwind CSS
- **UI组件**：Shadcn UI
- **图标**：Lucide Icons
- **包管理**：pnpm

---

## English Documentation

### Project Introduction

This project provides high-quality vector outline maps for over 200 countries and regions, supporting downloads in SVG, EPS, and PNG formats. The website features a responsive design, supports both English and Chinese interfaces, and is optimized for SEO.

### Features

- **Multilingual Support**: Complete English and Chinese user interfaces with automatic browser language detection
- **Multiple Format Downloads**: Support for SVG, EPS, and PNG formats in various resolutions
- **Responsive Design**: Adapts to various device screen sizes
- **SEO Optimization**: Includes structured data, meta tags, and semantic HTML
- **Modern UI**: Beautiful interface built with Tailwind CSS and Shadcn UI

### Project Structure

```
world-country-outlines-template/
├── app/                      # Next.js app directory
│   ├── zh/                   # Chinese route
│   │   └── country/          # Chinese country detail pages
│   ├── en/                   # English route
│   │   └── country/          # English country detail pages
│   ├── seo.tsx               # SEO-related configuration
│   └── page.tsx              # Root page (redirects)
├── components/               # Component directory
│   ├── i18n/                 # Internationalization components
│   │   ├── config.ts         # Language configuration
│   │   └── LanguageSwitcher.tsx  # Language switcher
│   └── ui/                   # UI components
│       ├── button.tsx        # Button component
│       ├── card.tsx          # Card component
│       ├── footer.tsx        # Footer component
│       ├── input.tsx         # Input component
│       └── navbar.tsx        # Navbar component
├── lib/                      # Utility library
│   └── utils.ts              # General utility functions
├── middleware.ts             # Next.js middleware (handling routes and languages)
├── public/                   # Static assets
│   └── maps/                 # Map resource files
└── tailwind.config.js        # Tailwind CSS configuration
```

### Installation and Usage

1. Clone the project

```bash
git clone https://github.com/username/world-country-outlines-template.git
cd world-country-outlines-template
```

2. Install dependencies

```bash
pnpm install
```

3. Run in development environment

```bash
pnpm dev
```

4. Build for production

```bash
pnpm build
pnpm start
```

### Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **CSS Framework**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Icons**: Lucide Icons
- **Package Management**: pnpm

---

## License

This project is licensed under the [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) license.
