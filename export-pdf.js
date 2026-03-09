#!/usr/bin/env node
/**
 * Interactive Slides PDF 导出脚本
 * 使用 Playwright 将 HTML 演示文稿转换为高质量 PDF
 * 
 * 特性：
 * - 完美匹配 1280x720 (16:9) 预设
 * - 无白边、横向、全页显示
 * - 保留所有样式和背景
 * 
 * 用法：node export-pdf.js [input.html] [output.pdf]
 * 默认：自动命名（基于 HTML 标题 + 日期）
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function exportPdf(inputFile, outputFile) {
  console.log('📄 Interactive Slides PDF 导出工具');
  console.log('=' .repeat(50));
  
  // 检查输入文件
  if (!fs.existsSync(inputFile)) {
    console.error(`❌ 输入文件不存在：${inputFile}`);
    process.exit(1);
  }
  
  console.log(`📄 读取 HTML: ${inputFile}`);
  
  // 启动浏览器
  console.log('🌐 启动浏览器...');
  const browser = await chromium.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu'
    ]
  });
  
  // 创建页面（匹配 HTML 的 1280x720 视口）
  const page = await browser.newPage({
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 2  // 2x 缩放，提高 PDF 质量
  });
  
  // 加载 HTML 文件
  const fileUrl = 'file://' + path.resolve(inputFile);
  console.log(`🔗 加载：${fileUrl}`);
  await page.goto(fileUrl, { 
    waitUntil: 'networkidle',
    timeout: 30000
  });
  
  // 等待动画完成
  console.log('⏳ 等待动画完成...');
  await page.waitForTimeout(2000);
  
  // 统计幻灯片数量
  const slideCount = await page.$$eval('.slide', slides => slides.length);
  console.log(`📊 找到 ${slideCount} 页幻灯片`);
  
  if (slideCount === 0) {
    console.error('❌ 未找到幻灯片');
    await browser.close();
    process.exit(1);
  }
  
  // 注入 CSS 用于 PDF 导出 - 重新布局所有幻灯片为垂直排列
  console.log('🎨 优化 PDF 样式...');
  await page.addStyleTag({
    content: `
      /* PDF 导出专用样式 - 覆盖原有布局 */
      @page {
        size: 1280px 720px;
        margin: 0;
      }
      
      /* 强制 body 为黑色背景 */
      body {
        background: #0a0a0f !important;
        margin: 0 !important;
        padding: 0 !important;
        overflow: visible !important;
        width: 1280px !important;
      }
      
      /* 移除 slides-wrapper 的 fixed 定位和缩放 */
      .slides-wrapper {
        position: relative !important;
        width: 1280px !important;
        height: auto !important;
        overflow: visible !important;
        transform: none !important;
        left: 0 !important;
        top: 0 !important;
        margin: 0 !important;
        padding: 0 !important;
      }
      
      /* 每张幻灯片独立显示，垂直排列 */
      .slide {
        position: relative !important;
        visibility: visible !important;
        opacity: 1 !important;
        display: block !important;
        height: 720px !important;
        width: 1280px !important;
        page-break-after: always !important;
        page-break-inside: avoid !important;
        margin: 0 !important;
        padding: 3.5rem 5rem !important;
        box-sizing: border-box !important;
      }
      
      /* 隐藏导航元素 */
      .slide-dots,
      .slide-number,
      .progress-bar {
        display: none !important;
      }
      
      /* 确保文字清晰 */
      * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `
  });
  
  // 等待样式应用
  await page.waitForTimeout(2000);
  
  // 生成 PDF（横向，无白边）
  console.log(`📊 生成 PDF: ${outputFile}`);
  await page.pdf({
    path: outputFile,
    printBackground: true,
    margin: {
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px'
    },
    // 精确匹配 1280x720 (16:9)
    width: '13.333in',  // 1280px / 96 DPI
    height: '7.5in',    // 720px / 96 DPI
    landscape: false,   // 已经是横向尺寸
    preferCSSPageSize: true
  });
  
  await browser.close();
  
  console.log('=' .repeat(50));
  console.log('✅ PDF 导出完成！');
  console.log(`📊 幻灯片数：${slideCount}`);
  console.log(`📁 输出文件：${outputFile}`);
  console.log('🎨 尺寸：1280x720 (16:9)');
  console.log('✨ 完成！');
}

// ========== 命令行入口 ==========

const args = process.argv.slice(2);
let inputFile = args[0] || 'demo/index.html';
let outputFile = args[1];

// 自动命名（如果没有指定输出文件）
if (!outputFile) {
  // 从 HTML 标题提取名称
  const html = fs.readFileSync(inputFile, 'utf-8');
  const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
  const baseName = titleMatch 
    ? titleMatch[1].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    : 'presentation';
  
  // 添加时间戳
  const timestamp = new Date().toISOString().slice(0,10).replace(/-/g, '');
  outputFile = `demo/${baseName}_${timestamp}.pdf`;
}

// 执行导出
exportPdf(inputFile, outputFile)
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.error('❌ 导出失败:', err);
    process.exit(1);
  });
