import React from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import './App.css'
import data from './data'

console.log(data);

function App() {
  const cards = data.map(card => {
    return (
      <Card
        key={card.id}
        item={card}
      />
    )
  })

  return (
    <>
      <Navbar />
      <Hero />
      <section className='px-9 py-6 flex justify-start items-center gap-x-5'>
        {cards}
      </section>
    </>
  )
}

export default App
