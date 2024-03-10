import React from 'react'
import katieImg from '../assets/katie-zaferes.png'
import starImg from '../assets/star.png'

export default function Card() {
    return (
        <section className="card-component">
            <div className="card">
                <div className="card-image">
                    <img src={katieImg} alt="Katie Zaferes' Photo" class="card-img" />
                    <p className="card-badge">sold out</p>
                </div>
                <div className="card-rating">
                    <div className="rating">
                        <img src={starImg} alt="" className="star-img" />
                        <p><span> 5.0</span><span> (6)</span> • <span>USA</span></p>
                    </div>
                    <p className="rating-desc">Life lessons with Katie Zaferes</p>
                    <p className="rating-price"><span>From $136</span> / person</p>
                </div>
            </div>
        </section>
    )
}