import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FrameProvider } from './context/FrameContext'
import { App } from './App'
import './assets/index.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <FrameProvider>
      <App />
    </FrameProvider>
  </StrictMode>
)
