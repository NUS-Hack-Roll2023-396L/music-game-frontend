import React, { useState, useEffect } from "react";
import {
  Flex,
  Select,
  Text,
  Button,
  Container,
  FormControl,
} from "@chakra-ui/react";
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
    <Container>
      <Flex flexDir={"column"}>
        <FormControl>
          <Text fontSize="5xl">Pick a Song!</Text>
          <Select placeholder="Select a instrument" mb={2}>
            <option value="piano">Piano</option>
            <option value="trombone">Trombone</option>
            <option value="flute">Flute</option>
          </Select>
          <Select placeholder="Select a song" mb={2}>
            <option value="bad romance">Bad Romance</option>
            <option value="love story">Love Story</option>
            <option value="Dynamite">Dynamite</option>
          </Select>
          <Button mx={"auto"} size="lg">
            Play
          </Button>

      {loadedSong &&
        <RecordButton 
          song={song}
          onStopRecording={onStopRecording} />
      }
        </FormControl>
      </Flex>
    </Container>
  );
}
