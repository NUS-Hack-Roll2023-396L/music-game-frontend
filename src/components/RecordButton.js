import React, {useState, useEffect, useRef} from 'react'
import {BsRecordCircle, BsStop, BsStopCircle} from 'react-icons/bs'
import { useAudioRecorder } from 'react-audio-voice-recorder';
import { addSeconds, intervalToDuration } from 'date-fns';

export default function RecordButton({song, onStartRecording, onStopRecording,  iconSize}) {
  const [recording, setRecording] = useState(false)
  const {startRecording, stopRecording, toggle, recordingBlob, isRecording, isPaused, recordingTime} = useAudioRecorder()
  const [duration, setDuration] = useState({hours: 0, minutes: 0, seconds: 0})
  const timerId = useRef();

  useEffect(() => {
    if (recordingTime >= song.duration) {
      stopRecording()
    } 
  }, [recordingTime])


  return (
    <div className='flex flex-col items-center'>

      {isRecording
        ? <BsStopCircle className='cursor-pointer hover:opacity-50 mb-2' color="red" onClick={() => {
          onStopRecording(recordingBlob)
          song.pause()
          stopRecording()
        }} fontSize={iconSize ?? 36}/>
        : <BsRecordCircle className='cursor-pointer hover:opacity-50 mb-2' color="red" onClick={() => {
          onStartRecording()
          startRecording()
          song.currentTime = 0;
          song.play()
        }} fontSize={iconSize ?? 36}/>
      }
      {isRecording && <>
      <p>recording...</p>
      
      </>}
      <p>
        {/* Recording time */}
        {new Intl.NumberFormat("en-US", {
          minimumIntegerDigits: 2,
          maximumFractionDigits: 0
        }).format(recordingTime / 60)}:{new Intl.NumberFormat("en-US", {
          minimumIntegerDigits: 2,
          maximumFractionDigits: 0
        }).format(recordingTime % 60)}
        /
        {new Intl.NumberFormat("en-US", {
          minimumIntegerDigits: 2,
          maximumFractionDigits: 0
        }).format(song.duration / 60)}:{new Intl.NumberFormat("en-US", {
          minimumIntegerDigits: 2,
          maximumFractionDigits: 0
        }).format(song.duration % 60)}
      </p>
    </div>
  )
}
