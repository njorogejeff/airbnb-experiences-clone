import React from 'react'
import photoGrid from '/images/photo-grid.svg'

export default function Hero() {
    return (
        <section className='px-9 py-6'>
            <img src={photoGrid} alt="Airbnb Online Experiences" className='mb-8 w-full max-h-[30rem]' />
            <h1 className='text-4xl font-semibold leading-10 mb-4'>Online Experiences</h1>
            <p className='text-[#222] text-base font-light leading-4 max-w-80 md:max-w-full'>Join unique interactive activites led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}