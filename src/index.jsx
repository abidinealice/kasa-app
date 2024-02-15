import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './style/style.css'
import Home from './pages/Home'
import Error from './components/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import File from './pages/File'
import { ItemsProvider } from './utils/context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ItemsProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/file" element={<File />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </ItemsProvider>
    </Router>
  </React.StrictMode>,
)
