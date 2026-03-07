# 🎬 Interactive Slides - 交互式演示文稿

为 OpenClaw 创建交互式、动画化的 Web 演示文稿（HTML 格式）。**完整复刻原项目功能**，AI 直接生成代码。

---

## ✨ 核心特性

### 🎨 10 种视觉预设
Neon Noir、Executive Dark、Deep Cosmos、Terminal、Editorial、Swiss Grid、Studio Soft、Warm Magazine、Brutalist、Aurora

### 🎯 3 种展示模式
- **Slide Deck** - 经典幻灯片，键盘/点击导航
- **Scroll Story** - 滚动叙事，长页交互（scroll-snap-stop: always）
- **Interactive Deck** - 交互式卡片，嵌入测验/分支

### 🛠️ 完整功能
- ✅ 6 阶段工作流（Discovery → Content → Mode → Build → Preview → PPT Export）
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

## 🚀 使用方式

### 直接使用
```
"创建一个关于 Q1 投资者更新的演示文稿"
"把这份 PDF 转为交互式幻灯片"
"制作一个滚动叙事的产品报告"
"用我们的品牌色 #2B4EFF 创建产品演示"
```

### AI 工作流

**Phase 1: Discovery** - AI 询问受众、目标、展示方式、品牌套件

**Phase 2: Content** - AI 生成 ghost list（幻灯片大纲），确认内容结构和密度

**Phase 3: Mode** - AI 推荐展示模式（默认 Slide Deck）

**Phase 4: Build** - AI 直接生成完整 HTML 代码（包含 CSS/JS/动画）

**Phase 5: Preview** - AI 提供文件路径，根据反馈迭代

**Phase 6: PPT Export** - AI 主动提供 PPT 导出选项（可选）

---

## 📁 项目结构

```
interactive-slides/
├── SKILL.md              # AI 提示词（35KB+ 完整工作流）
├── STYLE_PRESETS.md      # 10 种视觉预设（完整 CSS）
├── README.md              # 项目说明
├── CHANGELOG.md           # 变更日志
├── LICENSE                # MIT 许可证
├── evals/
│   └── cases.md           # 8 个测试用例
├── docs/
│   └── AI_ARCHITECTURE.md # AI 驱动架构说明
├── output/               # 生成的演示文稿
├── log/                  # 日志
└── memory/               # 会话记忆
```

---

## 📝 输出文件

### HTML 文件特性
- 单个 `.html` 文件（< 500KB）
- 包含所有 CSS/JS（CDN 加载 GSAP/Chart.js）
- 可在任何现代浏览器打开
- 支持全屏演示（F11）
- 支持通过 URL 分享（GitHub Pages）

### 技术规格
| 技术 | 版本/说明 |
|------|----------|
| GSAP | 3.12.5 (CDN) |
| ScrollTrigger | 3.12.5 (CDN) |
| Chart.js | Latest (CDN) |
| Google Fonts | 根据预设加载 |
| 视口缩放 | scaleToViewport() |
| 导航方式 | 键盘/点击/触摸/滚轮 |
| 无障碍 | ARIA、键盘导航、prefers-reduced-motion |

---

## 🧪 测试用例

| 用例 | 场景 | 测试重点 |
|------|------|---------|
| Case 1 | 投资者推介会 | 6 阶段工作流完整性 |
| Case 2 | 产品发布会 | 品牌色应用 |
| Case 3 | 文档转换 | PDF 内容提取 |
| Case 4 | 滚动叙事报告 | Scroll Story 模式 |
| Case 5 | 技术分享会 | 开发者风格推荐 |
| Case 6 | 品牌定制 | 自定义 CSS 变量 |
| Case 7 | 密度调整 | Lean/Medium/Rich |
| Case 8 | 视觉处理 | 稀疏内容优化 |

**评分标准**: ≥90 分 优秀，≥80 分 良好，≥70 分 合格

---

## 🎨 视觉预设示例

| 预设 | 适用场景 | 特点 |
|------|---------|------|
| Neon Noir | 科技发布会 | 赛博朋克，高对比度 |
| Executive Dark | 董事会演示 | 专业商务，权威 |
| Deep Cosmos | 科研/愿景 | 宇宙感，宏大叙事 |
| Terminal | 开发者演讲 | 命令行风格 |
| Editorial | 学术/研究 | 编辑风格，精致 |
| Swiss Grid | 产品演示 | 现代简约，网格系统 |
| Studio Soft | 创意推介 | 温暖柔和 |
| Warm Magazine | 品牌故事 | 杂志风格 |
| Brutalist | 艺术/文化 | 粗野主义 |
| Aurora | 产品发布 | 现代流畅 |

---

## 📋 快速参考：避免这些错误

- ❌ 不要跳过 Phase 1 发现
- ❌ 不要从源文档直接跳到构建
- ❌ 不要仅基于美学选择视觉风格
- ❌ 不要要求用户用文字描述美学
- ❌ 不要在幻灯片上回显要点
- ❌ 不要使用 Inter/Roboto/Arial 作为展示字体
- ❌ 不要硬编码颜色
- ❌ 不要动画化所有东西
- ❌ 不要在白色背景上使用紫色渐变
- ❌ 不要忘记数据幻灯片上的"so what?"
- ❌ 不要忘记导航（键盘/点击/触摸/滚轮/导航点）
- ❌ 不要发布未注释的代码
- ❌ 不要忘记视口缩放
- ❌ 不要忘记输出为 index.html
- ❌ PPT 导出时不要在 hex 颜色中使用 #
- ❌ PPT 导出时不要共享 shadow 配置对象

---

## 🔗 原项目

基于 [sylvial928/interactive-slides](https://github.com/sylvial928/interactive-slides) 完整复刻到 OpenClaw。

**复刻程度**: 100% 完整复刻原项目功能、工作流、代码示例、测试用例

---

*最后更新：2026-03-07*
