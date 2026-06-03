import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import './HamburgerMenu.css'

const links = [
  { href: '#how',        label: 'How it works' },
  { href: '#features',   label: 'Features' },
  { href: '#challenges', label: 'Challenges' },
]

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  const close = () => setOpen(false)

  const drawerAnim = reduce
    ? { initial: {}, animate: {}, exit: {} }
    : {
        initial: { opacity: 0, y: -12 },
        animate: { opacity: 1, y: 0 },
        exit:    { opacity: 0, y: -8 },
        transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
      }

  const itemAnim = (i) => reduce
    ? {}
    : {
        initial: { opacity: 0, x: -16 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.25, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
      }

  return (
    <div className="hb-wrap">
      {/* Hamburger button */}
      <button
        className={`hb-btn${open ? ' hb-btn--open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        <span /><span /><span />
      </button>

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="hb-backdrop"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {open && (
          <motion.nav
            className="hb-drawer"
            {...drawerAnim}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                className="hb-link"
                onClick={close}
                {...itemAnim(i)}
              >
                {l.label}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 8h8M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}
