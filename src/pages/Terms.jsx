import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Legal.css'

export default function Terms() {
  return (
    <motion.div
      className="legal-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="legal-card">
        <Link to="/" className="legal-back">← Back</Link>
        <h1>Terms of Use</h1>
        <p className="legal-date">Last updated: June 2025</p>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing this website or joining the CivicLingo waitlist, you agree to these Terms of Use. If you do not agree, please do not use this site.</p>
        </section>

        <section>
          <h2>2. Use of the Site</h2>
          <p>This website is provided for informational purposes about the CivicLingo product. You agree not to misuse this site or attempt to access it in unauthorized ways.</p>
        </section>

        <section>
          <h2>3. Waitlist</h2>
          <p>Joining the waitlist does not guarantee access to the product or any specific features. We reserve the right to manage waitlist access at our discretion.</p>
        </section>

        <section>
          <h2>4. Intellectual Property</h2>
          <p>All content on this site, including the CivicLingo name, logo, and design, is the property of CivicLingo and may not be used without written permission.</p>
        </section>

        <section>
          <h2>5. Disclaimer</h2>
          <p>This site is provided "as is" without warranties of any kind. We do not guarantee that the site will be available at all times or free from errors.</p>
        </section>

        <section>
          <h2>6. Limitation of Liability</h2>
          <p>CivicLingo is not liable for any damages arising from your use of this website or reliance on information presented here.</p>
        </section>

        <section>
          <h2>7. Changes to Terms</h2>
          <p>We may update these terms at any time. Continued use of the site after changes constitutes your acceptance of the new terms.</p>
        </section>

        <section>
          <h2>8. Contact</h2>
          <p>Questions about these terms? Reach us at <a href="mailto:hello@civiclingo.com">hello@civiclingo.com</a>.</p>
        </section>
      </div>
    </motion.div>
  )
}
