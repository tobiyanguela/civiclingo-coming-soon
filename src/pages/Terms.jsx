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
        <h1>Terms & Conditions</h1>
        <p className="legal-date">Effective Date: June 1, 2026 · Last Updated: June 1, 2026</p>

        <div className="legal-badges">
          <span>Ages 15+</span>
          <span>AI coaching tool only</span>
          <span>Not professional advice</span>
          <span>U.S.-based service</span>
        </div>

        <p className="legal-summary">
          <strong>Plain English Summary:</strong> These Terms govern your use of CivicLingo, a civic education and leadership platform for young people ages 15–22. By creating an account you agree to use the platform responsibly, respect other users, and understand that our AI coach is a personal development tool — not a licensed therapist, doctor, or legal advisor. Users ages 15–17 are considered minors and receive additional protections.
        </p>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and Civics Unplugged and The Motiff Group Inc. (collectively "CivicLingo," "we," "us," or "our"), governing your access to and use of the CivicLingo platform, including our mobile application (iOS and Android), web application, and all related services and content.</p>
          <p>By creating an account or using the platform in any way, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree, you must not access or use the platform.</p>
        </section>

        <section>
          <h2>2. Eligibility Requirements</h2>
          <p>To use CivicLingo, you must meet all of the following requirements:</p>
          <ul>
            <li>You must be at least 15 years of age.</li>
            <li>Users ages 15–17 must have parental or guardian awareness. We strongly recommend parental consent and provide a parental notification flow during onboarding for minors.</li>
            <li>You must be a human individual. Accounts created by bots or automated tools are prohibited.</li>
            <li>You must have the legal capacity to use this platform under applicable law.</li>
            <li>You must not be prohibited from using the platform under applicable U.S. law.</li>
            <li>You must not have had a previous account terminated for violation of these Terms.</li>
          </ul>
          <p>CivicLingo is designed for young civic leaders — college students, recent graduates, and young adults ages 15–22 who are building their civic identity and leadership skills.</p>
        </section>

        <section>
          <h2>3. User Accounts</h2>
          <h3>3.1 Account Creation</h3>
          <p>To access most features, you must create an account by providing accurate, current, and complete information. You agree to keep your account information up to date.</p>
          <h3>3.2 Account Security</h3>
          <p>You are solely responsible for maintaining the confidentiality of your account credentials and for all activity under your account. Notify us immediately at <a href="mailto:contact@civiclingo.com">contact@civiclingo.com</a> if you suspect unauthorized access.</p>
          <h3>3.3 One Account Per User</h3>
          <p>Each user may maintain only one active account. Creating multiple accounts to circumvent restrictions is prohibited.</p>
          <h3>3.4 Account Suspension and Termination</h3>
          <p>We reserve the right to suspend or permanently terminate any account at our discretion, with or without notice, for violations of these Terms or conduct we determine to be harmful to the community.</p>
        </section>

        <section>
          <h2>4. Authentication Methods</h2>
          <p>CivicLingo supports Email/Password, Sign in with Apple, and Sign in with Google. By using third-party authentication, you authorize those providers to share your name and email with us. We do not receive or store your Apple ID or Google account password.</p>
        </section>

        <section>
          <h2>5. User Responsibilities</h2>
          <ul>
            <li>Provide accurate and truthful information during registration and throughout your use.</li>
            <li>Use the platform only for lawful purposes and in accordance with these Terms.</li>
            <li>Respect the rights, dignity, and privacy of other users.</li>
            <li>Not misrepresent your identity, credentials, or affiliation.</li>
            <li>Take responsibility for all content you submit or share on the platform.</li>
            <li>Comply with all applicable local, state, and federal laws.</li>
          </ul>
        </section>

        <section>
          <h2>6. Community Guidelines</h2>
          <h3>6.1 Respect and Inclusion</h3>
          <p>Treat all community members with dignity and respect, regardless of background, identity, political views, or beliefs. Disagreement is welcome; disrespect is not.</p>
          <h3>6.2 Constructive Engagement</h3>
          <p>Participate in challenges, debates, and discussions in good faith. Contributions should be thoughtful, relevant, and aimed at advancing civic learning.</p>
          <h3>6.3 Authenticity</h3>
          <p>Be genuine in your interactions. Do not impersonate other users, public figures, or platform staff. Do not submit AI-generated content as your own personal reflection where authentic responses are required.</p>
          <h3>6.4 Privacy of Others</h3>
          <p>Do not share personally identifiable information about other users without their consent. Do not screenshot or republish private conversations outside the platform.</p>
          <h3>6.5 Reporting</h3>
          <p>Report violations through the in-app reporting feature or by emailing <a href="mailto:safety@civiclingo.com">safety@civiclingo.com</a>. We respond to all reports within 48 hours.</p>
        </section>

        <section>
          <h2>7. Prohibited Conduct</h2>
          <ul>
            <li>Posting content that is harassing, threatening, defamatory, hateful, or discriminatory.</li>
            <li>Inciting or promoting violence or harm to others.</li>
            <li>Sharing content that infringes on the intellectual property rights of any third party.</li>
            <li>Attempting to gain unauthorized access to any part of the platform.</li>
            <li>Using bots, scrapers, or automated tools to interact with the platform.</li>
            <li>Using the platform for commercial solicitation, spam, or unauthorized advertising.</li>
            <li>Collecting personal information of other users without their consent.</li>
            <li>Misusing AI coaching features to generate harmful, misleading, or illegal content.</li>
            <li>Creating multiple accounts to circumvent bans or subscription limitations.</li>
          </ul>
        </section>

        <section>
          <h2>8. AI Coach Disclaimer</h2>
          <p><strong>Important — Please Read Carefully.</strong> The AI coaching features within CivicLingo are designed exclusively as personal civic development tools. They do not constitute professional advice of any kind.</p>
          <h3>8.1 Not a Substitute for Professional Services</h3>
          <p>The AI Coach (Nova) is an automated software tool. It is NOT a licensed therapist, medical doctor, licensed attorney, or crisis intervention service. If you are experiencing a mental health crisis or emergency, please contact appropriate emergency services or licensed professionals immediately.</p>
          <h3>8.2 Limitations of AI-Generated Content</h3>
          <p>AI-generated responses may be inaccurate, incomplete, or outdated. You should exercise independent judgment when acting on any AI-provided guidance.</p>
          <h3>8.3 No Professional Relationship</h3>
          <p>Use of the AI Coach does not create any therapist-patient, attorney-client, or other professional relationship between you and CivicLingo.</p>
          <h3>8.4 Data Use in AI</h3>
          <p>Your interactions with the AI Coach may be used in anonymized and aggregated form to improve the AI models. See our Privacy Policy for full details.</p>
        </section>

        <section>
          <h2>9. User Generated Content</h2>
          <h3>9.1 Ownership</h3>
          <p>You retain ownership of all original content you create and submit to the platform. By submitting content, you grant CivicLingo a non-exclusive, worldwide, royalty-free license to use and display such content solely for the purposes of operating and improving the platform.</p>
          <h3>9.2 Content Standards</h3>
          <p>All user content must comply with these Terms. You represent that you own or have the right to submit the content and that it does not infringe any third party's rights.</p>
          <h3>9.3 Content Moderation</h3>
          <p>We reserve the right to review, remove, or restrict any content that violates these Terms. Content involving minors receives enhanced moderation.</p>
        </section>

        <section>
          <h2>10. Intellectual Property</h2>
          <p>The platform and all its content — including software, text, graphics, logos, AI models, challenge content, and overall design — are owned by Civics Unplugged, The Motiff Group Inc., or their licensors and are protected by applicable intellectual property laws.</p>
          <p>We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the platform solely for your personal, non-commercial use. This license does not permit reproduction, distribution, or modification without written permission.</p>
        </section>

        <section>
          <h2>11. Subscriptions and Payments</h2>
          <p>CivicLingo may offer free and paid subscription tiers. By subscribing to a paid plan, you authorize us to charge your designated payment method on a recurring basis. All fees are in U.S. dollars. We will provide at least 30 days' notice of any price changes. Payments are processed through Apple App Store, Google Play, or Stripe.</p>
        </section>

        <section>
          <h2>12. Free Trials</h2>
          <p>Free trials are limited to one per user account. At the end of the trial period, your account will automatically convert to a paid subscription unless you cancel before the trial expires.</p>
        </section>

        <section>
          <h2>13. Cancellation Policy</h2>
          <p>You may cancel your subscription at any time through your account settings or by contacting support. Cancellations take effect at the end of the current billing period. If you subscribed through the App Store or Google Play, cancellation must be managed through your device's subscription settings.</p>
        </section>

        <section>
          <h2>14. Refund Policy</h2>
          <p>All subscription fees are generally non-refundable except where required by applicable law. For direct purchase billing errors, contact <a href="mailto:billing@civiclingo.com">billing@civiclingo.com</a> within 14 days. We review refund requests at our discretion.</p>
        </section>

        <section>
          <h2>15. Data Ownership</h2>
          <p>You retain ownership of your personal data and content. We do not sell your personal data to third parties. You may request a copy of your data or deletion of your account by contacting <a href="mailto:privacy@civiclingo.com">privacy@civiclingo.com</a>. Deletion requests are processed within 30 days.</p>
        </section>

        <section>
          <h2>16. Third-Party Services</h2>
          <p>The platform may integrate with third-party services including authentication providers (Apple, Google), analytics platforms, and cloud infrastructure providers. We are not responsible for the content, privacy practices, or terms of any third-party services.</p>
        </section>

        <section>
          <h2>17. Availability of Service</h2>
          <p>We strive to maintain consistent platform availability but do not guarantee uninterrupted access. The platform may be temporarily unavailable due to maintenance, technical issues, or circumstances beyond our control.</p>
        </section>

        <section>
          <h2>18. Limitation of Liability</h2>
          <p>To the maximum extent permitted by applicable law, CivicLingo, Civics Unplugged, The Motiff Group Inc., and their respective officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including decisions made based on AI-generated content or any interruption of the platform.</p>
          <p>Our total aggregate liability for all claims shall not exceed the greater of (a) the total amount you paid us in the 12 months preceding the claim, or (b) $100 USD.</p>
        </section>

        <section>
          <h2>19. Indemnification</h2>
          <p>You agree to defend, indemnify, and hold harmless CivicLingo and its affiliates from and against any claims, liabilities, damages, losses, and expenses arising out of your use of the platform, your user content, or your violation of these Terms.</p>
        </section>

        <section>
          <h2>20. Dispute Resolution</h2>
          <h3>20.1 Informal Resolution</h3>
          <p>Before initiating any formal dispute, contact us at <a href="mailto:legal@civiclingo.com">legal@civiclingo.com</a> and give us 30 days to resolve the issue informally.</p>
          <h3>20.2 Binding Arbitration</h3>
          <p>Unresolved disputes will be settled through binding individual arbitration under the rules of the American Arbitration Association (AAA) in the United States.</p>
          <h3>20.3 Class Action Waiver</h3>
          <p>You and CivicLingo waive the right to bring or participate in any class action lawsuit. All disputes must be resolved on an individual basis.</p>
        </section>

        <section>
          <h2>21. Governing Law</h2>
          <p>These Terms are governed by the laws of the United States, without regard to conflict of law provisions.</p>
        </section>

        <section>
          <h2>22. Termination</h2>
          <p>You may terminate your account at any time through app settings or by contacting <a href="mailto:contact@civiclingo.com">contact@civiclingo.com</a>. We may suspend or terminate your account immediately without notice if you violate these Terms or pose a risk to other users. Upon termination, all licenses granted to you cease immediately.</p>
        </section>

        <section>
          <h2>23. Contact Information</h2>
          <div className="legal-table">
            <table>
              <tbody>
                <tr><td>General inquiries</td><td><a href="mailto:contact@civiclingo.com">contact@civiclingo.com</a></td></tr>
                <tr><td>Privacy & data requests</td><td><a href="mailto:privacy@civiclingo.com">privacy@civiclingo.com</a></td></tr>
                <tr><td>Safety & abuse reports</td><td><a href="mailto:safety@civiclingo.com">safety@civiclingo.com</a></td></tr>
                <tr><td>Legal & disputes</td><td><a href="mailto:legal@civiclingo.com">legal@civiclingo.com</a></td></tr>
                <tr><td>Operated by</td><td>Civics Unplugged · 501(c)(3) nonprofit · United States</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>24. Updates to Terms</h2>
          <p>We reserve the right to modify these Terms at any time. For material changes, we will notify you via email and/or in-app notification at least 14 days before changes take effect. Your continued use after that date constitutes acceptance.</p>
        </section>
      </div>
    </motion.div>
  )
}
