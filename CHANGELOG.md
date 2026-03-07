# Changelog

所有重要的项目变更都将记录在此文件中。

---

## [1.1.0] - 2026-03-07

### 🔄 架构调整
- **从 Python 脚本 → AI 直接生成**
- 删除 `modules/` 目录（builder.py, style_preview.py）
- 删除 `run.sh` 执行脚本
- 删除 `templates/` 目录
- 简化目录结构

### ✨ 新增功能
- **AI 驱动架构** - AI 直接理解需求并生成 HTML
- **智能风格推荐** - 根据受众自动推荐预设
- **文档/URL 分析** - AI 分析内容生成幻灯片
- **自然语言迭代** - "让动画更流畅"、"换个深色风格"

### 📁 新结构
```
interactive-slides/
├── SKILL.md              # AI 提示词（核心）
├── STYLE_PRESETS.md      # 10 种视觉预设
├── README.md
├── CHANGELOG.md
├── LICENSE
├── docs/
│   └── AI_ARCHITECTURE.md # AI 架构说明
├── output/
├── log/
└── memory/
```

---

## [1.0.0] - 2026-03-07

### 🎯 初始版本
- 从 sylvial928/interactive-slides 项目移植到 OpenClaw
- 完整复刻原项目功能（除 PPT 导出）

### ✨ 核心功能
- **10 种视觉预设** - Neon Noir、Executive Dark 等
- **3 种展示模式** - Slide Deck、Scroll Story、Interactive Deck
- **6 阶段工作流** - Discovery → Content → Mode → Build → Preview → Publish
- **GSAP 动画** - 专业级动画效果
- **GitHub Pages 发布** - 免费托管

---

*最后更新：2026-03-07*
