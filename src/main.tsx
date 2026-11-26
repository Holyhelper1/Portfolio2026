import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}

// Enable scroll-reveal styles only after React has taken over. The static
// (pre-rendered) HTML stays fully visible for crawlers and no-JS clients.
requestAnimationFrame(() => {
  document.documentElement.classList.add('js-reveal')
})
