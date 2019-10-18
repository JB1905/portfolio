const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jakubbiesiada/done/portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/jakubbiesiada/done/portfolio/src/pages/404.js"))),
  "component---src-pages-about-index-js": hot(preferDefault(require("/Users/jakubbiesiada/done/portfolio/src/pages/about/index.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/jakubbiesiada/done/portfolio/src/pages/contact.js"))),
  "component---src-pages-home-index-js": hot(preferDefault(require("/Users/jakubbiesiada/done/portfolio/src/pages/home/index.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jakubbiesiada/done/portfolio/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/jakubbiesiada/done/portfolio/src/pages/projects.js"))),
  "component---src-pages-technologies-js": hot(preferDefault(require("/Users/jakubbiesiada/done/portfolio/src/pages/technologies.js")))
}

