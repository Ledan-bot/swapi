import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function MovieSearch({updateMovieData = f => f, wookie}) {
  let [search, updateSearch] = useState('');


  const searchMovie = e => {
    e.preventDefault();
    console.log('wookie boolean: ', wookie)
    if (wookie) {
      Axios.get('/api/wookie-search/:movie', { params: {movie: search}})
        .then(({ data }) => {
          if (data === 'FAIL') {
            alert(`${search} is not Star Wars movie. Are you a true fan?`)
          } else {
            updateMovieData(data)
          }
        })
        .catch(err => {
          alert(err)
        })
    } else {
      Axios.get('/api/search/:movie', { params: {movie: search}})
        .then(({ data }) => {
          if (data === 'FAIL') {
            alert(`${search} is not Star Wars movie. Are you a true fan?`)
          } else {
            updateMovieData(data)
          }
        })
        .catch(err => {
          alert(err)
        })
    }
  }

  return (
    <form className="flex flex-col items-center " onSubmit={searchMovie}>
      <input type="text" placeholder="Enter Movie Name" onChange={e => updateSearch(e.target.value)} className="w-96 bg-transparent rounded-lg text-yellow-400"/>
      <input type="submit" name="search" value="Search" className="w-96 bg-yellow-400 rounded-lg"/>
    </form>
  )
}