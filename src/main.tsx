import { Analytics } from '@vercel/analytics/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ActiveSystemsProvider } from './context/active-systems/ActiveSystemsProvider.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ActiveSystemsProvider>
      <App />
      <Analytics />
    </ActiveSystemsProvider>
  </StrictMode>
)
