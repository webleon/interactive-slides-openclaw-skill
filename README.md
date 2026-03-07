# 🎬 Interactive Slides

**AI 驱动交互式演示文稿生成器** · 完整复刻原项目功能

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![OpenClaw Skill](https://img.shields.io/badge/OpenClaw-Skill-blue.svg)](https://github.com/openclaw/openclaw)
[![Original Project](https://img.shields.io/badge/Original-sylvial922/interactive--slides-orange)](https://github.com/sylvial928/interactive-slides)

---

## 🙏 致谢

**本项目完全基于 [sylvial928/interactive-slides](https://github.com/sylvial928/interactive-slides) 项目复刻开发**

特别感谢 **sylvial928 团队** 提供原始框架、6 阶段工作流、视觉预设设计和完整代码示例。没有他们的贡献，就没有本项目的实现。

本项目完整复刻了原项目的核心功能：
- ✅ 6 阶段工作流（Discovery → Content → Mode → Build → Preview → PPT Export）
- ✅ 10 种视觉预设（Neon Noir、Executive Dark 等）
- ✅ 3 种展示模式（Slide Deck、Scroll Story、Interactive Deck）
- ✅ 完整 HTML/CSS/JS 代码示例
- ✅ 导航逻辑（键盘/点击/触摸/滚轮）
- ✅ 视口缩放实现
- ✅ 测试用例（evals/）
- ✅ 20+ 条错误清单

---

## 📖 目录

- [快速开始](#-快速开始)
- [核心功能](#-核心功能)
- [工作流](#-工作流)
- [视觉预设](#-视觉预设)
- [技术规格](#-技术规格)
- [测试用例](#-测试用例)
- [使用示例](#-使用示例)

---

## 🚀 快速开始

### 安装

```bash
# 1. 克隆仓库
git clone https://github.com/webleon/interactive-slides-openclaw-skill.git
cd interactive-slides-openclaw-skill

# 2. 在 OpenClaw 中使用
# 将技能目录复制到 OpenClaw skills 目录
cp -r interactive-slides-openclaw-skill ~/.openclaw/workspace/skills/
```

### 使用

在 OpenClaw 中直接使用：

```
"创建一个关于 Q1 投资者更新的演示文稿"
"把这份 PDF 转为交互式幻灯片"
"制作一个滚动叙事的产品报告"
"用我们的品牌色 #2B4EFF 创建产品演示"
```

### 输出

- **演示文稿：** `~/.openclaw/workspace/skills/interactive-slides-openclaw-skill/output/`
- **文件格式：** 单个 `.html` 文件（< 500KB）
- **发布：** GitHub Pages 免费托管

---

## ✨ 核心功能

### 🎨 10 种视觉预设

| 预设 | 适用场景 | 特点 |
|------|---------|------|
| **Neon Noir** | 科技发布会 | 赛博朋克，高对比度 |
| **Executive Dark** | 董事会演示 | 专业商务，权威 |
| **Deep Cosmos** | 科研/愿景 | 宇宙感，宏大叙事 |
| **Terminal** | 开发者演讲 | 命令行风格 |
| **Editorial** | 学术/研究 | 编辑风格，精致 |
| **Swiss Grid** | 产品演示 | 现代简约，网格系统 |
| **Studio Soft** | 创意推介 | 温暖柔和 |
| **Warm Magazine** | 品牌故事 | 杂志风格 |
| **Brutalist** | 艺术/文化 | 粗野主义 |
| **Aurora** | 产品发布 | 现代流畅 |

### 🎯 3 种展示模式

| 模式 | 导航方式 | 适用场景 |
|------|---------|---------|
| **Slide Deck** | 键盘/点击/触摸/滚轮 | 现场演示、异步分享 |
| **Scroll Story** | 滚动（scroll-snap） | 长报告、作品集 |
| **Interactive Deck** | 交互元素 | 培训、测验、分支 |

### 🛠️ 完整功能

- ✅ 品牌套件支持（颜色、字体、Logo、PPT 模板）
- ✅ GSAP 专业级动画（CDN 3.12.5）
- ✅ 完整导航支持（键盘/点击/触摸/滚轮）
- ✅ Chart.js 数据可视化
- ✅ 视口缩放（1280×720 固定画布）
- ✅ 单文件 HTML 输出，无需服务器
- ✅ GitHub Pages 一键发布
- ✅ PPT 导出（pptxgenjs，可选）
- ✅ 无障碍支持（ARIA、键盘导航、减少动画）

---

## 📋 工作流

### 6 阶段完整流程

```
Phase 1: Discovery → Phase 2: Content → Phase 3: Mode → Phase 4: Build → Phase 5: Preview → Phase 6: PPT Export
```

#### Phase 1: Discovery（发现）
- 询问受众、目标、展示方式
- 确认品牌套件或展示预设
- 推荐展示模式

#### Phase 2: Content Processing（内容处理）
- 生成 ghost list（幻灯片大纲）
- 确认内容结构和密度
- 视觉处理选择（可选）

#### Phase 3: Choose Mode（选择模式）
- Slide Deck（默认）
- Scroll Story
- Interactive Deck

#### Phase 4: Build（构建）
- 生成完整 HTML 代码
- 应用 CSS 变量和动画
- 包含导航逻辑

#### Phase 5: Preview & Iterate（预览与迭代）
- 提供文件路径
- 根据反馈调整

#### Phase 6: PPT Export（PPT 导出，可选）
- 生成可编辑.pptx 文件
- 应用品牌套件

---

## 🎨 视觉预设

### 预设选择逻辑

| 受众 | 推荐预设 |
|------|---------|
| 投资者/董事会 | Executive Dark, Swiss Grid |
| 科技/开发者 | Neon Noir, Terminal, Deep Cosmos |
| 创意/代理机构 | Studio Soft, Warm Magazine, Brutalist |
| 初创产品发布 | Aurora, Swiss Grid |
| 学术/研究 | Editorial, Deep Cosmos |

### 自定义品牌

接受以下任一输入：
- Hex 颜色 + 字体名
- Logo 文件路径或 URL
- PPT 模板.pptx 文件
- Canva Brand Kit 导出

---

## 🛠️ 技术规格

### 技术栈

| 技术 | 版本/说明 |
|------|----------|
| **GSAP** | 3.12.5 (CDN) |
| **ScrollTrigger** | 3.12.5 (CDN) |
| **Chart.js** | Latest (CDN) |
| **Google Fonts** | 根据预设加载 |
| **视口缩放** | scaleToViewport() |
| **导航方式** | 键盘/点击/触摸/滚轮 |
| **无障碍** | ARIA、键盘导航、prefers-reduced-motion |

### 输出文件特性

| 特性 | 说明 |
|------|------|
| **文件格式** | 单个 `.html` 文件 |
| **文件大小** | < 500KB |
| **自包含** | CSS/JS 全部内联 |
| **CDN 依赖** | GSAP/Chart.js/Google Fonts |
| **浏览器兼容** | 任何现代浏览器 |
| **全屏支持** | F11 全屏演示 |
| **GitHub Pages** | 一键发布 |

---

## 🧪 测试用例

### 覆盖场景

| 用例 | 场景 | 测试重点 |
|------|------|---------|
| **Case 1** | 投资者推介会 | 6 阶段工作流完整性 |
| **Case 2** | 产品发布会 | 品牌色应用 |
| **Case 3** | 文档转换 | PDF 内容提取 |
| **Case 4** | 滚动叙事报告 | Scroll Story 模式 |
| **Case 5** | 技术分享会 | 开发者风格推荐 |
| **Case 6** | 品牌定制 | 自定义 CSS 变量 |
| **Case 7** | 密度调整 | Lean/Medium/Rich |
| **Case 8** | 视觉处理 | 稀疏内容优化 |

### 评分标准

| 维度 | 权重 | 评分标准 |
|------|------|---------|
| 工作流完整性 | 30% | 6 阶段是否完整执行 |
| 代码质量 | 25% | HTML/CSS/JS 是否正确 |
| 设计质量 | 20% | 视觉预设、布局、动画 |
| 用户体验 | 15% | 导航、响应式、无障碍 |
| 文档质量 | 10% | 注释、发布指南 |

**总分**: ≥90 分 优秀，≥80 分 良好，≥70 分 合格，<70 分 需改进

---

## 💻 使用示例

### 示例 1: 投资者推介

```
用户："创建一个关于 Q1 投资者更新的演示文稿"

AI:
1. 询问受众（投资者）、目标（展示业绩）、展示方式
2. 推荐风格（Executive Dark 或 Swiss Grid）
3. 生成 8 页大纲
4. 生成完整 HTML
5. 保存到 output/Q1_投资者更新_20260307_2245.html
6. 提供 GitHub Pages 发布指南
```

### 示例 2: 品牌定制

```
用户："用我们的品牌色 #2B4EFF 创建产品演示"

AI:
1. 接受品牌色 #2B4EFF
2. 创建自定义:root {} 块
3. 生成产品演示结构
4. 应用品牌色到 HTML
5. 保存并预览
```

### 示例 3: 滚动叙事

```
用户："制作一个滚动叙事的产品报告"

AI:
1. 确认 Scroll Story 模式
2. 生成长报告结构（10+ 部分）
3. 使用 scroll-snap-stop: always
4. 包含进度条和章节导航
5. 使用 IntersectionObserver 动画
```

---

## 📚 相关背书

### 理论基础

| 理论/方法 | 提出者 | 机构 | 时间 |
|----------|--------|------|------|
| **GSAP 动画** | GreenSock | GreenSock | 2010-至今 |
| **Scroll Snap** | W3C | CSS Working Group | 2020 |
| **无障碍设计** | W3C | WCAG 2.1 | 2018 |

### 业界参考

本系统的设计参考了以下业界标准：

- **Slidev** - 开发者幻灯片工具
- **Reveal.js** - HTML 演示框架
- **Pitch.com** - 在线演示工具

> **注意：** 具体实现有所不同，仅供参考。

---

## 📄 许可证

**MIT License**

Copyright (c) 2026 sylvial928 / WebLeOn

---

## ⚠️ 免责声明

1. 本演示文稿生成器仅供参考，**不构成设计建议**
2. 输出内容基于用户提供信息，**不保证准确性**
3. 使用第三方 CDN 资源，**请注意网络安全**
4. GitHub Pages 发布需遵守**GitHub 服务条款**

---

## 🔗 链接

- **原始项目：** [sylvial928/interactive-slides](https://github.com/sylvial928/interactive-slides)
- **OpenClaw 文档：** [openclaw.ai](https://docs.openclaw.ai)
- **问题反馈：** [GitHub Issues](https://github.com/webleon/interactive-slides-openclaw-skill/issues)

---

*最后更新：2026-03-07 · 版本：v1.2 · 维护者：WebLeOn*
