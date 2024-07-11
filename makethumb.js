import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'

// URLs 파일 읽기
const bookmarksData = JSON.parse(fs.readFileSync('server/data/bookmarks.json', 'utf8'));

(async () => {
  const browser = await puppeteer.launch();
  
  // images 디렉토리 존재 여부 확인 후 없으면 생성
  const imagesDir = path.resolve('public/images/thumbnail');

  for (const bookmark of bookmarksData) {
    const page = await browser.newPage();
    await page.setViewport({ width: 600, height: 600 });
    await page.goto(bookmark.url, { waitUntil: 'networkidle2' });

    const fileName = bookmark.url.replace(/https?:\/\//, '').replace(/\W/g, '_') + '.png';
    const filePath = path.join(imagesDir, fileName);

    await page.screenshot({ path: filePath, fullPage: false });
    console.log(`Screenshot saved: ${filePath}`);
    
    await page.close();
  }

  await browser.close();
})();
