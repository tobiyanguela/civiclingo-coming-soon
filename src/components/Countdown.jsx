import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

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

function Unit({ value, label, index }) {
  const reduce = useReducedMotion()

  const unitAnim = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] },
      }

  const numberAnim = reduce
    ? {}
    : {
        initial: { opacity: 0, y: -8 },
        animate: { opacity: 1, y: 0 },
        exit:    { opacity: 0, y: 8 },
        transition: { duration: 0.18 },
      }

  return (
    <motion.div className="countdown-unit" {...unitAnim}>
      <AnimatePresence mode="wait">
        <motion.span key={value} className="countdown-number" {...numberAnim}>
          {String(value).padStart(2, '0')}
        </motion.span>
      </AnimatePresence>
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
      <Unit value={time.days}    label="days"  index={0} />
      <Unit value={time.hours}   label="hours" index={1} />
      <Unit value={time.minutes} label="min"   index={2} />
      <Unit value={time.seconds} label="sec"   index={3} />
    </div>
  )
}
