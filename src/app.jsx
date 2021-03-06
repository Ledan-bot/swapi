import React, { useState } from 'react';
import Axios from 'axios';
import MovieSearch from './components/MovieSearch.jsx';
import MovieData from './components/MovieData.jsx';
import WookieeData from './components/WookieeData.jsx';

export default function App() {
  let [movieData, updateMovieData] = useState('');
  let [wookie, speakWookie] = useState(wookie)


  if (!movieData) {
    return (
      <main className="h-screen bg-star-sky bg-cover">
        <section className="h-3/6 flex flex-col items-center content-between justify-between ">
          <h1 className="text-yellow-400 text-center text-8xl" >Star Wars</h1>
          <button className="bg-yellow-800 rounded-full py-3 px-6 w-72" onClick={() => speakWookie(!wookie)}>Speak Wookie?</button>
          <MovieSearch updateMovieData={updateMovieData} wookie={wookie}/>
        </section>
      </main>
    )
  } else if (movieData && wookie) {
    return (
      <main className="h-screen bg-star-sky bg-cover">
        <section className="h-3/6 grid grid-cols-4">
          <h1 className="text-yellow-400 text-8xl" >Star Wars</h1>
          <WookieeData movieData={movieData} />
          <MovieSearch updateMovieData={updateMovieData} wookie={wookie} />
          <button className="bg-yellow-800 rounded-full py-3 px-6 w-72" onClick={() => speakWookie(!wookie)}>Speak Wookie?</button>
        </section>
      </main>
    )
  } else {
    return (
      <main className="h-screen bg-star-sky bg-cover">
        <section className="h-3/6 grid grid-cols-4">
          <h1 className="text-yellow-400 text-center text-8xl" >Star Wars</h1>
          <MovieData movieData={movieData} />
          <MovieSearch updateMovieData={updateMovieData} wookie={wookie}/>
          <button className="bg-yellow-800 rounded-full py-3 px-6 w-72" onClick={() => speakWookie(!wookie)}>Speak Wookie?</button>
        </section>
      </main>
    )
  }
}

