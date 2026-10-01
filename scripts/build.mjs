// Build the static site into dist/.
// Each folder in explainers/ is one explainer and is copied as is.
// The index page lists every explainer from its <title> and <meta name="description">.
// No dependencies: Node 20+ only.
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const root = new URL('..', import.meta.url).pathname
const src = join(root, 'explainers')
const out = join(root, 'dist')

const pick = (html, re) => (html.match(re)?.[1] ?? '').trim()
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]))

rmSync(out, { recursive: true, force: true })
mkdirSync(out, { recursive: true })

const entries = []
for (const slug of readdirSync(src).sort()) {
  const page = join(src, slug, 'index.html')
  if (!existsSync(page)) continue
  const html = readFileSync(page, 'utf8')
  const title = pick(html, /<title>([^<]*)<\/title>/i)
  const description = pick(html, /<meta\s+name="description"\s+content="([^"]*)"/i)
  if (!title || !description) throw new Error(`${slug}/index.html needs a <title> and a <meta name="description">`)
  cpSync(join(src, slug), join(out, slug), { recursive: true })
  entries.push({ slug, title, description })
}

const items = entries.map((e) => `    <li><a href="./${e.slug}/"><span class="t">${esc(e.title)}</span><span class="d">${esc(e.description)}</span></a></li>`).join('\n')

writeFileSync(join(out, 'index.html'), `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Interactive explainers for RDF tools.">
<title>RDF Explainers</title>
<style>
:root { --bg: #0b1114; --panel: #111a1f; --line: #233139; --fg: #e4ecef; --muted: #8b9ea7; color-scheme: dark; }
body { margin: 0; background: var(--bg); color: var(--fg); font: 15px/1.6 system-ui, sans-serif; padding: 48px 16px; }
main { max-width: 760px; margin: 0 auto; display: grid; gap: 24px; }
h1 { margin: 0; font-size: 2rem; }
ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
a { display: grid; gap: 4px; padding: 14px 16px; border: 1px solid var(--line); border-radius: 8px; background: var(--panel); color: inherit; text-decoration: none; }
a:hover, a:focus-visible { border-color: var(--muted); }
.t { font-weight: 600; font-size: 1.1rem; }
.d { color: var(--muted); }
</style>
</head>
<body>
<main>
  <h1>RDF Explainers</h1>
  <ul>
${items}
  </ul>
</main>
</body>
</html>
`)

console.log(`built ${entries.length} explainer(s) into dist/: ${entries.map((e) => e.slug).join(', ')}`)
