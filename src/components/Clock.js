import { useState, useEffect } from "react";
import time from '../services/time'

const Clock = ({timezone}) => {
    const [clockTime, setClockTime] = useState(time.currTime(timezone))

  // Update clockTime when the weather prop changes
  useEffect(() => {
    setClockTime(time.currTime(timezone));
  }, [timezone]); // Include 'weather' as a dependency to update when it changes

  // Set up interval to update clockTime every minute
  useEffect(() => {
    const intervalId = setInterval(() => {
      setClockTime(time.currTime(timezone));
    }, 1000); // Update every minute (60 seconds * 1000 milliseconds)
    
    return () => {
      clearInterval(intervalId); // Clean up the interval when the component unmounts
    };
  }, [timezone]); // Empty dependency array to run the effect only once

  return (
    <p className="text-lg pt-1">Dabartinis laikas: <strong>{clockTime}</strong></p>
  )
}

export default Clock