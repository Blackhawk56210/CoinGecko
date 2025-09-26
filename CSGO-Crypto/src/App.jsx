import Homemain from "./assets/Sections/main-page/Home-main";
import Navbar from "./assets/Sections/main-page/Navbar";
import Signin from "./assets/Sections/login/sign-in";
import Footer from "./assets/Sections/main-page/Footer";
import { Routes, Route } from "react-router";
import "./App.css";


// need to fix routing error and possibly divide hero section on home page up

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path="/" element={<Homemain />} />
            <Route path="/sign-in" element={ <Signin /> }/> 
          </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
