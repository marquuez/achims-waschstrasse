import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const defaultRepo = 'achims-waschstrasse'

function githubPagesBase() {
  if (process.env.GITHUB_PAGES !== 'true') return '/'
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
  return `/${repo || defaultRepo}/`
}

export default defineConfig({
  base: githubPagesBase(),
  plugins: [react()],
})
