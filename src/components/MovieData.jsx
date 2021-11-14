import React, {useState} from 'react'


export default function MovieData({ movieData }) {
  const { title, created, director, opening_crawl } = movieData

  const adjustedTime = new Date(created).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).replace(',', '');
  console.log(opening_crawl)
  return (
    <>
      <section className="h-80 flex flex-col justify-evenly content-between animate-scroll">
        <h1 className="text-yellow-400 text-center text-3xl">Title: {title}</h1>
        <h3 className="text-yellow-400 text-center text-3xl">Directed By: {director}</h3>
        <p className="text-yellow-400 text-center text-3xl">Created On: {adjustedTime}</p>
        <p className="text-yellow-400 text-center text-3xl">{opening_crawl}</p>
      </section>
    </>
  )
}