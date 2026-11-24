import React from 'react'
import { MOODS } from '../constants/moods'
import './Chip.css'

const Chip = ({ variant = 'default', mood, selected = false, onClick, onRemove, children }) => {
  if (variant === 'filter') {                                       
    return (
      <button
        type='button'
        className={`chip chip-filter${selected ? ' is-selected' : ''}`}  
        onClick={onClick}
      >
        {children}
      </button>
    )
  }

  if(variant==='mood'){
    const moodInfo=MOODS.find((m)=>m.id===mood) || MOODS[0]
    return (
        <span className="chip">
            <span className="chip-dot"
            style={{backgroundColor:moodInfo.a}}></span>
            {moodInfo.label}
        </span>
    )
  }
  if (variant === 'tag') {                                      
    return (
      <span className={`chip chip-tag${onRemove ? ' is-removable' : ''}`}>
        #{children}                                                 
        {onRemove && (
          <button type='button' className='chip-remove' onClick={onRemove}>×</button>
        )}
      </span>
    )
  }

  return <span className='chip'>{children}</span>                  
}

export default Chip