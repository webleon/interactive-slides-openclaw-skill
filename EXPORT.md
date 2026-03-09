# Interactive Slides 导出指南

本 Skill 支持将 HTML 演示文稿导出为 PDF 格式，方便分享和打印。

---

## 📊 预设规格

所有生成的 HTML 演示文稿使用固定尺寸：

| 属性 | 值 |
|------|-----|
| **宽度** | 1280px |
| **高度** | 720px |
| **长宽比** | 16:9（标准宽屏） |
| **适配** | 自动等比缩放，适配任何屏幕 |

---

## 📄 PDF 导出

### 安装依赖

```bash
cd ~/.openclaw/workspace/skills/interactive-slides-openclaw-skill
npm install
```

### 使用方法

**自动命名（推荐）：**
```bash
node export-pdf.js demo/index.html
# 输出：demo/interactive-slides-openclaw-skill_20260309.pdf
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

## 📁 文件命名规则

**格式：** `{标题}_{日期}.{格式}`

**示例：**
```
demo/
├── index.html                                    ← 原始 HTML
├── interactive-slides-openclaw-skill_20260309.pdf ← 导出的 PDF
└── interactive-slides-openclaw-skill_20260309.html ← 备份 HTML
```

**标题来源：** 从 HTML `<title>` 标签自动提取

---

## 🎯 使用场景

| 场景 | 推荐格式 | 说明 |
|------|---------|------|
| **现场演示** | HTML（浏览器打开） | 完美动画和交互 |
| **分享给他人** | PDF | 兼容性好，无需浏览器 |
| **打印** | PDF | 保持 16:9 比例 |
| **在线发布** | HTML + GitHub Pages | 可交互、可分享 |

---

## ⚠️ 注意事项

1. **PPTX 导出已移除** - 因为内容丢失严重，效果不佳
2. **PDF 是静态的** - 不包含动画效果
3. **保持 16:9 比例** - 打印时选择"适应页面"避免裁剪

---

## 🔧 故障排查

### 问题：PDF 只有第一页

**解决：** 确保使用了最新的 `export-pdf.js` 脚本

### 问题：PDF 有白边

**解决：** 打印时选择"无边距"或"适应页面"

### 问题：字体显示不正确

**解决：** PDF 会嵌入字体，如果仍有问题，检查 HTML 中是否使用了 Web 字体

---

## 📚 相关文档

- [SKILL.md](SKILL.md) - Skill 完整说明
- [README.md](README.md) - 安装和使用指南
- [STYLE_PRESETS.md](STYLE_PRESETS.md) - 风格预设
