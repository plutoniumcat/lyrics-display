import React from 'react'

export default function DetailsContainer(details) {
  return (
    <div className='details'>
      <div className='original-lyrics'>
        {details.details.original}
      </div>
      <div className='jp-translation'>
        {details.details.jpTranslation}
      </div>
    </div>
  )
}
