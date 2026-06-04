import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Legal.css'

export default function PrivacyPolicy() {
  return (
    <motion.div
      className="legal-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="legal-card">
        <Link to="/" className="legal-back">← Back</Link>
        <h1>Privacy Policy</h1>
        <p className="legal-date">Effective Date: June 1, 2026 · Last Updated: June 1, 2026</p>

        <div className="legal-badges">
          <span>No data sales</span>
          <span>No ads</span>
          <span>Ages 15+</span>
          <span>Parental controls</span>
          <span>Encrypted in transit</span>
        </div>

        <p className="legal-summary">
          <strong>Plain English Summary:</strong> CivicLingo is a U.S.-based civic education app for civic leaders ages 15 and older, operated by Civics Unplugged, a 501(c)(3) nonprofit. We collect only what's necessary to run the app — your name, email, and app activity. We do not sell your data, show ads, or share your information with third parties for commercial purposes. Users ages 15–17 receive additional protections: restricted peer interactions, non-discoverable profiles, enhanced moderation, and full parental control rights. These policies are published in preparation for the CivicLingo app launch and describe our planned privacy practices.
        </p>

        <section>
          <h2>1. Who We Are</h2>
          <p>CivicLingo is a civic education and development platform operated by Civics Unplugged, a nonprofit organization dedicated to empowering the next generation of civic leaders. CivicLingo is available as a mobile application on Android and iOS.</p>
          <p>"We," "us," and "our" refer to Civics Unplugged and the CivicLingo platform. "You" refers to any person who creates an account or uses the CivicLingo app.</p>
        </section>

        <section>
          <h2>2. What Information We Collect</h2>
          <h3>2.1 Information You Provide Directly</h3>
          <ul>
            <li><strong>Account information:</strong> name, email address, and password when you register.</li>
            <li><strong>Profile information:</strong> age range, civic interests, archetype selection, and optional profile details.</li>
            <li><strong>Challenge responses:</strong> written responses, quiz answers, and poll votes submitted in-app.</li>
            <li><strong>AI Coach conversations:</strong> messages you send to Nova, our AI civic coach.</li>
            <li><strong>Authentication data:</strong> if you sign in with Apple or Google, we receive only your name and email. We do not receive your passwords or payment information.</li>
          </ul>
          <h3>2.2 Information Collected Automatically</h3>
          <ul>
            <li><strong>App activity:</strong> challenges completed, XP earned, badges unlocked, streak data, and levels reached.</li>
            <li><strong>Device information:</strong> device type, operating system version, and app version — for technical support.</li>
            <li><strong>Usage patterns:</strong> features used and session frequency — to improve the product experience.</li>
          </ul>
          <h3>2.3 Information We Do NOT Collect</h3>
          <div className="legal-table">
            <table>
              <thead><tr><th>Data Type</th><th>Collected?</th></tr></thead>
              <tbody>
                {[
                  ['Precise location / GPS data', 'No'],
                  ['Financial or payment information', 'No'],
                  ['Health or biometric data', 'No'],
                  ['Contacts or address book', 'No'],
                  ['Camera or microphone access', 'No'],
                  ['Social media profiles', 'No'],
                  ['Browsing history outside the app', 'No'],
                ].map(([type, val]) => (
                  <tr key={type}><td>{type}</td><td className="legal-no">{val}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect exclusively to operate and improve CivicLingo:</p>
          <ul>
            <li>To create and manage your account.</li>
            <li>To personalize your civic challenge path based on your interests and archetype.</li>
            <li>To power Smart Matches — connecting you with peers who share your civic goals.</li>
            <li>To train and improve Nova, our AI coach, using aggregated and anonymized conversation data.</li>
            <li>To calculate and display your XP, badges, streaks, and level progress.</li>
            <li>To send in-app notifications about your streak, new challenges, or match updates.</li>
            <li>To detect and prevent abuse, spam, or violations of our community guidelines.</li>
            <li>To comply with legal obligations.</li>
          </ul>
          <p>We do not use your data for advertising. CivicLingo is ad-free. Your data is never used to build advertising profiles or sold to data brokers.</p>
        </section>

        <section>
          <h2>4. Who We Share Data With</h2>
          <p>We do not sell, rent, or trade your personal information. We share data only in the following limited circumstances:</p>
          <h3>4.1 Service Providers</h3>
          <p>Trusted third-party service providers who help us operate the platform — including cloud hosting, database management, and AI infrastructure. These providers are contractually prohibited from using your data for any purpose other than providing services to CivicLingo.</p>
          <h3>4.2 Civics Unplugged</h3>
          <p>As the nonprofit operating CivicLingo, Civics Unplugged has access to aggregated, anonymized data to measure program impact and civic education outcomes. Individual user data is not shared in identifiable form.</p>
          <h3>4.3 Legal Requirements</h3>
          <p>We may disclose information if required by law, court order, or to protect the safety of our users or the public — including in cases involving potential harm to minors.</p>
          <h3>4.4 What We Never Do</h3>
          <ul>
            <li>Sell your personal data to third parties.</li>
            <li>Share your data with advertisers or marketing platforms.</li>
            <li>Transfer your data to governments or political organizations.</li>
            <li>Use your data to influence your political views.</li>
          </ul>
        </section>

        <section>
          <h2>5. Youth Safety & Minor Protections</h2>
          <p>Youth safety is a foundational design principle of CivicLingo. CivicLingo serves users aged 15 and older, including minors (15–17) and adults (18+). We apply differentiated protections based on age group.</p>
          <h3>5.1 Age Requirements & Age Gate</h3>
          <p>CivicLingo is available to users aged 15 and older. Users who indicate they are under 15 are not permitted to create an account and will not have their information retained. We do not knowingly collect personal information from anyone under 15.</p>
          <h3>5.2 Parental Awareness — Users Ages 15–17</h3>
          <p>CivicLingo strongly recommends parental awareness and consent for users in the 15–17 age group. We provide a dedicated parental notification flow during onboarding for users who identify as minors. Parents or guardians may contact us at any time to review, modify, or delete their child's account and data at <a href="mailto:privacy@civiclingo.com">privacy@civiclingo.com</a>.</p>
          <h3>5.3 Differentiated Protections by Age Group</h3>
          <div className="legal-table">
            <table>
              <thead><tr><th>Protection</th><th>Ages 15–17 (Minors)</th><th>Ages 18–22 (Adults)</th></tr></thead>
              <tbody>
                {[
                  ['Public profile visibility', 'Not discoverable publicly', 'Standard visibility settings'],
                  ['Peer interactions', 'AI-facilitated only, no open chat', 'Full peer features available'],
                  ['Content moderation', 'Enhanced automated + human review', 'Standard moderation'],
                  ['Data minimization', 'Strict — only what is necessary', 'Standard collection'],
                  ['Parental access', 'Parents can request full data review', 'Not applicable'],
                  ['AI coach access', 'Available with content guardrails', 'Full access'],
                ].map(([p, m, a]) => (
                  <tr key={p}><td>{p}</td><td>{m}</td><td>{a}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3>5.4 Minimum Age Commitment</h3>
          <p>CivicLingo's minimum age is 15. We do not knowingly collect information from users under 15, and we do not require more information than is reasonably necessary to participate. If you believe someone under 15 has created an account, please contact us immediately at <a href="mailto:safety@civiclingo.com">safety@civiclingo.com</a>.</p>
          <h3>5.5 Reporting Safety Concerns</h3>
          <p>If you encounter content or behavior that feels unsafe, report it within the app or by emailing <a href="mailto:safety@civiclingo.com">safety@civiclingo.com</a>. We respond to all safety reports within 48 hours, and to reports involving minors within 24 hours.</p>
        </section>

        <section>
          <h2>6. Parental Controls</h2>
          <p>For users ages 15–17, CivicLingo provides the following parental control rights. To exercise any of these rights, contact <a href="mailto:privacy@civiclingo.com">privacy@civiclingo.com</a> with subject "Parental Control Request" and proof of your relationship to the minor account holder. We respond within 5 business days.</p>
          <div className="legal-table">
            <table>
              <thead><tr><th>Parental Right</th><th>What It Means</th></tr></thead>
              <tbody>
                <tr><td><strong>Account review</strong></td><td>Request a full summary of your child's activity, challenges, and AI coach interactions.</td></tr>
                <tr><td><strong>Feature restriction</strong></td><td>Disable peer matching, AI coaching, or any specific platform feature for your child's account.</td></tr>
                <tr><td><strong>Data access</strong></td><td>Request a copy of all personal data collected about your child.</td></tr>
                <tr><td><strong>Data correction</strong></td><td>Request correction of inaccurate information in your child's account.</td></tr>
                <tr><td><strong>Account deletion</strong></td><td>Request immediate deletion of your child's account and all associated data.</td></tr>
                <tr><td><strong>Notification opt-in</strong></td><td>Receive notifications about your child's platform activity and any safety events.</td></tr>
              </tbody>
            </table>
          </div>
          <p>Automatic minor protections (no parental action required): non-discoverable profiles, AI-facilitated peer interactions only, enhanced content moderation, no adult-initiated contact, and strict data minimization.</p>
        </section>

        <section>
          <h2>8. Data Security</h2>
          <p>Security is a foundational design principle of CivicLingo — particularly given our young user base. We apply additional security measures for data belonging to users ages 15–17.</p>
          <h3>8.1 Technical Safeguards</h3>
          <ul>
            <li><strong>Encryption in transit:</strong> All data transmitted between your device and our servers is encrypted using TLS 1.2 or higher.</li>
            <li><strong>Encryption at rest:</strong> All user data stored in our databases is encrypted using AES-256.</li>
            <li><strong>Secure authentication:</strong> Passwords are hashed using bcrypt and never stored in plaintext. Sign in with Apple and Google are supported as secure alternatives.</li>
            <li><strong>Access controls:</strong> Only authorized personnel with a documented need can access user data. All access is logged, audited, and reviewed periodically.</li>
            <li><strong>Minor data isolation:</strong> Data belonging to users ages 15–17 is stored with additional access restrictions and is accessible only to personnel with explicit minor-data authorization.</li>
            <li><strong>Infrastructure security:</strong> Our platform is hosted on cloud infrastructure that meets SOC 2 Type II compliance standards.</li>
          </ul>
          <h3>8.2 Organizational Safeguards</h3>
          <ul>
            <li>All team members with access to user data complete mandatory privacy and security training, including child safety protocols.</li>
            <li>We conduct periodic security reviews and penetration testing of our infrastructure and codebase.</li>
            <li>Third-party vendors are vetted for security practices and prohibited from accessing minor user data without specific authorization.</li>
          </ul>
          <h3>8.3 Breach Notification</h3>
          <p>In the event of a data breach affecting your personal information, we will notify you via email and in-app notification within 72 hours of becoming aware. For breaches affecting minor user data, we will also notify registered parents or guardians and relevant authorities as required by law.</p>
          <h3>8.4 Reporting Security Issues</h3>
          <p>To report a security vulnerability, contact <a href="mailto:security@civiclingo.com">security@civiclingo.com</a>. We take all security reports seriously and respond within 24 hours. We do not pursue legal action against researchers who report vulnerabilities in good faith.</p>
        </section>

        <section>
          <h2>9. AI Coach & Automated Processing</h2>
          <p>CivicLingo features Nova, an AI-powered civic coach that provides personalized guidance and reflection prompts.</p>
          <ul>
            <li>Conversations with Nova are processed by our AI infrastructure to generate responses. These conversations may be used in anonymized, aggregated form to improve Nova's training.</li>
            <li>No conversation is shared with other users or made public.</li>
            <li>Nova does not make automated decisions that have legal or similarly significant effects on your life. Its role is educational guidance only.</li>
            <li>You can request deletion of your AI coach conversation history at any time through app settings or by contacting us.</li>
          </ul>
        </section>

        <section>
          <h2>8. Your Rights & Choices</h2>
          <div className="legal-table">
            <table>
              <thead><tr><th>Right</th><th>What It Means</th></tr></thead>
              <tbody>
                {[
                  ['Access', 'Request a copy of the personal data we hold about you.'],
                  ['Correction', 'Ask us to correct inaccurate or incomplete information.'],
                  ['Deletion', 'Request that we delete your account and associated data.'],
                  ['Portability', 'Receive your data in a structured, machine-readable format.'],
                  ['Objection', 'Object to certain types of processing, including AI training.'],
                  ['Opt-out', 'Opt out of non-essential data use at any time in app settings.'],
                ].map(([r, m]) => (
                  <tr key={r}><td><strong>{r}</strong></td><td>{m}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>To exercise any of these rights, contact us at <a href="mailto:privacy@civiclingo.com">privacy@civiclingo.com</a>. We will respond within 30 days.</p>
          <h3>8.1 Account Deletion</h3>
          <p>You can delete your account at any time from Settings → Account → Delete Account. Your personal data will be permanently removed within 30 days, except where retention is required by law.</p>
          <h3>8.2 Notifications</h3>
          <p>You can manage push notification preferences in your device settings or within the app at any time.</p>
        </section>

        <section>
          <h2>9. Data Retention</h2>
          <ul>
            <li><strong>Active accounts:</strong> Data is retained for the duration of your account.</li>
            <li><strong>Deleted accounts:</strong> Personal data is deleted within 30 days of account deletion.</li>
            <li><strong>AI coach conversations:</strong> Retained for up to 12 months to support coaching continuity, then anonymized.</li>
            <li><strong>Anonymized/aggregated data:</strong> May be retained indefinitely for research and product improvement.</li>
            <li><strong>Legal holds:</strong> Certain data may be retained longer if required by applicable law.</li>
          </ul>
        </section>

        <section>
          <h2>10. Apple App Store — Privacy Nutrition Labels</h2>
          <p><strong>CivicLingo does not track you.</strong> We do not collect data for the purpose of tracking you across third-party apps or websites. We do not share your data with ad networks or data brokers. App Tracking Transparency (ATT) permission is not requested.</p>
          <h3>Data Linked to You</h3>
          <div className="legal-table">
            <table>
              <thead><tr><th>Apple Category</th><th>Data Type</th><th>Purpose</th></tr></thead>
              <tbody>
                <tr><td>Contact Info</td><td>Name, Email Address</td><td>Account creation and authentication</td></tr>
                <tr><td>User Content</td><td>Challenge responses, AI coach messages, poll votes (anonymized)</td><td>App functionality and AI training</td></tr>
                <tr><td>Identifiers</td><td>User ID</td><td>Account management</td></tr>
                <tr><td>Usage Data</td><td>App interactions, feature usage, session frequency</td><td>Product improvement and personalization</td></tr>
              </tbody>
            </table>
          </div>
          <h3>Data Not Linked to You</h3>
          <div className="legal-table">
            <table>
              <thead><tr><th>Apple Category</th><th>Data Type</th><th>Purpose</th></tr></thead>
              <tbody>
                <tr><td>Diagnostics</td><td>Crash logs, performance data</td><td>App stability and bug fixing</td></tr>
                <tr><td>Device Info</td><td>OS version, device model</td><td>Technical compatibility</td></tr>
              </tbody>
            </table>
          </div>
          <h3>Sign in with Apple</h3>
          <p>CivicLingo supports Sign in with Apple. When you use this option, Apple may share your name and email. We use this information solely to create and manage your account. We do not receive your Apple ID password or payment information.</p>
        </section>

        <section>
          <h2>11. U.S. Legal Compliance</h2>
          <h3>11.1 Minimum Age & U.S. Privacy Law</h3>
          <p>CivicLingo's minimum age requirement is 15. We do not knowingly collect personal information from users under 15. We comply with applicable U.S. federal and state privacy laws. Our platform is not directed at children under 15 and we take commercially reasonable steps to prevent registration by underage users.</p>
          <h3>11.2 California Residents — CCPA</h3>
          <p>If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA):</p>
          <ul>
            <li><strong>Right to Know:</strong> Request disclosure of the categories and specific pieces of personal information we have collected about you.</li>
            <li><strong>Right to Delete:</strong> Request deletion of your personal information, subject to certain exceptions.</li>
            <li><strong>Right to Opt-Out:</strong> We do not sell personal information. There is nothing to opt out of.</li>
            <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any CCPA rights.</li>
          </ul>
          <p>To exercise your CCPA rights, contact <a href="mailto:privacy@civiclingo.com">privacy@civiclingo.com</a> with the subject line "CCPA Request."</p>
          <h3>11.3 Service Availability</h3>
          <p>CivicLingo is currently available exclusively in the United States. If you are accessing the app from outside the United States, please be aware that your data will be stored and processed in the U.S., subject to U.S. law.</p>
        </section>

        <section>
          <h2>12. Changes to This Policy</h2>
          <p>We will notify you via in-app notification for material changes. For significant changes affecting minors, we will send an email notification and require re-acknowledgment. Your continued use of CivicLingo after changes take effect constitutes acceptance of the updated policy.</p>
        </section>

        <section>
          <h2>13. Contact Us</h2>
          <p>Privacy requests and general questions: <a href="mailto:privacy@civiclingo.com">privacy@civiclingo.com</a></p>
          <p>Safety concerns and minor protection issues: <a href="mailto:safety@civiclingo.com">safety@civiclingo.com</a></p>
          <p>We aim to respond to all privacy requests within 30 days and all safety reports within 48 hours.</p>
        </section>
      </div>
    </motion.div>
  )
}
