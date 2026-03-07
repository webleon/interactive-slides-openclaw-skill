# Interactive Slides - AI 驱动架构

## 🎯 核心转变

从 **Python 脚本生成** → **AI 直接生成 HTML**

---

## 📁 简化后的目录结构

```
interactive-slides/
├── SKILL.md              # AI 提示词（核心）
├── STYLE_PRESETS.md      # 10 种视觉预设（AI 参考）
├── README.md              # 项目说明
├── CHANGELOG.md           # 变更日志
├── LICENSE                # 许可证
├── output/               # 生成的演示文稿
├── log/                  # 日志
└── memory/               # 会话记忆
```

**删除的文件**:
- ❌ `modules/builder.py` - 不需要 Python 脚本
- ❌ `modules/style_preview.py` - AI 直接生成预览
- ❌ `run.sh` - 不需要执行脚本
- ❌ `config.json` - 配置内嵌在 SKILL.md 中
- ❌ `templates/` - 模板内嵌在 SKILL.md 中

---

## 🤖 AI 工作流程

### 用户输入
```
"创建一个关于 Q1 投资者更新的交互式演示文稿"
```

### AI 处理流程

1. **理解需求**
   - 主题：Q1 投资者更新
   - 受众：投资者
   - 目标：展示业绩和前景
   - 展示方式：现场演示

2. **推荐风格**
   - 根据受众推荐：Executive Dark 或 Swiss Grid
   - 生成风格预览 HTML 供选择

3. **生成大纲**
   - 创建 ghost list（幻灯片结构）
   - 等待用户确认

4. **生成 HTML**
   - 直接输出完整 HTML 代码
   - 包含 CSS、JS、动画

5. **保存文件**
   - 使用 `write` 工具保存到 `output/`
   - 文件名：`Q1_投资者更新_20260307_2245.html`

6. **提供发布指南**
   - GitHub Pages 托管说明

---

## 📝 AI 生成示例

### 用户请求
```
"创建一个关于产品发布会的演示文稿，受众是科技媒体和开发者"
```

### AI 回复
```
好的！我来帮你创建一个产品发布会的交互式演示文稿。

## Phase 1: 发现

根据你提供的信息：
- **主题**: 产品发布会
- **受众**: 科技媒体和开发者
- **推荐风格**: Neon Noir（科技感）或 Terminal（开发者友好）
- **展示方式**: 现场演示 → 推荐 Slide Deck 模式

在开始之前，我需要确认：
1. 你有什么内容材料吗？（文档、URL、大纲）
2. 有品牌颜色/字体要求吗？
3. 预计多少页幻灯片？

## Phase 2: 内容大纲

基于产品发布会的典型结构，我建议：

Slide 1 — 产品发布标题
  Headline: [产品名称] 正式发布
  Content: 日期、标语

Slide 2 — 问题与痛点
  Headline: 我们解决的核心问题
  Content: 3 个关键痛点

Slide 3 — 解决方案
  Headline: 产品介绍
  Content: 核心功能展示

... (共 8 页)

这个结构可以吗？需要调整吗？

[等待确认]

## Phase 3: 生成 HTML

[生成完整 HTML 代码]

## Phase 4: 保存

[使用 write 工具保存到 output/目录]

文件已保存：`output/产品发布会_20260307_2245.html`

## Phase 5: 发布

要免费发布到 GitHub Pages:
1. 创建 GitHub 仓库
2. 上传 HTML 文件
3. 启用 Pages
...
```

---

## 🎨 风格预览生成

当用户没有品牌套件时，AI 生成风格预览：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>风格预览</title>
<style>
/* 3 个预设并排显示 */
</style>
</head>
<body>
<!-- 预设 A: Neon Noir -->
<!-- 预设 B: Executive Dark -->
<!-- 预设 C: Swiss Grid -->
</body>
</html>
```

告诉用户："打开 style-preview.html 查看 3 个风格，哪个感觉对？"

---

## 🛠️ 技术实现

### AI 需要掌握的技术

1. **HTML 结构**
   - 幻灯片模式：`<div class="slides-wrapper">` + 多个`.slide`
   - 滚动叙事：多个`<section class="story-section">`
   - 导航点：`.slide-dots` 或 `.section-nav`

2. **CSS 变量**
   - 从 STYLE_PRESETS.md 复制`:root {}`块
   - 使用`var(--accent)`等变量

3. **GSAP 动画**
   - CDN 加载：`<script src="gsap.min.js">`
   - 基础动画：`gsap.from('.slide', {opacity: 0, duration: 0.7})`

4. **导航逻辑**
   - 键盘：方向键切换
   - 点击：左右半屏
   - 触摸：滑动
   - 滚轮：上下滚动

5. **视口缩放**
   - `scaleToViewport()` 函数
   - 1280×720 固定画布

---

## 📋 完整 HTML 模板（AI 参考）

AI 应掌握以下模板结构，根据用户需求调整：

### Slide Deck 模式核心结构

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{TITLE}}</title>
    {{FONTS_LINK}}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <style>
        {{CSS_VARS}}
        /* 全局样式和幻灯片样式 */
    </style>
</head>
<body>
    <div class="slides-wrapper">
        <!-- 幻灯片内容 -->
        {{SLIDES_CONTENT}}
    </div>
    
    <!-- 导航点 -->
    <nav class="slide-dots"></nav>
    
    <script>
        // 视口缩放
        function scaleToViewport() { ... }
        
        // 导航逻辑
        function nextSlide() { ... }
        function prevSlide() { ... }
        
        // 动画
        gsap.from('.slide-content', { ... });
    </script>
</body>
</html>
```

---

## ✅ 检查清单

AI 生成后应自检：

- [ ] HTML 结构完整（head/body/script）
- [ ] CSS 变量正确（从 STYLE_PRESETS.md 复制）
- [ ] GSAP CDN 加载
- [ ] 视口缩放函数包含
- [ ] 导航逻辑完整（键盘/点击/触摸/滚轮）
- [ ] 导航点生成
- [ ] 动画效果添加
- [ ] 文件保存到 output/目录
- [ ] 提供 GitHub Pages 发布指南

---

## 🚀 使用示例

### 示例 1: 简单主题
```
用户："创建一个关于 AI 趋势的演示文稿"

AI:
1. 询问受众、目标、展示方式
2. 推荐风格（Deep Cosmos 适合科技主题）
3. 生成 8 页大纲
4. 生成完整 HTML
5. 保存到 output/AI 趋势_20260307_2245.html
```

### 示例 2: 文档转换
```
用户："把这份 PDF 转为交互式幻灯片" [上传文件]

AI:
1. 读取 PDF 内容
2. 提取关键点生成 ghost list
3. 确认结构
4. 生成 HTML（每页一个关键点）
5. 保存
```

### 示例 3: 品牌定制
```
用户："用我们的品牌颜色创建产品演示，primary: #2B4EFF"

AI:
1. 使用用户颜色生成自定义:root {}
2. 应用品牌颜色到 HTML
3. 生成演示文稿
4. 保存
```

---

*基于 sylvial928/interactive-slides 项目，适配 OpenClaw AI 驱动架构*
