import React, {useState, useEffect} from 'react'
import banner from '../assets/banner.png'
import {
  Flex,
  Select,
  Text,
  Button,
  Container,
  FormControl,
  useToast,
  Divider,
} from "@chakra-ui/react";
import RecordButton from '../components/RecordButton'
import {AnimatePresence, motion, useSpring} from 'framer-motion'
import allofme from '../assets/songs/all-of-me.mp3'
import letitbe from '../assets/songs/let-it-be.mp3';
import ttls from '../assets/songs/twinkle-twinkle-little-star.mp3'
import Leaderboard from '../components/Leaderboard';

const songs = [
  {
    id: 0,
    name: "All of Me",
    author: "John Legend",
    url: allofme,
    audio: new Audio(allofme)
  },
  {
    id: 1,
    name: "Let It Be",
    author: "The Beatles",
    url: letitbe,
    audio: new Audio(letitbe)
  },
  {
    id: 2,
    name: "Twinkle Twinkle Little Star",
    author: "Unknown",
    url: ttls,
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
  const [audio, setAudio] = useState(undefined)
  const [song, setSong] = useState({})
  const [instrument, setInstrument] = useState("")
  const [recording, setRecording] = useState(false)
  const [completed, setCompleted] = useState(false)

  const onChangeInstrument = (e) => {
    setInstrument(e.target.value)
  }

  const onChangeSong = (e) => {
    setLoadedSong(false)
    const selectedSong = songs.find(song => song.id == e.target.value)

    const audio = new Audio(selectedSong.url)
    setSong(selectedSong)
    audio.addEventListener("canplay", (e) => {
      setAudio(audio);
      setLoadedSong(true)
    })
  }

  const onStartRecording = () => {
    setRecording(true)
  }

  const onStopRecording = (songBlob) => {
    console.log(songBlob)
    setRecording(false)
    setCompleted(true)
    // console.log(songBlob.type)
  }

  const retry = () => {
    setCompleted(false)
  }
  
  const reset = () => {
    setCompleted(false);
    setRecording(false);
    setInstrument("");
    setSong("");
    setAudio(null)
  }

  return (
  <section className='gap-32 mt-32 h-full max-w-md mx-auto'>
    <h1 className='font-bold text-6xl mb-16 text-center fancy'>Harmony Quest</h1>
      
    <AnimatePresence>
      {completed ? (
        <motion.div
            initial={{opacity: 0, y: 0}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 0}}
          >
          <Scoreboard onRetry={retry} onNewSong={reset} />
          <Divider my={4}/>
          <Leaderboard/>
        </motion.div>
      ) : (
        <motion.div>
        <Flex className='col-span-2' flexDir={"column"} gap={4}>
          {/* <Text fontSize="5xl">Pick a Song!</Text> */}
            {recording && (
              // The currently playing song's details
              <motion.div
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -20}}>
                  <h1 className='text-4xl text-center font-bold'>{song.name}</h1>
                  <h2 className='text-xl text-center'>{song.author}</h2>
                </motion.div>
            )}
            <AnimatePresence>
              {!recording && (
                <motion.div 
                  exit={{opacity: 0, y:-20}}
                  initial={{opacity: 0, y:-20}}
                  animate={{opacity: 1, y:0}}>

                <Select placeholder="Select a instrument" 
                  value={instrument}
                  backgroundColor={"white"} mb={2}
                  onChange={onChangeInstrument}>
                  <option value="piano">Piano</option>
                  <option value="trombone">Trombone</option>
                  <option value="flute">Flute</option>
                </Select>
                </motion.div>
              )}
            </AnimatePresence>
          <AnimatePresence>
            {instrument && !recording && (
              <motion.div
                exit={{opacity: 0, y:-20}}
                initial={{opacity: 0, y:-20}}
                animate={{opacity: 1, y:0}}
                // variants={hideShowVariant}
                // animate={instrument && !recording ? "show" : "hide"}
                transition={{duration: 0.3}}>
                <Select placeholder="Select a song" value={song ? song.id: -1} backgroundColor={"white"} mb={2} 
                  onChange={onChangeSong}>
                  {songs.map((song) => (
                    <option key={song.name} value={song.id}>{song.name}</option>
                  ))}
                </Select>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {/* Don't preload the record button until the song is loaded */}
            {instrument && audio && loadedSong &&
              <motion.div
                exit={{opacity: 0, y:-20}}
                initial={{opacity: 0, y:-20}}
                animate={{opacity: 1, y:0}}
                transition={{duration: 0.3}}>
                  <RecordButton 
                    iconSize={48}
                    song={audio}
                    onStartRecording={onStartRecording}
                    onStopRecording={onStopRecording} />

              </motion.div>
            }
          </AnimatePresence>
        </Flex>
      </motion.div>
      )
    }
    </AnimatePresence>
  </section>
  )
}

const Scoreboard = ({onRetry, onNewSong}) => {

  const toast = useToast();
  const share = () => {
    toast({
      title: 'Shared with your friends.',
      description: "Be proud of yourself!",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }

  return (
    <div className='w-full flex justify-center flex-col items-center'>
      <h1 className='text-4xl'>Score</h1>
      <div  className='grid grid-cols-4 w-full text-xl gap-4 mb-8'>
        <p className='col-span-3 text-left font-bold'>Accuracy</p>
        <p className='col-span-1 text-right'>98%</p>
        <p className='col-span-3 text-left font-bold'>Rhythm</p>
        <p className='col-span-1 text-right'>98%</p>
      </div>
      <div className='flex gap-4 w-full justify-center'>
        <MyButton onClick={onRetry}>Retry</MyButton>
        <MyButton onClick={onNewSong}>New Song</MyButton>
        <MyButton onClick={share}>Share</MyButton>
      </div>
    </div>
  )
}

const MyButton = ({children, ...rest}) => {
  return (
    <Button {...rest}>
      {children}
    </Button>
  )
}


const hideShowVariant = {
  hide: {opacity: 0, y: -20},
  show: {opacity: 1, y: 0}
}