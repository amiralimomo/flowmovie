
import React, {useEffect} from "react";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import {Home} from './components/home';
import { Header } from "./shared/header";
import { Footer } from "./shared/footer";
import {useGenre}from "./hooks/getGenreDataList";
import { MoviePage } from "./components/moviepage";
import { SearchedPage } from "./components/searchedpage";
import {AllMovies} from "./components/allmovies";
import { GenresMovies } from "./components/genresmovies";
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
      <Route path="/movie" element={<MoviePage/>}/>
      <Route path="/search/:moviename" element={<SearchedPage/>}/>
      <Route path="/allmovies" element={<AllMovies/>}/>
      <Route path="/genre"  element={<GenresMovies genre={genre}/>}/>
    </Routes>
    <Footer genre={genre}/>
   </Router>
  </React.Fragment>
  );
}

export default App;
