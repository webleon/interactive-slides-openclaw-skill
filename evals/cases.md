# Evaluation Cases - 测试用例

用于测试 interactive-slides 技能质量的评估案例。

---

## Case 1: 投资者推介会

**输入**: "创建一个关于 Q1 投资者更新的演示文稿"

**期望流程**:
1. Phase 1: 询问受众（投资者）、目标（展示业绩）、展示方式（现场/异步）
2. 生成风格预览（推荐 Executive Dark 或 Swiss Grid）
3. Phase 2: 生成 ghost list（8-10 页幻灯片）
4. Phase 3: 推荐 Slide Deck 模式
5. Phase 4: 生成完整 HTML
6. Phase 5: 提供文件路径和导航说明
7. Phase 6: 提供 GitHub Pages 发布指南

**评估标准**:
- [ ] 完整执行 6 阶段工作流
- [ ] 风格预览包含 3 个预设
- [ ] ghost list 包含标题、要点、视觉建议
- [ ] HTML 包含视口缩放代码
- [ ] 导航支持键盘/点击/触摸/滚轮
- [ ] 文件保存到 output/目录

---

## Case 2: 产品发布会

**输入**: "创建一个关于新产品发布的演示，用我们的品牌色 #2B4EFF"

**期望流程**:
1. Phase 1: 确认品牌色 #2B4EFF，询问其他品牌元素
2. 创建自定义:root {} 块（不使用预设）
3. Phase 2: 生成产品发布结构（问题→解决方案→功能→定价）
4. Phase 3: 推荐 Slide Deck 模式
5. Phase 4: 生成 HTML，应用品牌色
6. Phase 5: 预览并迭代
7. Phase 6: 主动提供 PPT 导出选项

**评估标准**:
- [ ] 正确应用品牌色 #2B4EFF 到 --accent
- [ ] 自定义:root {} 块而非使用预设
- [ ] 产品发布叙事结构清晰
- [ ] 主动提供 PPT 导出选项

---

## Case 3: 文档转换

**输入**: "把这份 PDF 转为交互式幻灯片" [上传文档]

**期望流程**:
1. Phase 1: 询问受众和展示方式
2. Phase 2: 读取 PDF，提取关键点，生成 ghost list
3. 确认 ghost list（显示保留/删减内容及原因）
4. Phase 3: 根据内容推荐模式
5. Phase 4: 生成 HTML
6. Phase 5: 预览迭代

**评估标准**:
- [ ] 正确读取并分析 PDF 内容
- [ ] ghost list 显示内容处理逻辑
- [ ] 保留核心信息，删减冗余
- [ ] 叙事弧线清晰（Hook→Problem→Solution→Evidence→CTA）

---

## Case 4: 滚动叙事报告

**输入**: "制作一个滚动叙事的产品报告"

**期望流程**:
1. Phase 1: 确认受众、目标
2. Phase 2: 生成长报告结构（10+ 部分）
3. Phase 3: 确认 Scroll Story 模式（用户明确要求）
4. Phase 4: 生成 HTML，使用 scroll-snap-stop: always
5. 包含根字体大小缩放（非 scaleToViewport）
6. 包含阅读进度条
7. 包含章节导航点（5+ 部分）

**评估标准**:
- [ ] 正确使用 Scroll Story 模式
- [ ] 未使用 scaleToViewport()
- [ ] 包含 root font size scaler
- [ ] 包含进度条
- [ ] 包含章节导航点
- [ ] 使用 IntersectionObserver 而非 ScrollTrigger

---

## Case 5: 技术分享会

**输入**: "为开发者创建一个关于 AI 趋势的技术分享"

**期望流程**:
1. Phase 1: 确认受众（开发者）、目标（技术趋势）、展示方式
2. 推荐风格（Neon Noir 或 Terminal）
3. Phase 2: 生成技术分享结构（现状→技术突破→应用案例→未来展望）
4. Phase 3: 推荐 Slide Deck 模式
5. Phase 4: 生成 HTML，包含代码块样式
6. 密度：Medium（技术受众）

**评估标准**:
- [ ] 推荐适合开发者的风格
- [ ] 包含代码块样式和语法高亮
- [ ] 技术深度适当
- [ ] 密度为 Medium（非 Lean）

---

## Case 6: 品牌定制

**输入**: "用我们的品牌套件创建演示，primary: #FF5733, accent: #2B4EFF, font: Helvetica Neue"

**期望流程**:
1. Phase 1: 接受品牌色和字体
2. 创建自定义:root {} 块
3. 从 Google Fonts 加载 Helvetica Neue（或最接近的替代）
4. Phase 2-6: 标准流程

**评估标准**:
- [ ] 正确映射品牌色到 CSS 变量
- [ ] 加载正确的 Google Fonts
- [ ] 未使用预设风格

---

## Case 7: 密度调整

**输入**: "创建一个给高管的简报，现场演示"

**期望流程**:
1. Phase 1: 确认受众（高管）、展示方式（现场）
2. Phase 2: 生成 ghost list
3. 推荐密度：Lean（高管 + 现场）
4. 解释含义："标签 only，演讲者口头补充"
5. Phase 3-6: 标准流程

**评估标准**:
- [ ] 正确推荐 Lean 密度
- [ ] 解释密度含义
- [ ] 幻灯片内容精简（标签 only）

---

## Case 8: 视觉处理选择

**输入**: "创建一个原则/教训类的演示，内容比较精简"

**期望流程**:
1. Phase 1-2: 标准流程，确认 Lean 或 Lean-to-medium 密度
2. 生成 visual-treatment-preview.html
3. 展示 3 个选项：装饰数字、图标锚点、布局重构
4. 用户选择后应用到所有相关幻灯片

**评估标准**:
- [ ] 在 Lean 密度时触发视觉处理选择
- [ ] 生成 visual-treatment-preview.html
- [ ] 展示 3 个选项
- [ ] 应用用户选择到所有幻灯片

---

## 评分标准

| 维度 | 权重 | 评分标准 |
|------|------|---------|
| 工作流完整性 | 30% | 6 阶段是否完整执行 |
| 代码质量 | 25% | HTML/CSS/JS 是否正确 |
| 设计质量 | 20% | 视觉预设、布局、动画 |
| 用户体验 | 15% | 导航、响应式、无障碍 |
| 文档质量 | 10% | 注释、发布指南 |

**总分**: ≥90 分 优秀，≥80 分 良好，≥70 分 合格，<70 分 需改进

---

*基于 sylvial928/interactive-slides 项目 evals/ 目录*
