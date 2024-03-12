import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/style/scss/style.scss'
import Rooter from './rooter/Rooter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Rooter />
  </React.StrictMode>,
)
