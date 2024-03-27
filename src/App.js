
import React from "react";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import {Home} from './components/home';
import { Header } from "./shared/header";
import { Footer } from "./shared/footer";

function App() {
  return (
  <React.Fragment>
   <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    <Footer/>
   </Router>
  </React.Fragment>
  );
}

export default App;
