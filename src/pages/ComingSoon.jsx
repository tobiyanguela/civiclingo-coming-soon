import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Countdown from '../components/Countdown'
import WaitlistForm from '../components/WaitlistForm'
import logoIcon from '../assets/logo-icon.png'
import './ComingSoon.css'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function ComingSoon() {
  const waitlistRef = useRef(null)

  return (
    <div className="cs-page">

      {/* ── Nav ── */}
      <motion.nav
        className="cs-nav"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="cs-logo">
          <img src={logoIcon} alt="CivicLingo" className="cs-logo-img" />
          <span className="cs-logo-name">CivicLingo</span>
        </div>
      </motion.nav>

      {/* ── Two-column layout ── */}
      <div className="cs-grid">

        {/* LEFT — copy & CTAs */}
        <motion.div
          className="cs-left"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div className="cs-badge" variants={item}>
            <span className="cs-badge-dot" />
            Civic app · Coming July 2026
          </motion.div>

          <motion.h1 className="cs-title" variants={item}>
            Civic education,<br /><em>reimagined.</em>
          </motion.h1>

          <motion.p className="cs-subtitle" variants={item}>
            The app built to help the next generation lead civic change.
          </motion.p>

          <motion.div className="cs-ctas" variants={item}>
            <motion.button
              className="cta-primary"
              whileHover={{ scale: 1.04, boxShadow: '0 12px 32px rgba(124,58,237,0.5)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => waitlistRef.current?.querySelector('input')?.focus()}
            >
              Join the Waitlist
            </motion.button>
            <motion.div className="cs-store-row" variants={item}>
              <motion.button
                className="store-btn store-btn--disabled"
                disabled
                whileHover={{ scale: 1.03 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" opacity="0.75">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.42c1.42.07 2.4.83 3.22.83.95 0 2.7-.99 4.5-.84 1.53.1 2.9.7 3.75 1.9-3.4 2.05-2.84 6.53.53 7.97zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="store-btn-text">
                  <span className="store-btn-sub">Coming soon</span>
                  <span className="store-btn-main">App Store</span>
                </div>
              </motion.button>
              <motion.button
                className="store-btn store-btn--disabled"
                disabled
                whileHover={{ scale: 1.03 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" opacity="0.75">
                  <path d="M3.18 23.76c.3.17.64.2.96.07l11.34-6.55-2.4-2.4-9.9 8.88zm-1.1-19.7C2.03 4.3 2 4.6 2 4.9v14.2c0 .3.03.6.08.86l9.96-9.96-9.96-9.94zM20.12 10.3l-2.3-1.33-2.7 2.7 2.7 2.7 2.33-1.35c.67-.38.67-1.33-.03-1.72zM4.14.17L15.48 6.72 13.08 9.12 3.18.24C3.5.1 3.84.04 4.14.17z"/>
                </svg>
                <div className="store-btn-text">
                  <span className="store-btn-sub">Coming soon</span>
                  <span className="store-btn-main">Google Play</span>
                </div>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT — countdown & waitlist */}
        <motion.div
          className="cs-right"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="cs-right-card">
            <p className="cs-launches">Launching in</p>
            <Countdown />
            <div className="cs-right-divider" />
            <p className="cs-waitlist-label">Get early access</p>
            <div ref={waitlistRef}>
              <WaitlistForm />
            </div>
          </div>
        </motion.div>

      </div>

      {/* ── Footer ── */}
      <footer className="cs-footer">
        <div className="cs-footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <span>·</span>
          <Link to="/terms">Terms of Use</Link>
        </div>
        <p className="cs-copy">© {new Date().getFullYear()} CivicLingo · Civics Unplugged. All rights reserved.</p>
      </footer>
    </div>
  )
}
