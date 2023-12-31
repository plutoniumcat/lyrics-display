import React, { useState, useEffect } from 'react'
import LyricsContainer from '../components/LyricsContainer'
import SheetMusicContainer from '../components/SheetMusicContainer'
import arrow from '../data/lyrics/arrow';
import setsugekka from '../data/lyrics/setsugekka';
import akatsuki from '../data/lyrics/akatsukizukuyo';
import defaultData from '../data/lyrics/default';
import Menu from '../components/Menu';

export default function LyricsPage() {
  const queryParameters = new URLSearchParams(window.location.search)
  const title = queryParameters.get("title")
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    switch (title) {
      case "arrow":
        setData(arrow);
        break;
      case "akatsukizukuyo":
        setData(akatsuki);
        break;
      case "setsugekka":
        setData(setsugekka);
        break;
      default:
        setData(defaultData);
    }
  }, [data, title]);

  return (
    <div className='lyrics-page'>
      <Menu />
      <LyricsContainer lyricData={data.lyricData} />
      <SheetMusicContainer fileName={data.filename} />
    </div>
  )
}
