import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TARGET = new Date('2026-07-01T00:00:00')

function getTimeLeft() {
  const diff = TARGET - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

function Unit({ value, label }) {
  return (
    <motion.div
      className="countdown-unit"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="countdown-number">{String(value).padStart(2, '0')}</span>
      <span className="countdown-label">{label}</span>
    </motion.div>
  )
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft())

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="countdown">
      <Unit value={time.days}    label="days" />
      <Unit value={time.hours}   label="hours" />
      <Unit value={time.minutes} label="min" />
      <Unit value={time.seconds} label="sec" />
    </div>
  )
}
