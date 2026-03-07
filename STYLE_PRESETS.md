# Style Presets - 10 种视觉预设

10 个精心策划的视觉身份，用于交互式演示文稿。每个预设都是一个完整的设计系统：颜色、排版、布局特征和动画个性。

## 使用方法

1. **在发现阶段**: 生成 `style-preview.html` 文件，显示 3 个预设并排作为迷你缩略图
2. **在构建阶段**: 将所选预设的 CSS 变量块复制到 HTML 的`:root {}`中
3. **在迭代阶段**: 根据请求切换预设或混合元素

按名称引用预设：*"use Neon Noir"*、*"something like Swiss Grid but warmer"*等。

---

## 10 个预设

---

### 1. Neon Noir - 霓虹黑色

**个性**: 电动、未来感、高对比度。感觉像赛博朋克仪表板。
**最适合**: 科技发布会、开发者工具、游戏、任何感觉前沿的东西。
**动画风格**: 快速捕捉、电光闪烁、故障揭示。

**字体**:
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
```

**CSS 变量**:
```css
:root {
  --bg:         #0a0a0f;
  --surface:    #12121a;
  --border:     #2a2a3a;
  --text-primary:   #f0f0ff;
  --text-secondary: #8888aa;
  --accent:     #00f5d4;
  --accent-2:   #7c3aed;
  --danger:     #ff2d55;

  --font-display: 'Space Grotesk', sans-serif;
  --font-body:    'JetBrains Mono', monospace;

  --radius:     4px;
  --shadow:     0 0 30px rgba(0, 245, 212, 0.15);
  --transition: 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

### 2. Executive Dark - 高管黑色

**个性**: 高级、权威、克制。感觉像彭博终端遇见奢侈品牌。
**最适合**: 董事会演示、投资者报告、财务报告、企业推介。
**动画风格**: 缓慢、深思熟虑的淡入。没有花哨 — 通过静止展现自信。

**字体**:
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
```

**CSS 变量**:
```css
:root {
  --bg:         #0d0d0d;
  --surface:    #161616;
  --border:     #2a2a2a;
  --text-primary:   #f5f0e8;
  --text-secondary: #888880;
  --accent:     #c9a96e;
  --accent-2:   #4a4a4a;
  --danger:     #c0392b;

  --font-display: 'Cormorant Garamond', serif;
  --font-body:    'DM Sans', sans-serif;

  --radius:     2px;
  --shadow:     0 4px 24px rgba(0, 0, 0, 0.6);
  --transition: 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

---

### 3. Deep Cosmos - 深邃宇宙

**个性**: 广阔、令人敬畏、电影感。感觉像 NASA 简报或 TED 演讲。
**最适合**: 科学、研究、雄心勃勃的愿景报告、任何需要感觉宏大的东西。
**动画风格**: 缓慢漂移、从下方淡入、视差深度。

**字体**:
```html
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Inter:wght@300;400&display=swap" rel="stylesheet">
```

**CSS 变量**:
```css
:root {
  --bg:         #04050f;
  --surface:    #0a0d1f;
  --border:     #1a2040;
  --text-primary:   #e8eeff;
  --text-secondary: #6070a0;
  --accent:     #4f8ef7;
  --accent-2:   #9b59b6;
  --danger:     #e74c3c;

  --font-display: 'Syne', sans-serif;
  --font-body:    'Inter', sans-serif;

  --radius:     8px;
  --shadow:     0 8px 40px rgba(79, 142, 247, 0.12);
  --transition: 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

### 4. Terminal - 终端

**个性**: 原始、开发者原生、直截了当。感觉像变美的 CLI。
**最适合**: 工程全体会议、开发者演讲、DevOps/基础设施、开源项目。
**动画风格**: 打字机揭示、逐行构建、闪烁光标。

**字体**:
```html
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=IBM+Plex+Sans:wght@400;500&display=swap" rel="stylesheet">
```

**CSS 变量**:
```css
:root {
  --bg:         #0c1a0c;
  --surface:    #111f11;
  --border:     #1e3a1e;
  --text-primary:   #a8ff78;
  --text-secondary: #558855;
  --accent:     #78ffa8;
  --accent-2:   #ffff78;
  --danger:     #ff6b6b;

  --font-display: 'IBM Plex Mono', monospace;
  --font-body:    'IBM Plex Mono', monospace;

  --radius:     0px;
  --shadow:     0 0 20px rgba(168, 255, 120, 0.1);
  --transition: 0.1s steps(4, end);
}
```

---

### 5. Editorial - 编辑

**个性**: 知识、精致、排版。感觉像设计精良的书籍或长篇阅读文章。
**最适合**: 研究摘要、思想领导力、学术内容、文化/媒体品牌。
**动画风格**: 翻页感、逐字揭示的文字、墨水渗透过渡。

**字体**:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Source+Serif+4:ital,wght@0,300;0,400;1,300&display=swap" rel="stylesheet">
```

**CSS 变量**:
```css
:root {
  --bg:         #faf8f3;
  --surface:    #f2ede2;
  --border:     #d4c9b0;
  --text-primary:   #1a1208;
  --text-secondary: #6b5f4a;
  --accent:     #c0392b;
  --accent-2:   #2c3e50;
  --danger:     #e74c3c;

  --font-display: 'Playfair Display', serif;
  --font-body:    'Source Serif 4', serif;

  --radius:     0px;
  --shadow:     0 2px 12px rgba(26, 18, 8, 0.08);
  --transition: 0.3s ease;
}
```

---

### 6. Swiss Grid - 瑞士网格

**个性**: 精确、系统、智能。感觉像动态的 Müller-Brockmann 海报。
**最适合**: 产品演示、设计审查、任何应该感觉周到和现代的东西。
**动画风格**: 基于网格的揭示、元素滑入对齐、数学精度。

**字体**:
```html
<link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,700;0,900;1,400&family=Barlow+Condensed:wght@400;600&display=swap" rel="stylesheet">
```

**CSS 变量**:
```css
:root {
  --bg:         #f5f5f2;
  --surface:    #ffffff;
  --border:     #d0d0cc;
  --text-primary:   #111110;
  --text-secondary: #777770;
  --accent:     #e63329;
  --accent-2:   #1a1a18;
  --danger:     #e63329;

  --font-display: 'Barlow', sans-serif;
  --font-body:    'Barlow Condensed', sans-serif;

  --radius:     0px;
  --shadow:     none;
  --transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

### 7. Studio Soft - 工作室柔和

**个性**: 温暖、创意、欢迎。感觉像光线充足的设计工作室或 Dribbble 截图。
**最适合**: 创意推介、代理机构工作、消费应用产品发布、HR/团队。
**动画风格**: 弹簧弹跳、卡片漂浮进入、柔和缩放。

**字体**:
```html
<link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;0,800;1,400&family=DM+Sans:wght@300;400&display=swap" rel="stylesheet">
```

**CSS 变量**:
```css
:root {
  --bg:         #fef9f4;
  --surface:    #ffffff;
  --border:     #ead9c8;
  --text-primary:   #2d1f0f;
  --text-secondary: #8a6f58;
  --accent:     #f07d3a;
  --accent-2:   #7c4dff;
  --danger:     #e74c3c;

  --font-display: 'Nunito', sans-serif;
  --font-body:    'DM Sans', sans-serif;

  --radius:     16px;
  --shadow:     0 4px 24px rgba(240, 125, 58, 0.12);
  --transition: 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

### 8. Warm Magazine - 温暖杂志

**个性**: 照片优先、触感、编辑温暖。感觉像高级印刷杂志。
**最适合**: 品牌故事、作品集展示、文化报告、营销审查。
**动画风格**: 满版图片揭示、文字优雅叠加、英雄图片视差。

**字体**:
```html
<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400&display=swap" rel="stylesheet">
```

**CSS 变量**:
```css
:root {
  --bg:         #f7f0e6;
  --surface:    #ede4d4;
  --border:     #c8b89a;
  --text-primary:   #1c1208;
  --text-secondary: #7a6448;
  --accent:     #b85c38;
  --accent-2:   #2d4a3e;
  --danger:     #b03a2e;

  --font-display: 'Libre Baskerville', serif;
  --font-body:    'Lato', sans-serif;

  --radius:     4px;
  --shadow:     0 2px 16px rgba(28, 18, 8, 0.1);
  --transition: 0.4s ease;
}
```

---

### 9. Brutalist - 粗野主义

**个性**: 毫不道歉、原始、强烈。故意打破所有规则。
**最适合**: 艺术/文化项目、挑衅性想法、任何应该感觉颠覆性或反企业的东西。
**动画风格**: 猛烈撞击、文字撞入到位、零缓动。

**字体**:
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
```

**CSS 变量**:
```css
:root {
  --bg:         #f5f500;
  --surface:    #ffffff;
  --border:     #000000;
  --text-primary:   #000000;
  --text-secondary: #333333;
  --accent:     #ff0000;
  --accent-2:   #0000ff;
  --danger:     #ff0000;

  --font-display: 'Space Mono', monospace;
  --font-body:    'Space Mono', monospace;

  --radius:     0px;
  --shadow:     4px 4px 0px #000000;
  --transition: 0.05s linear;
}
```

---

### 10. Aurora - 极光

**个性**: 流动、现代、乐观。感觉像精心打造的 SaaS 产品发布会。
**最适合**: 初创公司推介、产品公告、消费科技、针对普通/广泛受众的任何东西。
**动画风格**: 渐变变形、平滑淡入、元素如水般流动。

**字体**:
```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,700;1,300&display=swap" rel="stylesheet">
```

**CSS 变量**:
```css
:root {
  --bg:         #f8f6ff;
  --surface:    #ffffff;
  --border:     #e0d8ff;
  --text-primary:   #1a1030;
  --text-secondary: #6b5f8a;
  --accent:     #6c47ff;
  --accent-2:   #ff6584;
  --danger:     #e74c3c;

  --font-display: 'Plus Jakarta Sans', sans-serif;
  --font-body:    'Plus Jakarta Sans', sans-serif;

  --radius:     12px;
  --shadow:     0 8px 32px rgba(108, 71, 255, 0.15);
  --transition: 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

## 选择正确的预设

| 情境 | 推荐 |
|------|------|
| 投资者/董事会会议 | Executive Dark, Swiss Grid |
| 科技/开发者受众 | Neon Noir, Terminal, Deep Cosmos |
| 创意/代理机构推介 | Studio Soft, Warm Magazine, Brutalist |
| 初创公司产品发布 | Aurora, Swiss Grid |
| 学术/研究 | Editorial, Deep Cosmos |
| 异步团队分享 | 任何浅色主题（Editorial, Swiss Grid, Studio Soft, Warm Magazine, Aurora） |
| 需要"哇"因素 | Neon Noir, Deep Cosmos, Brutalist |
| 安全/保守情境 | Executive Dark, Swiss Grid, Editorial |

---

## 风格预览模板

使用此模板生成 `style-preview.html`，显示 3 个预设并排。填写 3 个所选预设的 CSS 变量和字体链接：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>风格预览</title>
<!-- 在此处加载所有 3 个预设的字体 -->
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { background: #1a1a1a; display: flex; gap: 24px; padding: 32px; min-height: 100vh; align-items: center; justify-content: center; }
.swatch { width: 360px; height: 240px; border-radius: 8px; overflow: hidden; cursor: pointer; transition: transform 0.2s; display: flex; flex-direction: column; justify-content: space-between; padding: 28px; position: relative; }
.swatch:hover { transform: scale(1.03); }
.swatch-label { color: #fff; font-family: sans-serif; font-size: 12px; opacity: 0.6; text-align: center; margin-top: 8px; }
</style>
</head>
<body>
  <!-- 预设 A -->
  <div>
    <div class="swatch" style="background: VAR_BG_A;">
      <div>
        <div style="font-family: FONT_DISPLAY_A; font-size: 22px; font-weight: 700; color: VAR_TEXT_A; margin-bottom: 8px;">你的标题</div>
        <div style="font-family: FONT_BODY_A; font-size: 13px; color: VAR_TEXT_SEC_A; line-height: 1.5;">支持想法或副标题</div>
      </div>
      <div style="display:flex; gap:8px; align-items:center;">
        <div style="background: VAR_ACCENT_A; color: VAR_BG_A; padding: 6px 14px; border-radius: VAR_RADIUS_A; font-family: FONT_BODY_A; font-size: 12px; font-weight: 600;">CTA 按钮</div>
        <div style="font-family: FONT_BODY_A; font-size: 11px; color: VAR_TEXT_SEC_A;">1 / 8</div>
      </div>
    </div>
    <div class="swatch-label">预设名称 A</div>
  </div>

  <!-- 对预设 B 和 C 重复 -->
</body>
</html>
```

> **注意**: 生成预览文件后，告诉用户："在浏览器中打开 style-preview.html — 哪个感觉对？"然后继续他们的选择。
