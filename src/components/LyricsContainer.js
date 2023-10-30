import React from 'react'
import ParagraphContainer from './ParagraphContainer'

export default function LyricsContainer(lyricData) {
  return (
    <div>
      {lyricData.lyricData.map((para, index) => {
        return(
            <div key={index}>
                <ParagraphContainer paragraphData={para} />
            </div>
        )
      })}
    </div>
  )
}
