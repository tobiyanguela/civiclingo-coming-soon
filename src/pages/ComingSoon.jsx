import { useRef, useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import WaitlistForm from '../components/WaitlistForm'
import HamburgerMenu from '../components/HamburgerMenu'
import logoIcon from '../assets/logo-icon.png'
import './ComingSoon.css'

/* ── animation helpers ─────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

/* ── Phone Mockup ──────────────────────────────────── */
function PhoneMockup() {
  return (
    <div className="phone-wrap">
      <div className="phone-outer">
        <div className="phone-notch" />
        <div className="phone-screen">
          {/* Status bar */}
          <div className="phone-bar">
            <span>9:41</span><span>●●●</span>
          </div>
          {/* Greeting */}
          <div className="phone-greeting">
            Good morning, <span>Maya</span> 👋
          </div>
          {/* XP card */}
          <div className="phone-xp-card">
            <div className="phone-xp-top">
              <div>
                <div className="phone-level">⚡ The Builder</div>
                <div className="phone-xp-num">1,840 <span>XP</span></div>
              </div>
              <div className="phone-lvl-badge">Lv 5</div>
            </div>
            <div className="phone-progress-bar">
              <div className="phone-progress-fill" style={{ width: '62%' }} />
            </div>
            <div className="phone-progress-label">360 XP to Level 6, Civic Builder</div>
          </div>
          {/* Challenge */}
          <div className="phone-challenge">
            <div className="phone-chal-tag">Today's Challenge · Environment</div>
            <div className="phone-chal-title">How does a carbon tax work — and who actually pays?</div>
            <span className="phone-chal-xp">+40 XP</span>
          </div>
          {/* Coach */}
          <div className="phone-coach">
            <div className="phone-coach-label">Nova · Your civic coach</div>
            <div className="phone-coach-text">"You mentioned climate policy this week — this challenge connects directly to your goal."</div>
          </div>
          {/* Badges */}
          <div className="phone-badge-row">
            {[['🔥','14-day streak'],['🌍','Action Taker'],['📚','Researcher']].map(([icon, name]) => (
              <div className="phone-badge" key={name}>
                <span>{icon}</span>
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Float chips */}
      <div className="phone-float float-1">✅ Goal completed! +50 XP</div>
      <div className="phone-float float-2">🗳️ New civic read available</div>
    </div>
  )
}

/* ── Main page ─────────────────────────────────────── */
export default function ComingSoon() {
  const waitlistRef = useRef(null)
  const reduce = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navAnim   = reduce ? {} : { initial: { opacity: 0, y: -16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } }
  const heroLeft  = reduce ? {} : { initial: { opacity: 0, x: -32 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } }
  const heroRight = reduce ? {} : { initial: { opacity: 0, x: 32  }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.7, delay: 0.2, ease: [0.22,1,0.36,1] } }

  return (
    <div className="cs-page">

      {/* ── NAV ── */}
      <motion.nav className={`cs-nav${scrolled ? ' cs-nav--scrolled' : ''}`} {...navAnim}>
        <div className="cs-nav-inner">
          <div className="cs-logo">
            <img src={logoIcon} alt="CivicLingo" className="cs-logo-img" loading="lazy" />
            <span className="cs-logo-name">CivicLingo</span>
          </div>
          <div className="cs-nav-links">
            <a href="#how">How it works</a>
            <a href="#features">Features</a>
            <a href="#challenges">Challenges</a>
          </div>
          <HamburgerMenu />
        </div>
      </motion.nav>

      {/* ── HERO ── */}
      <section className="cs-hero">
        <motion.div className="cs-hero-left" {...heroLeft}>
          <div className="cs-badge">
            <span className="cs-badge-dot" />
            Civic app · Coming July 2026
          </div>
          <h1 className="cs-title">
            Civic education,<br /><em>reimagined.</em>
          </h1>
          <p className="cs-subtitle">
            The app built to help civic leaders ages 15 and up understand, engage with, and lead in civic life, one daily challenge at a time.
          </p>
          <div className="cs-ctas">
            <motion.button
              className="cta-primary"
              whileHover={reduce ? {} : { scale: 1.04, boxShadow: '0 12px 32px rgba(124,58,237,0.5)' }}
              whileTap={reduce ? {} : { scale: 0.97 }}
              onClick={() => waitlistRef.current?.querySelector('input')?.focus()}
            >
              Join the Waitlist
            </motion.button>
            <motion.a
              className="cta-secondary"
              href="#how"
              whileHover={reduce ? {} : { borderColor: 'rgba(255,255,255,0.5)' }}
            >
              See how it works
            </motion.a>
          </div>
          <div className="cs-trust">
            <div className="cs-trust-dots">
              {['MA','JR','SL','KP'].map(i => <span key={i} className="trust-dot">{i}</span>)}
            </div>
            <span>Joined by young civic leaders across 32 states</span>
          </div>
        </motion.div>

        <motion.div className="cs-hero-right" {...heroRight}>
          <PhoneMockup />
        </motion.div>
      </section>

      {/* ── LAUNCH DATE + WAITLIST STRIP ── */}
      <motion.section className="cs-strip" {...fadeUp(0)}>
        <div className="cs-strip-inner">
          <div className="cs-strip-left">
            <p className="cs-launches">Launching</p>
            <div className="cs-launch-date">July 2026</div>
            <p className="cs-launch-blurb">Join a growing community of young civic leaders building toward launch.</p>
          </div>
          <div className="cs-strip-divider" />
          <div className="cs-strip-right" ref={waitlistRef}>
            <p className="cs-waitlist-label">Get early access — join the waitlist.</p>
            <WaitlistForm />
          </div>
        </div>
      </motion.section>

      {/* ── HOW IT WORKS ── */}
      <section className="cs-section" id="how">
        <motion.div className="cs-section-header" {...fadeUp(0)}>
          <span className="cs-eyebrow">How it works</span>
          <h2 className="cs-section-title">Three minutes a day.<br /><em>Real civic growth.</em></h2>
          <p className="cs-section-sub">Designed around the same behavioral science that makes Duolingo work, built entirely for civic life.</p>
        </motion.div>

        <motion.div
          className="cs-steps-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {[
            { num: '01', icon: '🎯', title: 'Take the Civic Identity Assessment', body: 'Start by figuring out how you actually engage with civic life. Discover your archetype, Operator, Creative, Builder, Analyst, or Connector, and unlock a personalized path built around who you are.' },
            { num: '02', icon: '⚡', title: 'Do a daily challenge', body: 'Every day, your AI coach surfaces one challenge matched to your interests and goals. Quiz, vote on real policy, write a reflection, or take a real-world action. Earn XP and level up.' },
            { num: '03', icon: '🌍', title: 'Take real civic action', body: 'Your coach connects what you learn to the real world, setting weekly goals, checking in on your progress, and celebrating when you take actual civic action outside the app.' },
          ].map((step) => (
            <motion.div
              key={step.num}
              className="cs-step-card"
              variants={staggerItem}
              whileHover={reduce ? {} : { y: -4, borderColor: 'rgba(167,139,250,0.3)', transition: { duration: 0.2 } }}
            >
              <span className="step-num">{step.num}</span>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-body">{step.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── FEATURES ── */}
      <section className="cs-section cs-section--alt" id="features">
        <motion.div className="cs-section-header" {...fadeUp(0)}>
          <span className="cs-eyebrow">Features</span>
          <h2 className="cs-section-title">Everything you need<br /><em>to grow as a civic leader.</em></h2>
          <p className="cs-section-sub">Built on Civics Unplugged's proven programming — now in your pocket.</p>
        </motion.div>

        <motion.div
          className="cs-features-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Featured card */}
          <motion.div className="cs-feature-card cs-feature-card--featured" variants={staggerItem}>
            <div className="cs-feature-featured-body">
              <span className="cs-eyebrow">AI Civic Coach</span>
              <h3 className="cs-feature-featured-title">A coach who knows where you are — and where you are going.</h3>
              <p className="cs-feature-featured-text">Your AI coach adapts to your archetype, tracks your weekly goals, checks in mid-week, and runs a reflection with you every Sunday. Not a chatbot. A personalized civic development partner.</p>
              <ul className="cs-feature-list">
                {[
                  'Sets actionable weekly civic goals with you every Monday',
                  'References your obstacles when you get stuck mid-week',
                  'Suggests one relevant challenge when your goal is stalled',
                  'Carries your reflections forward into the next week',
                ].map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="cs-feature-visual">
              <div className="archetype-label">Your civic archetype</div>
              <div className="archetype-row">
                {['The Operator','The Creative','The Builder','The Analyst','The Connector'].map((a, i) => (
                  <span key={a} className={`archetype-tag ${i===2 ? 'active' : ''}`}>{a}</span>
                ))}
              </div>
              <div className="coach-bubble">
                <div className="coach-bubble-label">Your coach, Monday</div>
                <p className="coach-bubble-text">"New week. What's one civic thing on your mind right now — something you read, something that frustrated you, or something you want to understand?"</p>
              </div>
            </div>
          </motion.div>

          {/* 4 smaller cards */}
          {[
            { icon: '📈', title: '10 levels of civic progression', body: 'Move from Civic Newcomer to Civic Champion through 10 named levels, each representing a real stage of civic development. XP is earned through challenges, goals, coaching, and verified real-world actions.' },
            { icon: '🏆', title: '27 badges, including Legendary', body: 'Earn badges for streaks, debate wins, real-world actions, and completing archetype-specific challenges. Legendary badges require coach verification. They cannot be gamed.' },
            { icon: '👥', title: 'Civic Squads & peer debates', body: 'Form a squad of 3–5 friends, tackle challenges together, and share a collective weekly goal. Peer debates match you with another user to argue opposing civic positions.' },
            { icon: '🔒', title: 'Safe, private, non-partisan', body: 'COPPA-compliant. No ads. Data never sold. CivicLingo teaches how to think about civic issues, not what to think. Non-partisan by design.' },
          ].map(f => (
            <motion.div
              key={f.title}
              className="cs-feature-card"
              variants={staggerItem}
              whileHover={reduce ? {} : { y: -3, borderColor: 'rgba(167,139,250,0.25)', transition: { duration: 0.2 } }}
            >
              <div className="cs-feature-icon">{f.icon}</div>
              <h3 className="cs-feature-title">{f.title}</h3>
              <p className="cs-feature-body">{f.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── SAMPLE CHALLENGES ── */}
      <section className="cs-section" id="challenges">
        <motion.div className="cs-section-header" {...fadeUp(0)}>
          <span className="cs-eyebrow">Sample challenges</span>
          <h2 className="cs-section-title">Civic development is<br /><em>a learnable skill.</em></h2>
          <p className="cs-section-sub">75 challenges across three tiers — from civic basics to real-world leadership. Every challenge is matched to your interests.</p>
        </motion.div>

        <motion.div
          className="cs-challenges-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {[
            { type: 'quiz',    label: 'Quiz',    title: 'Who has the power to change school lunch policy in your district?',                               xp: '+15 XP', tier: 'Tier 1 · Local government' },
            { type: 'poll',    label: 'Poll',    title: 'Which approach should cities prioritize to address homelessness?',                                         xp: '+30 XP', tier: 'Tier 2 · Housing policy' },
            { type: 'writing', label: 'Writing', title: 'Observe something in your community that seems unfair. Describe exactly what you see.',                    xp: '+20 XP', tier: 'Tier 1 · Civic awareness' },
            { type: 'quiz',    label: 'Quiz',    title: 'What does it mean when the Supreme Court denies certiorari — and why does it matter?',                     xp: '+40 XP', tier: 'Tier 2 · Judicial process' },
            { type: 'writing', label: 'Writing', title: 'Write your personal civic mission statement — what you care about and how you plan to make a difference.', xp: '+45 XP', tier: 'Tier 2 · Civic identity' },
            { type: 'poll',    label: 'Poll',    title: 'Real change most often happens through elections, organizing, courts, or storytelling. Which one?',     xp: '+10 XP', tier: 'Tier 1 · Civic strategy' },
          ].map(c => (
            <motion.div
              key={c.title}
              className="cs-challenge-card"
              variants={staggerItem}
              whileHover={reduce ? {} : { y: -3, borderColor: 'rgba(167,139,250,0.2)', transition: { duration: 0.18 } }}
            >
              <span className={`cs-challenge-type cs-challenge-type--${c.type}`}>{c.label}</span>
              <p className="cs-challenge-title">{c.title}</p>
              <div className="cs-challenge-bottom">
                <span className="cs-challenge-xp">{c.xp}</span>
                <span className="cs-challenge-tier">{c.tier}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── STORE CTAs ── */}
      <motion.section className="cs-store-section" {...fadeUp(0)}>
        <p className="cs-store-label">Available soon on</p>
        <div className="cs-store-btns">
          {[
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.42c1.42.07 2.4.83 3.22.83.95 0 2.7-.99 4.5-.84 1.53.1 2.9.7 3.75 1.9-3.4 2.05-2.84 6.53.53 7.97zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>, main: 'App Store' },
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.3.17.64.2.96.07l11.34-6.55-2.4-2.4-9.9 8.88zm-1.1-19.7C2.03 4.3 2 4.6 2 4.9v14.2c0 .3.03.6.08.86l9.96-9.96-9.96-9.94zM20.12 10.3l-2.3-1.33-2.7 2.7 2.7 2.7 2.33-1.35c.67-.38.67-1.33-.03-1.72zM4.14.17L15.48 6.72 13.08 9.12 3.18.24C3.5.1 3.84.04 4.14.17z"/></svg>, main: 'Google Play' },
          ].map(s => (
            <motion.button
              key={s.main}
              className="store-btn store-btn--disabled"
              disabled
              whileHover={reduce ? {} : { scale: 1.03 }}
            >
              {s.icon}
              <div className="store-btn-text">
                <span className="store-btn-sub">Coming soon</span>
                <span className="store-btn-main">{s.main}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* ── PARTNERS ── */}
      <motion.section className="cs-partners" {...fadeUp(0)}>
        <p className="cs-partners-label">Backed by</p>
        <div className="cs-partners-row">
          <div className="cs-partner-logo">Civics Unplugged</div>
          <div className="cs-partner-logo">BTP</div>
        </div>
      </motion.section>

      {/* ── FOOTER ── */}
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
