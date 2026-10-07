import { spawnSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const viteBin = path.join(root, 'node_modules', 'vite', 'bin', 'vite.js')

process.env.GITHUB_PAGES = 'true'

const build = spawnSync(process.execPath, [viteBin, 'build'], {
  cwd: root,
  env: process.env,
  stdio: 'inherit',
})

if (build.status !== 0) {
  process.exit(build.status ?? 1)
}

const post = spawnSync(process.execPath, ['scripts/postbuild-pages.mjs'], {
  cwd: root,
  stdio: 'inherit',
})

process.exit(post.status ?? 1)
