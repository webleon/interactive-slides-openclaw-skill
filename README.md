# 🎬 Interactive Slides - AI 驱动交互式演示文稿

为 OpenClaw 创建交互式、动画化的 Web 演示文稿（HTML 格式）。**AI 直接生成代码**，无需脚本。

---

## ✨ 核心特性

### 🎨 10 种视觉预设
Neon Noir、Executive Dark、Deep Cosmos、Terminal、Editorial、Swiss Grid、Studio Soft、Warm Magazine、Brutalist、Aurora

### 🎯 3 种展示模式
Slide Deck（幻灯片）、Scroll Story（滚动叙事）、Interactive Deck（交互卡片）

### 🛠️ AI 驱动
- ✅ 智能理解主题和受众
- ✅ 自动推荐风格预设
- ✅ 分析文档/URL 生成内容
- ✅ 直接生成完整 HTML
- ✅ 自然语言迭代优化

---

## 🚀 使用方式

### 直接使用
```
"创建一个关于 Q1 投资者更新的演示文稿"
"把这份 PDF 转为交互式幻灯片"
"制作一个产品发布会的演示，用我们的品牌色 #2B4EFF"
```

### AI 工作流
1. **Discovery** - AI 询问受众、目标、展示方式
2. **Content** - AI 生成幻灯片大纲（ghost list）
3. **Mode** - AI 推荐展示模式
4. **Build** - AI 直接生成完整 HTML 代码
5. **Save** - AI 使用 `write` 工具保存到 `output/`
6. **Publish** - AI 提供 GitHub Pages 发布指南

---

## 📁 项目结构

```
interactive-slides/
├── SKILL.md              # AI 提示词（核心）
├── STYLE_PRESETS.md      # 10 种视觉预设（AI 参考）
├── README.md              # 项目说明
├── CHANGELOG.md           # 变更日志
├── LICENSE                # 许可证
├── docs/
│   └── AI_ARCHITECTURE.md # AI 驱动架构说明
├── output/               # 生成的演示文稿
├── log/                  # 日志
└── memory/               # 会话记忆
```

**架构转变**: 从 Python 脚本生成 → AI 直接生成 HTML

---

## 📝 输出文件

- 单个 `.html` 文件（< 500KB）
- 包含所有 CSS/JS（CDN 加载）
- 可在任何浏览器打开
- 支持全屏演示（F11）
- 支持 URL 分享（GitHub Pages）

---

## 🔗 原项目
基于 [sylvial928/interactive-slides](https://github.com/sylvial928/interactive-slides) 移植到 OpenClaw，适配 AI 驱动架构。
