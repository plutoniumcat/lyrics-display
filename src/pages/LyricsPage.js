import React, { useState, useEffect } from 'react'
import LyricsContainer from '../components/LyricsContainer'
import SheetMusicContainer from '../components/SheetMusicContainer'
import arrow from '../data/lyrics/arrow';

export default function LyricsPage() {
  const queryParameters = new URLSearchParams(window.location.search)
  const title = queryParameters.get("title")
  const [data, setData] = useState(arrow);

  useEffect(() => {
    switch (title) {
      case "arrow":
        setData(arrow);
        break;
      // case "akatsukizukuyo":
      //   setData(akatsuki);
      //   break;
      // case "setsugekka":
      //   setData(setsugekka);
      //   break;
      default:
        setData(arrow);
    }
  }, [data, title]);

  return (
    <div className='lyrics-page'>
      <LyricsContainer lyricData={data.lyricData} />
      <SheetMusicContainer filename={data.filename} />
    </div>
  )
}
