# Interactive Slides 导出指南

本 Skill 支持将 HTML 演示文稿导出为 PDF 格式，方便分享和打印。

---

## 📊 导出方案对比

| 格式 | 还原度 | 可编辑性 | 推荐场景 |
|------|--------|---------|---------|
| **PDF** | ⭐⭐⭐⭐⭐ 100% | ❌ 不可编辑 | 分享、打印、存档 |
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

## 📁 文件命名规则

**格式：** `{标题}_{日期}.{格式}`

**示例：**
```
demo/
├── index.html                                          ← 原始 HTML
└── interactive-slides-openclaw-skill_20260310.pdf      ← 导出的 PDF
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

1. **PDF 是静态的** - 不包含动画效果
2. **保持 16:9 比例** - 打印时选择"适应页面"避免裁剪
3. **字体嵌入** - PDF 会嵌入字体

---

## 🔧 故障排查

### 问题：PDF 只有第一页

**解决：** 确保使用了最新的 `export-pdf.js` 脚本

### 问题：PDF 有白边

**解决：** 打印时选择"无边距"或"适应页面"

---

## 📚 技术说明

### PDF 导出原理

**工作流程：**
```
HTML 文件
   ↓
Playwright (headless Chrome)
   ↓
加载 HTML + 等待动画
   ↓
注入 CSS（重新布局为垂直排列）
   ↓
生成 PDF（横向，无白边）
```

**技术优势：**
- ✅ 100% 还原 HTML 样式
- ✅ 保留所有视觉效果
- ✅ 多页幻灯片自动分页
- ✅ 高质量输出（2x 缩放）

---

## 📖 相关文档

- [SKILL.md](SKILL.md) - Skill 完整说明
- [README.md](README.md) - 安装和使用指南
- [STYLE_PRESETS.md](STYLE_PRESETS.md) - 风格预设
