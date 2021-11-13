import React, { useState } from 'react';
import Axios from 'axios';
import MovieSearch from './components/forms/MovieSearch.jsx';

export default function App() {
  let [movieData, updateMovieData] = useState('');


  if (!movieData) {
    return (
      <main className="h-screen bg-star-sky bg-cover">
        <h1 className="text-yellow-400 text-center text-8xl" >Star Wars</h1>
        <MovieSearch updateMovieData={updateMovieData} />
      </main>
    )
  } else {
    <main className="h-screen bg-star-sky bg-cover">
      <h1 className="text-yellow-400 text-center text-8xl" >Star Wars</h1>
      <MovieSearch updateMovieData={updateMovieData} />
      <MovieData movieData={movieData} />
    </main>
  }
}

