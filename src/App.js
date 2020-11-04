import React,{useState} from 'react';
import {moviesData} from "./component/MoviesData";
import MovieList from "./component/MovieList";
import SearchMovie from "./component/SearchMovie/SearchMovie";
import AddMovie from "./component/AddMovie/AddMovie";
import { Route } from "react-router-dom";
import MovieDetails from "./component/MovieDetails";
import Home from "./Home"

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/" component={Home} />
       <Route
          path="/movielist/:name"
          render={(props) => <MovieDetails data={moviesData} {...props} />}
        /> 
       
      </header>
      
    </div>
  );
}

export default App;