// Fills index.html's placeholders from data.ts, so the words are in the HTML
// itself (readable without JavaScript); main.ts only adds the particles.
import { GREETING, INTRO, LINKS, NAME, SECTIONS, type Item } from './data.ts'

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const count = (n: number) => String(n).padStart(2, '0')

/** A list row: a link when it has a url, otherwise a button that shows its figure. */
const row = (p: Item, i: number) => {
  const inner = `
              <span class="num">${count(i + 1)}</span>
              <span class="title">${esc(p.title)}</span>
              <span class="tag">${esc(p.tag)}</span>
              <span class="arrow" aria-hidden="true">${p.url ? '↗' : ''}</span>`
  const data = `class="row" data-id="${p.id}" data-tag="${esc(p.tag)}" data-line="${esc(p.line)}"`
  return p.url
    ? `
          <li>
            <a href="${esc(p.url)}" target="_blank" rel="noopener" ${data}>${inner}
            </a>
          </li>`
    : `
          <li>
            <button type="button" ${data}>${inner}
            </button>
          </li>`
}


/** The tabs and one list per section; the first section starts open. */
const sections = () => {
  const tabs = SECTIONS.map(
    (sec, k) => `
          <button type="button" role="tab" id="tab-${sec.id}" aria-selected="${k === 0}" aria-controls="${sec.id}"${k === 0 ? '' : ' tabindex="-1"'}>${esc(sec.label)}<sup>${count(sec.items.length)}</sup></button>`
  ).join('')
  const lists = SECTIONS.map(
    (sec, k) => `
          <ol class="list" id="${sec.id}" role="tabpanel" aria-labelledby="tab-${sec.id}"${k === 0 ? '' : ' inert'}>${sec.items.map(row).join('')}
          </ol>`
  ).join('')
  return `
        <div class="tabs" role="tablist" aria-label="Show">${tabs}
        </div>
        <div class="lists">${lists}
        </div>`
}

export function renderPage(html: string): string {
  const links = LINKS.map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join('')
  return html
    .replaceAll('{{name}}', esc(NAME))
    .replaceAll('{{hello}}', esc(GREETING.hello))
    .replaceAll('{{first}}', esc(GREETING.name))
    .replaceAll('{{description}}', esc(INTRO.join(' ')))
    .replace('<!--intro-->', INTRO.map((p) => `<p class="lede">${esc(p)}</p>`).join('\n        '))
    .replace('<!--links-->', links)
    .replace('<!--sections-->', sections())
}
