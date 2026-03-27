# OpenClaw 移植规划报告

**项目名称**: interactive-slides-openclaw-skill  
**原项目**: https://github.com/sylvial928/interactive-slides (Claude Code skill)  
**目标平台**: OpenClaw  
**报告日期**: 2026-03-27  
**移植方案**: 方案 B - 推倒重来，从原项目 fork 重构

---

## 1. 备份完成确认

✅ **备份已完成**，备份位置：`/Users/webleon/.openclaw/workspace/skills/interactive-slides-backup/`

### 备份内容清单

| 内容 | 状态 | 说明 |
|------|------|------|
| demo/ | ✅ 已备份 | 3 种模式的 HTML 示例文件 |
| evals/ | ✅ 已备份 | 评估用例 (cases.md + evals.json) |
| SKILL.md | ✅ 已备份 | OpenClaw 技能配置 (44KB) |
| docs/ | ✅ 已备份 | 技术文档 (3 个 MD 文件) |
| 测试用例 | ✅ 已备份 | evals/cases.md 中的测试用例 |

### 原项目已克隆

✅ **原项目已克隆** 至：`/Users/webleon/.openclaw/workspace/skills/interactive-slides-openclaw-skill/`

旧版本已移动至：`/Users/webleon/.openclaw/workspace/skills/interactive-slides-old/`

---

## 2. 原项目结构分析

### 2.1 原项目目录结构

```
interactive-slides/
├── .git/                    # Git 版本控制
├── LICENSE                  # MIT 许可证
├── README.md                # 项目说明文档 (3.5KB)
├── SKILL.md                 # Claude Code 技能主文件 (35KB)
├── STYLE_PRESETS.md         # 10 种视觉样式预设 (13KB)
└── evals/
    └── evals.json           # 评估测试用例 (6 个测试场景)
```

### 2.2 核心文件分析

#### SKILL.md (原项目)
- **用途**: Claude Code skill 的主提示词文件
- **大小**: 35,540 字节
- **内容结构**:
  - Phase 1: Discovery (发现阶段)
  - Phase 2: Content Processing (内容处理)
  - Phase 3: Choose Presentation Mode (选择展示模式)
  - Phase 4-6: Build, Review, Export (构建、审查、导出)
- **工作流**: 6 阶段结构化流程
- **特性**:
  - 品牌套件支持
  - 10 种视觉预设
  - 3 种展示模式 (Slide Deck, Scroll Story, Interactive Deck)
  - PPTX 导出支持

#### STYLE_PRESETS.md
- **用途**: 10 种手工艺视觉预设
- **大小**: 12,929 字节
- **内容**: CSS 变量 + 字体配对方案

#### evals/evals.json
- **用途**: 技能质量评估测试用例
- **测试场景**: 6 个
  1. investor-pitch (投资人路演)
  2. async-roadmap (异步路线图)
  3. sql-training (SQL 培训)
  4. brand-kit-application (品牌套件应用)
  5. scroll-story-async (滚动故事异步)
  6. executive-interview-star (高管面试 STAR)

### 2.3 与 OpenClaw 版本的差异

| 特性 | 原项目 (Claude Code) | OpenClaw 版本 (备份) |
|------|---------------------|---------------------|
| 技能格式 | Claude Code skill | OpenClaw skill (YAML frontmatter) |
| 输出目录 | `~/.claude/skills/` | `~/.openclaw/workspace/skills/` |
| 工具调用 | Claude Code tools | OpenClaw tools (write, read, exec, browser) |
| 示例文件 | 无 | 有 (demo/ 目录) |
| 技术文档 | 无 | 有 (docs/ 目录) |
| 评估用例 | evals.json | evals.json + cases.md |

---

## 3. 需要修改的文件清单

### 3.1 必须创建/修改的文件

| 文件 | 操作 | 说明 | 优先级 |
|------|------|------|--------|
| SKILL.md | 重写 | 适配 OpenClaw 技能格式 (YAML frontmatter) | 🔴 高 |
| STYLE_PRESETS.md | 保留 | 从原项目复制，无需修改 | 🟡 中 |
| evals/evals.json | 合并 | 保留原项目 6 个测试用例 + OpenClaw 现有用例 | 🟡 中 |
| README.md | 更新 | 更新安装和使用说明为 OpenClaw | 🟢 低 |
| docs/OPENCLAW-MIGRATION-PLAN.md | 创建 | 本移植规划报告 | 🔴 高 |

### 3.2 SKILL.md 关键修改点

#### 3.2.1 YAML Frontmatter 格式

OpenClaw 技能需要使用 YAML frontmatter 格式：

```yaml
---
name: interactive-slides
version: 1.3.0
description: "创建交互式 Web 演示文稿"
trigger:
  - "interactive presentation"
  - "web slides"
  - "创建演示文稿"
tools:
  - write
  - read
  - exec
  - browser
output:
  directory: "~/.openclaw/workspace/output/interactive-slides"
  naming: "{YYYY-MM-DD}_{TOPIC}.{ext}"
  formats: ["html"]
---
```

#### 3.2.2 工具调用适配

| Claude Code | OpenClaw | 说明 |
|-------------|----------|------|
| Write | write | 文件写入 |
| Read | read | 文件读取 |
| Bash | exec | 命令执行 |
| - | browser | 浏览器控制 (OpenClaw 特有) |
| - | canvas | 画布呈现 (OpenClaw 特有) |

#### 3.2.3 输出路径适配

```yaml
# OpenClaw 输出配置
output:
  directory: "~/.openclaw/workspace/output/interactive-slides"
  naming: "{YYYY-MM-DD}_{TOPIC}.{ext}"
```

#### 3.2.4 工作流保留

原项目的 6 阶段工作流应完整保留：
1. Phase 1: Discovery (发现)
2. Phase 2: Content Processing (内容处理)
3. Phase 3: Choose Presentation Mode (选择模式)
4. Phase 4: Build (构建)
5. Phase 5: Review (审查)
6. Phase 6: Export (导出)

---

## 4. SKILL.md 模板

```markdown
---
name: interactive-slides
version: 1.3.0
description: "创建交互式、动画效果的 Web 演示文稿，可在任何浏览器中查看。当用户需要基于 Web 的演示文稿、交互式幻灯片或比静态文件更吸引人的内容时使用此技能。适用于路演、提案、数据故事、报告和技术演讲。"
trigger:
  - "interactive presentation"
  - "web slides"
  - "web presentation"
  - "HTML presentation"
  - "create a deck"
  - "create slides"
  - "scroll-based story"
  - "interactive deck"
  - "创建演示文稿"
  - "制作幻灯片"
examples:
  - "为 Q1 投资者更新创建一个交互式演示文稿"
  - "将此内容转换为交互式 Web 幻灯片"
  - "制作一个关于产品路线图的滚动故事"
tools:
  - write
  - read
  - exec
  - browser
output:
  directory: "~/.openclaw/workspace/output/interactive-slides"
  naming: "{YYYY-MM-DD}_{TOPIC}.{ext}"
  formats: ["html"]
  examples:
    - "2026-03-27_presentation.html"
    - "2026-03-27_report.html"
---

# Interactive Presentation Skill

[此处保留原项目的完整工作流内容]

## Phase 1: Discovery
[...保留原内容...]

## Phase 2: Content Processing
[...保留原内容...]

## Phase 3: Choose Presentation Mode
[...保留原内容...]

## Phase 4: Build
[...保留原内容...]

## Phase 5: Review
[...保留原内容...]

## Phase 6: Export
[...保留原内容...]
```

---

## 5. 目录结构调整建议

### 5.1 目标目录结构

```
interactive-slides-openclaw-skill/
├── SKILL.md                    # OpenClaw 技能配置 (重写)
├── README.md                   # 项目说明 (更新)
├── STYLE_PRESETS.md            # 视觉预设 (从原项目复制)
├── LICENSE                     # 许可证 (从原项目复制)
├── demo/                       # 示例文件 (从备份恢复)
│   ├── index.html
│   ├── slide-deck.html
│   ├── scroll-story.html
│   └── interactive-deck.html
├── evals/                      # 评估用例 (合并)
│   ├── evals.json              # 原项目 6 个用例
│   └── cases.md                # OpenClaw 现有用例
└── docs/                       # 技术文档 (从备份恢复)
    ├── OPENCLAW-MIGRATION-PLAN.md
    ├── AI_ARCHITECTURE.md
    ├── OPTIMIZATION-REPORT-2026-03-27.md
    └── REFACTOR-DECISION-ANALYSIS.md
```

### 5.2 与 Claude Code 版本的对比

| 目录 | Claude Code 版本 | OpenClaw 版本 | 说明 |
|------|-----------------|---------------|------|
| 根目录 | SKILL.md, STYLE_PRESETS.md, evals/ | + demo/, docs/ | OpenClaw 版本更完整 |
| 技能配置 | Claude Code 格式 | OpenClaw YAML frontmatter | 格式不同 |
| 示例文件 | 无 | 有 (3 种模式) | OpenClaw 特有 |
| 文档 | 无 | 有 (技术文档) | OpenClaw 特有 |

---

## 6. 依赖项清单

### 6.1 运行时依赖

| 依赖 | 用途 | 必需 | 安装方式 |
|------|------|------|----------|
| Node.js | PPTX 导出脚本运行 | 可选 | `brew install node` |
| pptxgenjs | PowerPoint 导出 | 可选 | `npm install -g pptxgenjs` |
| GSAP (CDN) | 动画效果 | 必需 | HTML 内引用 CDN |
| Chart.js (CDN) | 图表渲染 | 可选 | HTML 内引用 CDN |
| Google Fonts (CDN) | 字体加载 | 必需 | HTML 内引用 CDN |

### 6.2 OpenClaw 工具依赖

| 工具 | 用途 | 必需 |
|------|------|------|
| write | 写入 HTML 文件 | ✅ |
| read | 读取源文件/模板 | ✅ |
| exec | 运行构建脚本 | ✅ |
| browser | 打开预览/截图 | ✅ |
| canvas | 画布呈现 (可选) | ❌ |

### 6.3 外部服务依赖

| 服务 | 用途 | 必需 | 备注 |
|------|------|------|------|
| Google Fonts | 字体加载 | ✅ | CDN |
| GSAP CDN | 动画库 | ✅ | cdn.jsdelivr.net |
| Chart.js CDN | 图表库 | ❌ | 仅当需要图表时 |

---

## 7. 实施步骤

### 步骤 1: 准备基础文件

```bash
# 从原项目复制基础文件
cd /Users/webleon/.openclaw/workspace/skills/interactive-slides-openclaw-skill

# 复制 STYLE_PRESETS.md (无需修改)
# 已从原项目包含

# 复制 LICENSE (无需修改)
# 已从原项目包含
```

### 步骤 2: 重写 SKILL.md

**任务**:
1. 保留原项目 SKILL.md 的核心工作流内容 (6 阶段流程)
2. 添加 OpenClaw YAML frontmatter
3. 更新工具调用为 OpenClaw 工具
4. 更新输出路径为 OpenClaw 路径

**参考**: 第 4 节的 SKILL.md 模板

### 步骤 3: 恢复示例文件

```bash
# 从备份恢复 demo 目录
cp -r /Users/webleon/.openclaw/workspace/skills/interactive-slides-backup/demo \
      /Users/webleon/.openclaw/workspace/skills/interactive-slides-openclaw-skill/

# 从备份恢复 docs 目录
cp -r /Users/webleon/.openclaw/workspace/skills/interactive-slides-backup/docs \
      /Users/webleon/.openclaw/workspace/skills/interactive-slides-openclaw-skill/
```

### 步骤 4: 合并评估用例

```bash
# 保留原项目的 evals.json (6 个测试用例)
# 从备份恢复 cases.md
cp /Users/webleon/.openclaw/workspace/skills/interactive-slides-backup/evals/cases.md \
   /Users/webleon/.openclaw/workspace/skills/interactive-slides-openclaw-skill/evals/
```

### 步骤 5: 更新 README.md

**需要更新的内容**:
1. 安装步骤改为 OpenClaw 安装方式
2. 验证命令改为 OpenClaw 命令
3. 输出路径说明

### 步骤 6: 测试验证

**测试清单**:
- [ ] 技能在 OpenClaw 中正确加载
- [ ] 触发词正常工作
- [ ] HTML 文件正确生成
- [ ] 示例文件可正常打开
- [ ] 评估用例可运行

---

## 8. 风险与注意事项

### 8.1 兼容性风险

| 风险 | 影响 | 缓解措施 |
|------|------|----------|
| Claude Code 工具调用语法不同 | 技能无法正常工作 | 仔细审查所有工具调用 |
| 输出路径不存在 | 文件写入失败 | 确保输出目录存在 |
| 工作流依赖特定功能 | 部分功能不可用 | 识别并适配 |

### 8.2 功能完整性

| 功能 | 原项目 | OpenClaw 适配 | 状态 |
|------|--------|---------------|------|
| 6 阶段工作流 | ✅ | ✅ 保留 | 完整 |
| 品牌套件支持 | ✅ | ✅ 保留 | 完整 |
| 视觉预设 | ✅ | ✅ 保留 | 完整 |
| 3 种展示模式 | ✅ | ✅ 保留 | 完整 |
| PPTX 导出 | ✅ | ⚠️ 需 Node.js | 可选 |
| 示例文件 | ❌ | ✅ 新增 | 增强 |
| 技术文档 | ❌ | ✅ 新增 | 增强 |

---

## 9. 时间估算

| 步骤 | 预计时间 | 说明 |
|------|----------|------|
| SKILL.md 重写 | 2-3 小时 | 核心工作，需仔细适配 |
| 示例文件恢复 | 10 分钟 | 简单复制 |
| 评估用例合并 | 30 分钟 | 检查冲突 |
| README 更新 | 20 分钟 | 文档更新 |
| 测试验证 | 1 小时 | 功能测试 |
| **总计** | **4-5 小时** | |

---

## 10. 后续工作建议

### 10.1 短期优化

1. **添加中文触发词**: 增强对中文用户的支持
2. **本地化文档**: 将 README.md 和关键文档翻译为中文
3. **示例增强**: 添加更多中文示例文件

### 10.2 长期规划

1. **Canvas 集成**: 利用 OpenClaw canvas 工具实现幻灯片预览
2. **浏览器自动化**: 使用 browser 工具自动打开和截图
3. **评估自动化**: 集成 evals 到 OpenClaw 测试流程

---

## 附录 A: 原项目与 OpenClaw 版本文件对比

| 文件 | 原项目 | OpenClaw 备份 | 操作 |
|------|--------|---------------|------|
| SKILL.md | 35KB (Claude Code) | 44KB (OpenClaw) | 重写 (保留工作流) |
| STYLE_PRESETS.md | 13KB | 无 | 从原项目复制 |
| README.md | 3.5KB | 无 | 从原项目复制并更新 |
| LICENSE | 1KB | 无 | 从原项目复制 |
| evals/evals.json | 6 用例 | 6 用例 + cases.md | 合并 |
| demo/ | 无 | 3 HTML 文件 | 保留 |
| docs/ | 无 | 3 MD 文件 | 保留 |

---

**报告完成日期**: 2026-03-27  
**下一步**: 按照实施步骤执行移植
