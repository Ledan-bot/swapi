import React, { useState } from 'react';
import Axios from 'axios';
import MovieSearch from './components/MovieSearch.jsx';
import MovieData from './components/MovieData.jsx';

export default function App() {
  let [movieData, updateMovieData] = useState('');


  if (!movieData) {
    return (
      <main className="h-screen bg-star-sky bg-cover">
        <section className="h-3/6 flex flex-col content-between justify-between ">
          <h1 className="text-yellow-400 text-center text-8xl" >Star Wars</h1>
          <MovieSearch updateMovieData={updateMovieData} />
        </section>
      </main>
    )
  } else {
    return (
      <main className="h-screen bg-star-sky bg-cover">
        <section className="h-3/6 flex flex-col content-center justify-evenly">
          <h1 className="text-yellow-400 text-center text-8xl" >Star Wars</h1>
          <MovieSearch updateMovieData={updateMovieData} />
          <MovieData movieData={movieData} />
        </section>
      </main>
    )
  }
}

