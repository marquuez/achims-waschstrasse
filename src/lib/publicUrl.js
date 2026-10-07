export function publicUrl(filePath) {
  const base = import.meta.env.BASE_URL
  const path = filePath.replace(/^\//, '')
  return `${base}${path}`
}

export function homeHash(hash) {
  const id = hash.replace(/^#/, '')
  const base = import.meta.env.BASE_URL
  return `${base}#${id}`
}

export function routerBasename() {
  const base = import.meta.env.BASE_URL
  if (!base || base === '/') return undefined
  return base.endsWith('/') ? base.slice(0, -1) : base
}
