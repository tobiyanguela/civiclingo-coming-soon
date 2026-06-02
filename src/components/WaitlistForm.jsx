import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!email.includes('@')) {
      setError('Please enter a valid email.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.p
          key="thanks"
          className="waitlist-thanks"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          You're on the list! We'll reach out soon.
        </motion.p>
      ) : (
        <motion.form
          key="form"
          className="waitlist-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="waitlist-input"
            required
          />
          <button type="submit" className="waitlist-btn">Join Waitlist</button>
          {error && <p className="waitlist-error">{error}</p>}
        </motion.form>
      )}
    </AnimatePresence>
  )
}
