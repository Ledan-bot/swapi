import React, {useState} from 'react'


export default function MovieData({ movieData }) {
  const { aoahaoanwo, oarcworaaowowa, waahrcwooaaooorc, ooakwowhahwhrr_oarcraohan } = movieData

  const adjustedTime = new Date(oarcworaaowowa).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).replace(',', '');
  return (
    <>
      <section className="flex flex-col h-full w-3/5 ">
        <h1 className="text-yellow-400 text-3xl leading-6 font-bold text-justify relative ">aoahaoanwo: {aoahaoanwo}</h1>
        <h3 className="text-yellow-400 text-3xl leading-6 font-bold text-justify relative">waahrcwooaaooorc: {waahrcwooaaooorc}</h3>
        <p className="text-yellow-400 text-3xl leading-6 font-bold text-justify relative">oarcworaaowowa: {adjustedTime}</p>
        <p className="text-yellow-400 text-3xl leading-6 font-bold text-justify relative">{ooakwowhahwhrr_oarcraohan}</p>
      </section>
    </>
  )
}