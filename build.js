#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const SRC = path.join(ROOT, 'src');

const pages = [
  { src: 'pages/index.html', out: 'index.html' },
  { src: 'pages/review/index.html', out: 'review/index.html' },
];

function resolve(template, baseDir) {
  return template.replace(
    /^([ \t]*)<!--\s*@include\s+([\w./-]+)\s*-->[ \t]*$/gm,
    (_, indent, filePath) => {
      const absPath = path.join(baseDir, filePath);
      if (!fs.existsSync(absPath)) {
        throw new Error(`Partial not found: ${absPath}`);
      }
      const content = fs.readFileSync(absPath, 'utf8');
      // Recurse to support nested includes
      return resolve(content, path.dirname(absPath));
    }
  );
}

let built = 0;
for (const page of pages) {
  const srcPath = path.join(SRC, page.src);
  const outPath = path.join(ROOT, page.out);

  const template = fs.readFileSync(srcPath, 'utf8');
  const html = resolve(template, path.join(SRC));

  // Ensure output directory exists
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
  built++;
  console.log(`  ${page.out}`);
}

console.log(`\nBuilt ${built} page(s).`);

// --- CSS build ---
const CSS_SRC = path.join(SRC, 'css');
const CSS_OUT = path.join(ROOT, 'assets', 'css', 'styles.css');

const cssFiles = fs.readdirSync(CSS_SRC)
  .filter(f => f.endsWith('.css'))
  .sort();

const css = cssFiles.map(f => fs.readFileSync(path.join(CSS_SRC, f), 'utf8')).join('\n');
fs.writeFileSync(CSS_OUT, css);
console.log(`Built styles.css from ${cssFiles.length} partial(s).`);
