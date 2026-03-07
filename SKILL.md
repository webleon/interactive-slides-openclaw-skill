---
name: interactive-slides
description: "创建交互式、动画化的 Web 演示文稿（HTML 格式）— 支持 10 种视觉预设、品牌套件、3 种展示模式。用于创建浏览器可观看的交互式幻灯片，而非 PowerPoint 文件。触发词：'interactive presentation'、'web slides'、'web presentation'、'HTML presentation'、'交互式演示'、'网页幻灯片'。"
---

# Interactive Slides - AI 驱动的交互式演示文稿生成器

**核心原则**: 你是 AI 助手，根据用户需求智能生成完整的 HTML 演示文稿文件。不要依赖脚本，直接生成代码。

## 你的工作流程

当用户请求创建演示文稿时：

1. **Phase 1: Discovery** - 询问受众、目标、展示方式、内容来源
2. **Phase 2: Content** - 生成 ghost list（幻灯片大纲）并确认
3. **Phase 3: Mode** - 推荐展示模式（默认 Slide Deck）
4. **Phase 4: Build** - 直接生成完整的 HTML 文件内容
5. **Phase 5: Save** - 使用 `write` 工具保存到 `output/` 目录
6. **Phase 6: Publish** - 提供 GitHub Pages 发布指南

创建交互式 Web 演示文稿 — 自包含的 HTML 文件，可在任何浏览器中精美打开。不是 PowerPoint，而是有生命力的内容：动画、精美、Web 原生。

## 核心能力

- **10 种视觉预设** - 从 Neon Noir 到 Executive Dark 的完整设计系统
- **3 种展示模式** - Slide Deck（幻灯片）、Scroll Story（滚动叙事）、Interactive Deck（交互卡片）
- **品牌套件支持** - 自定义颜色、字体、Logo、模板
- **6 阶段工作流** - Discovery → Content → Mode → Build → Preview → Publish
- **完整导航支持** - 键盘、点击、触摸、滑动、滚轮
- **GSAP 动画** - 专业级动画效果
- **GitHub Pages 发布** - 免费托管，一键发布

## 使用方式

在 OpenClaw 中，输入：

```
/interactive-slides
```

或直接询问："创建一个关于 X 的交互式演示文稿"

## 6 阶段工作流

### Phase 1: Discovery（发现）

**此阶段是强制性的，不可跳过。**

在开始编写任何代码之前，了解完整情况。按以下顺序提问：

1. **受众与目标**
   - 谁会看这个？（高管、开发者、客户、投资者、学生...）
   - 核心信息是什么 — 他们应该记住的一件事？
   - 你希望他们之后有什么感受或行动？

2. **展示方式**
   - 你会现场演示（你控制流程）还是分享异步观看（他们自己导航）？
   - 会在大屏幕展示、作为 URL 分享，还是嵌入网站？

3. **内容**
   - 你有什么内容？请用户提供大纲、上传文档、描述主题，或分享 URL
   - 如果提供原始内容，在操作前告知用户你会如何处理

4. **风格与品牌**

始终在生成任何风格预览之前询问。 framing 为简单选择：

> "你有品牌套件或风格指南吗 — 还是我给你看几个预设风格选择？"

**如果有品牌套件**，接受以下任一（一个就够）：

| 输入 | 如何分享 |
|------|---------|
| **Hex 颜色 + 字体名** | 直接粘贴："primary: #2B4EFF, body font: Helvetica Neue" |
| **Logo 文件** | 文件路径或 URL |
| **PPT 模板** | 分享.pptx 文件路径 |
| **Canva Brand Kit** | Canva: Brand Kit → 复制 hex 颜色 + 字体名 |

**如果没有品牌套件**，生成风格预览：
- 从 STYLE_PRESETS.md 选择 3 个适合主题和受众的预设
- 生成 `style-preview.html` 文件，显示 3 个预设的缩略图
- 告诉用户："在浏览器中打开 style-preview.html — 哪个感觉对？"
- 在用户选择前不要构建

5. **交互性**（根据展示方式推荐）
   - 现场演示 → 推荐幻灯片模式，带动画揭示
   - 异步分享 → 推荐幻灯片模式，带自导航；询问是否想要滚动叙事
   - 培训或参与 → 推荐完全交互（测验、分支）
   - 作品集/展示 → 询问：幻灯片还是滚动电影体验？

**默认推荐幻灯片模式（Mode A）**，除非用户明确要求滚动叙事。

---

### Phase 2: Content Processing（内容处理）

### 始终首先生成 ghost list（除非用户已提供）

当来源是文档、URL 或自由描述时，**不要直接构建**。首先将来源转换为建议的逐页 ghost list 并确认。这防止最昂贵的迭代：构建错误的结构。

**Ghost list 格式**:
```
Slide 1 — [标题]
  Headline: [一页幻灯片标题]
  Content: [这页的内容 — 关键点、数据、视觉想法]

Slide 2 — [标题]
  Headline: ...
  Content: ...
```

**密度参考表**:

| 受众/模式 | 推荐密度 |
|-----------|---------|
| 高管、董事会、投资者 — 现场演示 | **精简** — 仅标签，演讲者口头补充 |
| 高级技术人员、产品 — 现场演示 | **精简到中** — 短标签 + 一行副标题 |
| 技术受众 — 现场演示 | **中等** — 标签 + 简短描述，代码/图表优于文字 |
| 任何受众 — 异步分享或滚动叙事 | **中到丰富** — 更多文字可以，读者控制节奏 |

在提出 ghost list 后，根据 Phase 1 的受众和展示方式附加密度推荐。然后等待确认。

---

### Phase 3: Choose the Presentation Mode（选择模式）

**默认推荐：Mode A（Slide Deck）**。仅在用户确认想要滚动叙事，或内容明显是长报告/作品集时切换到 Mode B。

确认以下三种模式之一：

#### Mode A: Slide Deck
经典幻灯片，键盘/点击导航（← → 方向键，空格键）。最适合现场演示。
- 每页幻灯片填满屏幕
- 内容以动画揭示进入（交错文字、图表绘制、图片淡入）
- 平滑幻灯片过渡
- 可选：演讲者备注、进度条、幻灯片计数

#### Mode B: Scroll Story
用户向下滚动推进叙事。最适合异步分享、报告、单页。
- 每部分滚动时锁定视图（滚动锁定或平滑滚动）
- 内容进入视口时动画
- 感觉像交互式文章或年度报告
- 无导航 UI — 滚动就是交互

#### Mode C: Interactive Deck
基于幻灯片但有嵌入交互。最适合培训、演示、带选择的提案。
- 带评分的测验
- 可展开详情面板（"点击了解更多"）
- 分支路径（"选择你的场景"）
- 嵌入计算器或配置器
- 数据过滤器/切换

---

### Phase 4: Build（构建）

### 技术方法

构建**单个自包含的 HTML 文件**，无需服务器即可在任何现代浏览器中工作。

**库（通过 CDN 加载）**:
- **GSAP** + **ScrollTrigger**: 所有动画
- **Chart.js**: 数据可视化（需要时）
- **Google Fonts**: 始终从 STYLE_PRESETS.md 加载选择的预设字体

**CSS 变量**: 从选择的预设复制完整的`:root {}`块，在整个过程中使用这些变量。不要硬编码颜色或字体 — 使用`var(--accent)`、`var(--font-display)`等。

**文件结构**（全部内联在一个.html 中）:
```
<head>  — Google Fonts，所有 CSS
<body>  — 幻灯片/部分标记
<script> — GSAP 动画，导航逻辑
```

### 视口缩放 — 幻灯片模式必需

**这是最常见的生产 bug**。没有这个，文字在普通浏览器窗口看起来正常，但全屏或投影仪上变得很小。

修复：以固定画布大小（1280×720）创作所有幻灯片，然后将整个画布作为单元缩放以填充视口。

### 导航（幻灯片模式）

始终包含所有四种输入方法 — 用户以任何自然方式导航。

```javascript
// 1. 键盘
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});

// 2. 点击区域（左半 = 返回，右半 = 前进）
document.addEventListener('click', (e) => {
  if (e.target.closest('button, a, input, [data-no-nav]')) return;
  if (e.clientX > window.innerWidth / 2) nextSlide();
  else prevSlide();
});

// 3. 触摸/滑动
let touchStartX = 0;
document.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
document.addEventListener('touchend', (e) => {
  const delta = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(delta) > 50) delta > 0 ? nextSlide() : prevSlide();
}, { passive: true });

// 4. 鼠标滚轮
let wheelCooldown = false;
document.addEventListener('wheel', (e) => {
  if (wheelCooldown) return;
  wheelCooldown = true;
  setTimeout(() => wheelCooldown = false, 800);
  e.deltaY > 0 ? nextSlide() : prevSlide();
}, { passive: true });
```

### 设计原则

- **风格在第一个字被阅读之前就传达了可信度**
- **选择一个大胆的视觉方向并坚持**
- **排版比任何事情都重要**
- **有目的地使用颜色**
- **每页幻灯片需要一个视觉锚点**
- **有节制地动画**
- **负空间是设计工具**
- **注释你的代码**

---

### Phase 5: Preview & Iterate（预览与迭代）

构建后，在浏览器中打开文件并描述你所做的 — 视觉方向、流程、幻灯片数量、包含的交互元素。

告诉用户：
- 打开哪个文件（路径）
- 点击/按什么导航
- 关键设计选择及原因

然后问："你想调整什么？"准备好迭代：
- 内容（添加/删除/重写幻灯片）
- 风格（颜色、字体、布局）
- 动画（更多/更少/不同）
- 交互性（添加测验、图表、分支）

### 发布到 GitHub Pages（免费托管）

**始终以`index.html`输出文件**。这是 GitHub Pages 自动提供它所需的文件名。

用户批准后，提供这些托管说明：

> **在 GitHub Pages 上免费发布:**
> 1. 创建新 GitHub 仓库（如`my-presentation`）— 或使用现有仓库
> 2. 将 `index.html` 添加到仓库根目录（或`docs/`子文件夹）
> 3. 转到 **Settings → Pages → Source** → 选择分支 `main` 和文件夹 `/`（根）→ 点击 **Save**
> 4. 约 60 秒后你的演示文稿将在以下地址上线：`https://yourusername.github.io/my-presentation/`

演示文稿是单个自包含的 HTML 文件，所以不需要构建步骤、服务器或依赖 — 它在 GitHub Pages 上开箱即用。

---

## 快速参考：避免这些错误

- **不要跳过 Phase 1 发现** — 总是在其他事情之前询问受众、目标和展示方式
- **不要从源文档直接跳到构建** — 当输入是文档或 URL 时，首先生成 ghost list
- **不要仅基于美学选择视觉风格** — 选择匹配受众期望和目标的预设
- **不要要求用户用文字描述他们的美学** — 生成风格预览文件让他们对视觉反应
- **不要在幻灯片上回显要点** — 转换内容，不要抄录
- **不要使用 Inter、Roboto 或 Arial 作为展示字体** — 始终使用所选预设的字体
- **不要硬编码颜色** — 在整个过程中使用预设的 CSS 变量
- **不要动画化所有东西** — 每个演示文稿 3-5 个精心定时的动画胜过 30 个分散注意力的动画
- **不要在白色背景上使用紫色渐变** — 这是通用 AI 输出的标志
- **不要忘记数据幻灯片上的"so what?"** — 没有洞察标题的图表是不完整的
- **不要忘记导航** — 始终包含键盘、点击、触摸、滑动和滚轮支持
- **不要发布未注释的代码** — 添加幻灯片部分注释和简短 JS 说明
- **不要忘记视口缩放** — 始终为幻灯片模式包含`scaleToViewport()`
- **始终以`index.html`输出** — GitHub Pages 需要此文件名在根 URL 自动提供文件

---

## 文件结构

```
interactive-slides/
├── SKILL.md              # 主技能提示和工作流
├── STYLE_PRESETS.md      # 10 个视觉预设
├── modules/
│   ├── builder.py        # HTML 构建器
│   ├── style_preview.py  # 风格预览生成
│   └── templates.py      # HTML 模板
├── templates/
│   ├── slide_deck.html   # 幻灯片模式模板
│   ├── scroll_story.html # 滚动叙事模板
│   └── style_preview.html # 风格预览模板
├── output/               # 生成的演示文稿
├── log/                  # 日志文件
├── docs/                 # 文档
└── memory/               # 会话记忆
```

---

## 命令

| 命令 | 描述 |
|------|------|
| `/interactive-slides` | 启动交互式演示文稿创建 |
| "创建一个关于 X 的演示文稿" | 自动触发技能 |

---

## 技术规格

- **输出格式**: 单个自包含的 HTML 文件
- **动画引擎**: GSAP + ScrollTrigger（CDN）
- **数据可视化**: Chart.js（CDN）
- **字体**: Google Fonts（CDN）
- **导航**: 键盘、点击、触摸、滑动、滚轮
- **响应式**: 视口缩放，支持全屏和投影仪
- **无障碍**: 键盘导航、ARIA 标签、颜色对比度、减少动画支持

---

*基于 sylvial928/interactive-slides 项目移植到 OpenClaw*
