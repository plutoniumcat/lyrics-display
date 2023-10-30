import React, { useState } from 'react'
import PlainTextContainer from './PlainTextContainer'
import DetailsContainer from './DetailsContainer'

export default function ParagraphContainer(paragraphData) {

    const [showDetails, setShowDetails] = useState(false);

    const handleClick = () => {
        setShowDetails(!showDetails);
    }

  return (
    <div className='paragraph-container' onClick={handleClick}>
        <PlainTextContainer lyrics={paragraphData.paragraphData.lyrics} />
        {showDetails && <DetailsContainer details={paragraphData.paragraphData.details} />}
    </div>
  )
}
