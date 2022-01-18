import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ProjectProvider } from './context/ProjectProvider'
import { CookiesProvider } from 'react-cookie'
import 'leaflet/dist/leaflet.css'
import SimpleReactLightbox from 'simple-react-lightbox'
ReactDOM.render(
  <CookiesProvider>
    <ProjectProvider>
      <SimpleReactLightbox>
        <App />
      </SimpleReactLightbox>
    </ProjectProvider>
  </CookiesProvider>,
  document.getElementById('root')
)
