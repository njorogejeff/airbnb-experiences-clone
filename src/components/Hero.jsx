import React from 'react'
import photoGrid from '../assets/photo-grid.svg'

export default function Hero() {
    return (
        <section className='px-8 py-6' style={{minHeight: 'calc(100vh - 4.5rem)'}}>
            <div className='grid place-items-center mb-8'>
                <img src={photoGrid} alt="Various online experiences" className='w-3/4' />
            </div>
            <h1 className='text-4xl font-semibold mb-4'>Online Experiences</h1>
            <p className='text-base font-light text-[#222] leading-[1.1rem]'>
                Join unique interactive activites led by one-of-a-kind hosts-all without leaving home.
            </p>
        </section>
    )
}