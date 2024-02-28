import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Error from '../../components/Error'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import About from '../../pages/About'
import File from '../../pages/File'

function Rooter() {
  return (
    <div className="bodyContainer">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/file/:pageId" element={<File />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default Rooter
