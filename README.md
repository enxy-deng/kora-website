# KORA China Guide

一个现代化中文产品官网，用于向中国用户介绍 KORA：运行在 Telegram 上的 AI 本地朋友。

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages

项目已包含 GitHub Actions 部署配置。推送到 GitHub 的 `main` 分支后，在仓库的 `Settings -> Pages` 中将 `Source` 设置为 `GitHub Actions`。

线上地址：

```text
https://enxy-deng.github.io/kora-website/
```

## Structure

```text
src/
  components/   基础 UI 与复用组件
  data/         页面文案与配置数据
  sections/     官网各内容区块
  styles/       Tailwind 与全局样式
```
