import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function MovieSearch(updateMovieData = f => f) {
  let [search, updateSearch] = useState('');


  const searchMovie = e => {
    e.preventDefault();
    console.log('SEARCH:', search)
    Axios.get('/api/search/:movie', { params: {movie: search}})
      .then(({ data }) => {
        if (data === 'FAIL') {
          alert("Incorrect Movie Title. Are you a true fan?")
        } else {
          updateMovieData(data)
        }
      })
      .catch(err => {
        alert(err)
      })
  }

  return (
    <form onSubmit={searchMovie}>
      <input type="text" placeholder="Enter Movie Name" onChange={e => updateSearch(e.target.value)} />
      <input type="submit" name="search" value="Search" />
    </form>
  )
}