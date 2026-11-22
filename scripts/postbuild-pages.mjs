import fs from 'fs'
import path from 'path'

const dist = path.join(process.cwd(), 'dist')
const index = path.join(dist, 'index.html')

if (!fs.existsSync(index)) {
  console.error('dist/index.html fehlt – zuerst npm run build ausführen.')
  process.exit(1)
}

const html = fs.readFileSync(index, 'utf8')

// Unterseiten als eigene HTML-Dateien ablegen: GitHub Pages liefert /impressum dann
// direkt aus impressum.html mit Status 200 (statt über 404.html mit Status 404).
// Bei neuen Routen in src/App.jsx hier ergänzen.
const PAGES = [
  {
    file: 'impressum.html',
    title: "Impressum – Achim's Waschstraße",
    description: "Impressum von Achim's Waschstraße, Ernst-Reuter-Straße 74, 32257 Bünde.",
  },
  {
    file: 'datenschutz.html',
    title: "Datenschutz – Achim's Waschstraße",
    description: "Datenschutzerklärung von Achim's Waschstraße in Bünde.",
  },
  {
    file: 'agb.html',
    title: "AGB – Achim's Waschstraße",
    description: "Allgemeine Geschäftsbedingungen von Achim's Waschstraße in Bünde.",
  },
]

const escapeAttr = (value) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;')

for (const page of PAGES) {
  const pageHtml = html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${page.title}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${escapeAttr(page.description)}" />`,
    )
  fs.writeFileSync(path.join(dist, page.file), pageHtml)
}

// Fallback für unbekannte Adressen (zeigt die 404-Seite der App)
fs.copyFileSync(index, path.join(dist, '404.html'))
fs.writeFileSync(path.join(dist, '.nojekyll'), '')
console.log(`GitHub Pages: ${PAGES.map((p) => p.file).join(', ')}, 404.html und .nojekyll erstellt.`)
