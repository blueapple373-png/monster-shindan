import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LP from './LP.jsx'
import Site from './Site.jsx'
import AboutEditorial from './AboutEditorial.jsx'
import ServicesEditorial from './ServicesEditorial.jsx'
import MonstersEditorial from './MonstersEditorial.jsx'
import AppEditorial from './AppEditorial.jsx'
import './marble-tuning.css'
import './profile.css'
import './contact.css'

const path = window.location.pathname.replace(/\/$/, '') || '/'
const showBlogHomeRail = path === '/blog' || path.startsWith('/blog/')

function BlogHomeRail() {
  useEffect(() => {
    let frame
    let attempts = 0

    const install = () => {
      const hero = document.querySelector('.page-hero.compact')

      if (!hero) {
        if (attempts < 180) {
          attempts += 1
          frame = requestAnimationFrame(install)
        }
        return
      }

      hero.querySelectorAll('.page-home-rail').forEach((rail) => rail.remove())
      document.querySelectorAll('.blog-home-rail').forEach((rail) => rail.remove())

      const rail = document.createElement('a')
      rail.className = 'hero-rail-link page-home-rail blog-home-rail'
      rail.href = '/'
      rail.setAttribute('aria-label', 'ホームへ戻る')
      rail.innerHTML = '<span>00</span><i aria-hidden="true"></i><strong>Home</strong>'
      hero.appendChild(rail)
    }

    frame = requestAnimationFrame(install)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      document.querySelectorAll('.blog-home-rail').forEach((rail) => rail.remove())
    }
  }, [])

  return null
}

let Page
if (path === '/lp') {
  Page = LP
} else if (path === '/diagnosis') {
  Page = App
} else if (path === '/about') {
  Page = AboutEditorial
} else if (path === '/services') {
  Page = ServicesEditorial
} else if (path === '/monsters') {
  Page = MonstersEditorial
} else if (path === '/app') {
  Page = AppEditorial
} else {
  Page = () => <Site path={path} />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Page />
    {showBlogHomeRail && <BlogHomeRail />}
  </>
)
