const { chromium } = require('playwright')
const path = require('path')

async function exportBanner() {
  const browser = await chromium.launch()
  const page = await browser.newPage({
    viewport: { width: 1280, height: 640 },
  })

  const htmlPath = path.join(__dirname, 'canvas.html')
  await page.goto(`file://${htmlPath}`)

  // Wait for fonts to load and layout to complete
  await page.waitForTimeout(500)

  // Export with transparent background
  await page.screenshot({
    path: path.join(__dirname, 'banner.png'),
    omitBackground: true,
  })

  console.log('✅ Exported: banner.png (1280x640, transparent)')

  // Also export with dark background for preview
  await page.evaluate(() => {
    document.body.classList.add('bg')
  })

  await page.screenshot({
    path: path.join(__dirname, 'banner-preview.png'),
    omitBackground: false,
  })

  console.log('✅ Exported: banner-preview.png (with background)')

  await browser.close()
}

exportBanner().catch(console.error)
