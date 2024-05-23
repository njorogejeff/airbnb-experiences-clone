import React from 'react'
import katieZaferes from '/images/katie-zaferes.svg'
import starIcon from '/images/star-icon.svg'

export default function Card(props) {
    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText = "Sold Out"
    } else if (props.item.location === "Online") {
        badgeText = "Online"
    }

    return (
        <div className='max-w-44 text-[#222] text-xs font-light leading-3'>
            <div className='relative mb-2'>
                <img src={props.item.coverImg} alt="" className='w-full max-h-[14.7rem] rounded-lg' />
                {badgeText && <p className='absolute top-2 left-2 bg-white rounded-sm uppercase font-medium py-1 px-1'>{badgeText}</p>}
            </div>
            <div className='flex items-center justify-start gap-1 mb-2'>
                <img src={starIcon} alt="rating" className='block' />
                <span className=''>{props.item.stats.rating.toFixed(1)}</span>
                <div className='flex items-center justify-start gap-1 text-[#918E9B]'>
                    <span>({props.item.stats.reviewCount})</span>
                    <span>•</span>
                    <span>{props.item.location}</span>
                </div>
            </div>
            <h2 className='mb-2'>{props.item.title}</h2>
            <p><span className='font-semibold'>From ${props.item.price}</span> / person</p>
        </div>
    )
}