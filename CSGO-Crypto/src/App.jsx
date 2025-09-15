import Homemain from "./assets/Sections/main-page/Home-main";
import Navbar from './assets/Sections/main-page/Navbar'
import Footer from "./assets/Sections/main-page/Footer";
import { Routes, Route} from 'react-router'
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Homemain />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
