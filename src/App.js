import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from './Home/Header/header';
import Contact from './Contact/contact';
import Home from "./Home/home";
import About from "./About/about";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path ="/" element ={<Home/>} />
        <Route path ="/contact" element ={<Contact/>} />
        <Route path ="/about" element ={<About/>} />
      </Routes>
      </BrowserRouter>


</div>
  );
}

export default App;
