import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const templatePath = path.join(root, 'dist', 'index.html');
const serverEntryPath = path.join(root, 'dist-ssr', 'entry-server.js');

const template = await fs.readFile(templatePath, 'utf8');
const { render } = await import(pathToFileURL(serverEntryPath).href);

const appHtml = render();
const placeholder = '<div id="root"></div>';

if (!template.includes(placeholder)) {
  throw new Error(`Placeholder ${placeholder} not found in dist/index.html`);
}

const html = template.replace(placeholder, `<div id="root">${appHtml}</div>`);
await fs.writeFile(templatePath, html, 'utf8');

const hasContent = html.includes('Александр Шульгин') && html.includes('CAPSULA AI');
console.log(
  `Prerendered index.html: ${(html.length / 1024).toFixed(1)} KB, content check: ${
    hasContent ? 'ok' : 'FAILED'
  }`,
);

if (!hasContent) {
  process.exitCode = 1;
}
