# Interactive Slides 导出指南

本 Skill 支持将 HTML 演示文稿导出为 PDF 和 PPTX 格式。

---

## 📊 导出方案对比

| 格式 | 还原度 | 可编辑性 | 推荐场景 |
|------|--------|---------|---------|
| **PDF** | ⭐⭐⭐⭐⭐ 100% | ❌ 不可编辑 | 分享、打印、存档 |
| **PPTX** | ⭐⭐⭐ 60-75% | ✅ 完全可编辑 | 二次编辑、协作 |
| **HTML** | ⭐⭐⭐⭐⭐ 100% | ⚠️ 有限 | 在线演示、交互 |

---

## 📄 PDF 导出（推荐 ⭐⭐⭐⭐⭐）

**完美还原，高质量输出**

### 安装依赖

```bash
cd ~/.openclaw/workspace/skills/interactive-slides-openclaw-skill
npm install
```

### 使用方法

**自动命名（推荐）：**
```bash
node export-pdf.js demo/index.html
# 输出：demo/interactive-slides-openclaw-skill_20260310.pdf
```

**自定义输出文件：**
```bash
node export-pdf.js demo/index.html demo/my-presentation.pdf
```

### PDF 规格

| 属性 | 值 |
|------|-----|
| **尺寸** | 1280x720px (16:9) |
| **方向** | 横向 |
| **白边** | 无 |
| **背景** | 保留原样 |
| **质量** | 高质量（2x 设备缩放） |

---

## 📦 PPTX 导出（实验性 ⭐⭐）

**注意：PPTX 导出功能有限制**

### 当前状态

- ❌ **dom-to-pptx** - 需要浏览器环境，无法在 Node.js 服务端保存文件
- ✅ **pptxgenjs** - 可保存文件，但还原度较低（60-75%）

### 替代方案

**方案 1：使用 PDF（推荐）**
```bash
node export-pdf.js demo/index.html
```

**方案 2：手动导出**
1. 在浏览器中打开 HTML
2. 打印为 PDF（Ctrl/Cmd + P）
3. 或使用浏览器扩展转换为 PPTX

**方案 3：使用在线工具**
- https://convertio.co/html-pptx/
- https://document.online-convert.com/convert/html-to-pptx

---

## 📁 文件命名规则

**格式：** `{标题}_{日期}.{格式}`

**示例：**
```
demo/
├── index.html                                    ← 原始 HTML
├── interactive-slides-openclaw-skill_20260310.pdf ← 导出的 PDF
└── interactive-slides-openclaw-skill_20260310.pptx ← 导出的 PPTX（如有）
```

**标题来源：** 从 HTML `<title>` 标签自动提取

---

## 🎯 使用场景

| 场景 | 推荐格式 | 说明 |
|------|---------|------|
| **现场演示** | HTML（浏览器打开） | 完美动画和交互 |
| **分享给他人** | PDF | 兼容性好，无需浏览器 |
| **打印** | PDF | 保持 16:9 比例 |
| **二次编辑** | PPTX | 可编辑，但样式可能丢失 |
| **在线发布** | HTML + GitHub Pages | 可交互、可分享 |

---

## ⚠️ 注意事项

1. **PPTX 导出限制** - dom-to-pptx 是浏览器端库，无法在 Node.js 服务端使用
2. **PDF 是静态的** - 不包含动画效果
3. **保持 16:9 比例** - 打印时选择"适应页面"避免裁剪
4. **字体嵌入** - PDF 会嵌入字体，PPTX 可能需要手动映射

---

## 🔧 故障排查

### 问题：PDF 只有第一页

**解决：** 确保使用了最新的 `export-pdf.js` 脚本

### 问题：PDF 有白边

**解决：** 打印时选择"无边距"或"适应页面"

### 问题：PPTX 样式丢失

**原因：** pptxgenjs 不支持复杂 CSS（渐变、阴影等）

**解决：** 使用 PDF 导出，或手动在 PowerPoint 中重建

---

## 📚 技术说明

### 为什么 PPTX 导出困难？

**技术限制：**
1. **CSS → PowerPoint 映射复杂** - 渐变、阴影、圆角等需要数学转换
2. **布局引擎差异** - CSS Flexbox/Grid vs PowerPoint 绝对定位
3. **字体渲染差异** - Web 字体 vs PowerPoint 字体

**现有方案：**
- **pptxgenjs** - 成熟但还原度低（60-75%）
- **dom-to-pptx** - 高保真但需要浏览器环境（2025 年 11 月发布）

**未来可能：**
- 等待 dom-to-pptx 发布 Node.js 版本
- 或使用 Puppeteer + dom-to-pptx 在浏览器中导出

---

## 📖 相关文档

- [SKILL.md](SKILL.md) - Skill 完整说明
- [README.md](README.md) - 安装和使用指南
- [STYLE_PRESETS.md](STYLE_PRESETS.md) - 风格预设
