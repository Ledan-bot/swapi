import React, {useState} from 'react'


export default function MovieData({ movieData }) {
  const { title, created, director, opening_crawl } = movieData

  const adjustedTime = new Date(created).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).replace(',', '');
  return (
    <>
      <section className="col-span-2 flex flex-col h-full animate-scroll">
        <h1 className="text-yellow-400 text-3xl leading-6 font-bold text-justify relative ">Title: {title}</h1>
        <h3 className="text-yellow-400 text-3xl leading-6 font-bold text-justify relative">Directed By: {director}</h3>
        <p className="text-yellow-400 text-3xl leading-6 font-bold text-justify relative">Created On: {adjustedTime}</p>
        <p className="text-yellow-400 text-3xl leading-6 font-bold text-justify relative">{opening_crawl}</p>
      </section>
    </>
  )
}