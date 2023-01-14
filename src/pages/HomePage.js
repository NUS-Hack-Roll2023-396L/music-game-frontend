import React, {useState, useEffect} from 'react'
import banner from '../assets/banner.png'
import {
  Flex,
  Select,
  Text,
  Button,
  Container,
  FormControl,
} from "@chakra-ui/react";
import RecordButton from '../components/RecordButton'
import {motion, useSpring} from 'framer-motion'
import allofme from '../assets/songs/all-of-me.mp3'
import letitbe from '../assets/songs/let-it-be.mp3';
import ttls from '../assets/songs/twinkle-twinkle-little-star.mp3'

const songs = [
  {
    name: "All of Me",
    author: "John Legend",
    url: allofme,
    audio: new Audio(allofme)
  },
  {
    name: "Let It Be",
    author: "The Beatles",
    url: allofme,
    audio: new Audio(letitbe)
  },
  {
    name: "Twinkle Twinkle Little Star",
    author: "Unknown",
    url: allofme,
    audio: new Audio(ttls)
  },
]

export default function HomePage() {
  return (
    <>
      <BannerSection/>
    </>
  )
}

function BannerSection() {

  const [loadedSong, setLoadedSong] = useState(false)
  const [song, setSong] = useState(undefined)
  const [instrument, setInstrument] = useState("")
  
  const onStopRecording = (songBlob) => {
    console.log(songBlob)
    // console.log(songBlob.type)
  }

  const onChangeSong = (e) => {
    setLoadedSong(false)
    console.log(e.target.value)
    const song = new Audio(e.target.value)
    song.addEventListener("canplay", (e) => {
      setSong(song);
      setLoadedSong(true)
    })
  }



  return (
  <section className='grid grid-cols-5 gap-32 mt-32 h-full'>
    <Flex className='col-span-2' flexDir={"column"} gap={4}>
          <Text fontSize="5xl">Pick a Song!</Text>
          <Select placeholder="Select a instrument" backgroundColor={"white"} mb={2} 
            onChange={(e) => setInstrument(e.target.value)}>
            <option value="piano">Piano</option>
            <option value="trombone">Trombone</option>
            <option value="flute">Flute</option>
          </Select>
          <motion.div
            variants={hideShowVariant}
            animate={instrument ? "show" : "hide"}
            transition={{duration: 0.3}}>
            <Select placeholder="Select a song" backgroundColor={"white"} mb={2} onChange={onChangeSong}>
              {songs.map((song) => (
                <option key={song.name} value={song.url}>{song.name}</option>
              ))}
            </Select>
          </motion.div>
          <motion.div
            variants={hideShowVariant}
            animate={loadedSong ? "show" : "hide"}
            transition={{duration: 0.3}}>
              {/* Don't preload the record button until the song is loaded */}
            {loadedSong &&
              <RecordButton 
              song={song}
              onStopRecording={onStopRecording} />
            }
          </motion.div>
      
    </Flex>
    <img src={banner} className='col-span-3' alt="Banner"/>

    {/* <div className='col-span-3 relative flex'>
      <Note/>
    </div> */}
  </section>
  )
}

const Note = () => {
  const y = useSpring(-20);
  return (
    <motion.div style={{y: y}}>
      Hello
    </motion.div>
  )
}

const hideShowVariant = {
  hide: {opacity: 0, y: -20},
  show: {opacity: 1, y: 0}
}