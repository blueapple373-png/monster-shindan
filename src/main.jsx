import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LP from './LP.jsx'
import Site from './Site.jsx'

const path = window.location.pathname.replace(/\/$/, '') || '/'

let Page
if (path === '/lp') {
  Page = LP
} else if (path === '/diagnosis') {
  Page = App
} else {
  Page = () => <Site path={path} />
}

ReactDOM.createRoot(document.getElementById('root')).render(<Page />)
