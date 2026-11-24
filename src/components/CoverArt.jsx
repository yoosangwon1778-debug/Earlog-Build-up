import React from 'react'
import { MOODS } from '../constants/moods'
import './CoverArt.css'

const CoverArt = ({ mood, photoUrl = '', size = 44, radius = 8, lp = true, children }) => {
    const moodInfo = MOODS.find((m)=>m.id===mood) || MOODS[0]
    const background = photoUrl 
    ? `center / cover no-repeat url(${photoUrl})`
    : `linear-gradient(135deg, ${moodInfo.a}, ${moodInfo.b})`
        return (
        <div 
        className='cover-art'
        style={{width:size, height:size, borderRadius:radius, background}}>
            {lp && <span className='cover-lp'></span>}
            {children}
        </div>
    )
}

export default CoverArt