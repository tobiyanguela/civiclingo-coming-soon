import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

export default function WaitlistForm() {
  const [email, setEmail]       = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError]       = useState('')
  const reduce = useReducedMotion()

  function handleSubmit(e) {
    e.preventDefault()
    if (!email.includes('@')) { setError('Please enter a valid email.'); return }
    setError('')
    setSubmitted(true)
  }

  const thanksAnim = reduce
    ? {}
    : { initial: { opacity: 0, scale: 0.92 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.35 } }

  const formAnim = reduce
    ? {}
    : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4 } }

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.p key="thanks" className="waitlist-thanks" {...thanksAnim}>
          You're on the list! We'll reach out soon. 🎉
        </motion.p>
      ) : (
        <motion.form key="form" className="waitlist-form" onSubmit={handleSubmit} {...formAnim}>
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
