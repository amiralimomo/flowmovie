
import React, {useEffect} from "react";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import {Home} from './components/home';
import { Header } from "./shared/header";
import { Footer } from "./shared/footer";
import {useGenre}from "./hooks/getGenreDataList";
function App() {
  const [genre, getGenre] = useGenre();
    useEffect(() => {

        getGenre()
    }, [])
  return (
  <React.Fragment>
   <Router>
    <Header genre={genre}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    <Footer genre={genre}/>
   </Router>
  </React.Fragment>
  );
}

export default App;
