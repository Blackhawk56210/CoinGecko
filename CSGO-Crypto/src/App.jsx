import Navbar from './assets/Sections/main-page/Nav-bar'
import Herosection from './assets/Sections/main-page/Herosection'
import Features from './assets/Sections/main-page/Features'
import Cases from './assets/Sections/main-page/Cases'
import Dashboard from './assets/Sections/main-page/Dashboard'
import Caseselection from './assets/Sections/main-page/Case-selection'
import Reviews from './assets/Sections/main-page/Reviews'
import Footer from './assets/Sections/main-page/Footer'
import './App.css'


function App() {
 return (
    <>
      <Navbar />
      <Herosection />
      <Features />
      <Cases />
      <Dashboard />
      <Caseselection />
      <Reviews />
      <Footer />
    </>
  )
}

export default App
