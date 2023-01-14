import React, { useState, useEffect } from 'react'
import RecordButton from '../components/RecordButton'
import testsong from '../assets/song.mp3'

export default function SelectSongPage() {
  const [loadedSong, setLoadedSong] = useState(false)
  const [song, setSong] = useState(new Audio(testsong))

  useEffect(() => {
    const loadSong = (e) => {
      setLoadedSong(true);
    }
    song.addEventListener("canplaythrough", loadSong)
    return () => {
      song.removeEventListener("canplaythrough", loadSong)
    }
  }, [])
  
  const onStopRecording = (songBlob) => {
    console.log(songBlob)
  }

  return (
    <div>
      {/* <button onClick={() => {
        console.log(test.duration)
        test.play()

      }}>Button</button> */}
      {loadedSong &&
        <RecordButton 
          song={song}
          onStopRecording={onStopRecording} />
      }
    </div>
  )
}
