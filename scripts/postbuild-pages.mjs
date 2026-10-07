import fs from 'fs'
import path from 'path'

const dist = path.join(process.cwd(), 'dist')
const index = path.join(dist, 'index.html')

if (!fs.existsSync(index)) {
  console.error('dist/index.html fehlt – zuerst npm run build ausführen.')
  process.exit(1)
}

fs.copyFileSync(index, path.join(dist, '404.html'))
fs.writeFileSync(path.join(dist, '.nojekyll'), '')
console.log('GitHub Pages: 404.html und .nojekyll erstellt.')
