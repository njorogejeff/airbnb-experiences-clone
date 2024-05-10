import React from 'react'
import katieZaferes from '../assets/katie-zaferes.svg'
import starIcon from '../assets/star-icon.svg'

export default function Card() {
    return (
        <section className='px-9 py-6'>
            {/* Card 1 */}
            <div className='max-w-fit text-[#222] text-xs font-light leading-3'>
                <div className='relative mb-2'>
                    <img src={katieZaferes} alt="Katie Zaferes Image" className='w-full' />
                    <p className='absolute top-2 left-2 bg-white rounded-sm uppercase font-medium py-1 px-1'>sold out</p>
                </div>
                <div className='flex items-center justify-start gap-1 mb-2'>
                    <img src={starIcon} alt="rating" className='block' />
                    <span className=''>5.0</span>
                    <div className='flex items-center justify-start gap-1 text-[#918E9B]'>
                        <span>(6)</span>
                        <span>•</span>
                        <span>USA</span>
                    </div>
                </div>
                <h2 className='mb-2'>Life lessons with Katie Zaferes</h2>
                <p><span className='font-semibold'>From $136</span> / person</p>
            </div>
        </section>
    )
}