
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-tsx": preferDefault(require("/home/miqueiassantos/Projetos/toque-bateria/src/pages/404.tsx")),
  "component---src-pages-content-tsx": preferDefault(require("/home/miqueiassantos/Projetos/toque-bateria/src/pages/content.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/home/miqueiassantos/Projetos/toque-bateria/src/pages/index.tsx"))
}

