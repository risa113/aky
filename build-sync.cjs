const fs = require('fs');
const path = require('path');

// 1. Copy dist to docs
fs.cpSync('dist', 'docs', { recursive: true });

// 2. Ensure .nojekyll in root, docs, dist, and public
fs.writeFileSync('.nojekyll', '');
fs.writeFileSync('public/.nojekyll', '');
fs.writeFileSync('dist/.nojekyll', '');
fs.writeFileSync('docs/.nojekyll', '');

// 3. Find latest js and css in dist/assets
const distAssets = fs.readdirSync('dist/assets');
const jsFile = distAssets.find(f => f.startsWith('index-') && f.endsWith('.js'));
const cssFile = distAssets.find(f => f.startsWith('index-') && f.endsWith('.css'));

if (!fs.existsSync('assets')) fs.mkdirSync('assets', { recursive: true });
fs.cpSync('dist/assets', 'assets', { recursive: true });

if (jsFile) {
  fs.copyFileSync(path.join('dist/assets', jsFile), 'assets/index.js');
}
if (cssFile) {
  fs.copyFileSync(path.join('dist/assets', cssFile), 'assets/index.css');
}

// 4. Copy public/images to images at root for root serving
if (fs.existsSync('public/images')) {
  fs.cpSync('public/images', 'images', { recursive: true });
}

console.log('Build sync completed successfully.');
