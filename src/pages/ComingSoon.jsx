import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Countdown from '../components/Countdown'
import WaitlistForm from '../components/WaitlistForm'
import logoIcon from '../assets/logo-icon.png'
import './ComingSoon.css'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

export default function ComingSoon() {
  return (
    <div className="cs-page">
      <div className="cs-card">
        <motion.div className="cs-logo" {...fade(0)}>
          <img src={logoIcon} alt="CivicLingo icon" className="cs-logo-img" />
          <span className="cs-logo-name">CivicLingo</span>
        </motion.div>

        <motion.h1 className="cs-title" {...fade(0.15)}>
          Something exciting<br />is coming soon
        </motion.h1>

        <motion.p className="cs-subtitle" {...fade(0.25)}>
          We're building a better way to understand civic topics.<br />
          Early July 2026.
        </motion.p>

        <motion.div {...fade(0.35)}>
          <Countdown />
        </motion.div>

        <motion.div className="cs-store-btns" {...fade(0.4)}>
          <button className="store-btn store-btn--disabled" disabled>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.42c1.42.07 2.4.83 3.22.83.95 0 2.7-.99 4.5-.84 1.53.1 2.9.7 3.75 1.9-3.4 2.05-2.84 6.53.53 7.97zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            <div className="store-btn-text">
              <span className="store-btn-sub">Coming soon on</span>
              <span className="store-btn-main">App Store</span>
            </div>
          </button>
          <button className="store-btn store-btn--disabled" disabled>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76c.3.17.64.2.96.07l11.34-6.55-2.4-2.4-9.9 8.88zm-1.1-19.7C2.03 4.3 2 4.6 2 4.9v14.2c0 .3.03.6.08.86l9.96-9.96-9.96-9.94zM20.12 10.3l-2.3-1.33-2.7 2.7 2.7 2.7 2.33-1.35c.67-.38.67-1.33-.03-1.72zM4.14.17L15.48 6.72 13.08 9.12 3.18.24C3.5.1 3.84.04 4.14.17z"/>
            </svg>
            <div className="store-btn-text">
              <span className="store-btn-sub">Coming soon on</span>
              <span className="store-btn-main">Google Play</span>
            </div>
          </button>
        </motion.div>

        <motion.p className="cs-waitlist-label" {...fade(0.5)}>
          Get notified when we launch — join the waitlist.
        </motion.p>

        <WaitlistForm />
      </div>

      <footer className="cs-footer">
        <Link to="/privacy">Privacy Policy</Link>
        <span>·</span>
        <Link to="/terms">Terms of Use</Link>
        <p className="cs-copy">© {new Date().getFullYear()} CivicLingo. All rights reserved.</p>
      </footer>
    </div>
  )
}
