import Header from "./components/Header";
import Main from "./components/Main";
import './App.css'
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter, Routes } from "react-router-dom";



function App() {
  return (
  <>
  <BrowserRouter>
    <Header/>
  
    <Main/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </BrowserRouter>
  </>
  );
}

export default App;
