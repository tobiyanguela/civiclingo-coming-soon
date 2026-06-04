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
          <span>Safety first</span>
          <span>AI coaching tool only</span>
          <span>U.S.-based service</span>
        </div>

        <p className="legal-summary">
          <strong>Plain English Summary:</strong> These Terms govern your use of CivicLingo, a civic education and leadership platform for civic leaders ages 15 and older. By creating an account you agree to use the platform responsibly, respect other users, and understand that our AI coach (Nova) is a personal development tool — not a licensed therapist, doctor, or legal advisor. Users ages 15–17 are considered minors and receive additional protections, including parental controls and restricted peer interactions. These terms are published in preparation for the CivicLingo app launch and describe our planned policies and features.
        </p>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and Civics Unplugged and The Motiff Group Inc. (collectively "CivicLingo," "we," "us," or "our"), governing your access to and use of the CivicLingo platform, including our mobile application (iOS and Android), web application, and all related services.</p>
          <p>By creating an account or using the platform in any way, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree, you must not access or use the platform.</p>
          <p><strong>Important — Minor Users (Ages 15–17):</strong> A minor cannot enter into a legally binding contract under U.S. law. If you are between 15 and 17 years of age, your parent or legal guardian must read, accept, and agree to these Terms on your behalf. By allowing a minor to use the platform, the parent or legal guardian agrees to be bound by these Terms and accepts full legal responsibility for the minor's use of CivicLingo. CivicLingo reserves the right to require written parental consent before granting access to minor users.</p>
        </section>

        <section>
          <h2>2. Eligibility Requirements</h2>
          <p>To use CivicLingo, you must meet all of the following requirements:</p>
          <ul>
            <li>You must be at least <strong>15 years of age</strong>. CivicLingo is designed for civic leaders ages 15 and older.</li>
            <li>Users ages 15–17 must have parental or guardian awareness. We provide a parental notification flow during onboarding and strongly recommend parental review of these Terms.</li>
            <li>You must be a human individual. Accounts created by bots or automated tools are prohibited.</li>
            <li>You must not be prohibited from using the platform under applicable U.S. law.</li>
            <li>You must not have had a previous account terminated for violation of these Terms.</li>
          </ul>
          <p>CivicLingo is designed for civic leaders — high school students, college students, young professionals, and engaged adults who are building their civic identity and leadership skills. The platform is operated by Civics Unplugged, a 501(c)(3) nonprofit organization.</p>
        </section>

        <section>
          <h2>3. User Accounts</h2>
          <h3>3.1 Account Creation</h3>
          <p>To access most features, you must create an account by providing accurate, current, and complete information. You agree to keep your account information up to date.</p>
          <h3>3.2 Account Security</h3>
          <p>You are solely responsible for maintaining the confidentiality of your account credentials. You must use a strong, unique password and must not share your credentials with others. Notify us immediately at <a href="mailto:contact@civiclingo.com">contact@civiclingo.com</a> if you suspect unauthorized access to your account.</p>
          <h3>3.3 One Account Per User</h3>
          <p>Each user may maintain only one active account. Creating multiple accounts to circumvent restrictions is prohibited.</p>
          <h3>3.4 Account Suspension and Termination</h3>
          <p>We reserve the right to suspend or permanently terminate any account at our discretion, with or without notice, for violations of these Terms or for conduct determined to be harmful to the community — particularly conduct that threatens minor users.</p>
        </section>

        <section>
          <h2>4. Authentication Methods</h2>
          <p>CivicLingo supports Email/Password, Sign in with Apple, and Sign in with Google. By using third-party authentication, you authorize those providers to share your name and email with us. We do not receive or store your Apple ID or Google account password. All authentication data is transmitted using industry-standard encryption (TLS 1.2 or higher).</p>
        </section>

        <section>
          <h2>5. User Responsibilities</h2>
          <ul>
            <li>Provide accurate and truthful information during registration and throughout your use.</li>
            <li>Use the platform only for lawful purposes and in accordance with these Terms.</li>
            <li>Respect the rights, dignity, and privacy of other users — especially minor users.</li>
            <li>Not misrepresent your identity, age, credentials, or affiliation.</li>
            <li>Take responsibility for all content you submit or share on the platform.</li>
            <li>Comply with all applicable local, state, and federal laws.</li>
            <li>Report safety concerns involving minors immediately to <a href="mailto:contact@civiclingo.com">contact@civiclingo.com</a>.</li>
          </ul>
        </section>

        <section>
          <h2>6. Minor User Protections</h2>
          <p>CivicLingo takes the safety of users ages 15–17 seriously. The following protections apply automatically to all minor accounts:</p>
          <ul>
            <li><strong>Restricted peer interactions:</strong> Minor users may not engage in open chat with other users. All peer interactions are AI-facilitated and moderated.</li>
            <li><strong>Non-discoverable profiles:</strong> Minor user profiles are not publicly discoverable within the platform.</li>
            <li><strong>Enhanced content moderation:</strong> All content involving minor users undergoes automated and human review.</li>
            <li><strong>No adult-initiated contact:</strong> Users 18 or older may not initiate direct contact with users ages 15–17. Any attempt to do so will result in immediate account termination and <strong>will be reported to law enforcement</strong>. CivicLingo complies with all applicable mandatory reporting obligations under federal and state law regarding the safety of minors.</li>
            <li><strong>Data minimization:</strong> We collect only the minimum information necessary for minor users to participate in the platform.</li>
            <li><strong>Parental access:</strong> Parents or guardians of minor users may request full review, modification, or deletion of their child's account and data at any time by contacting <a href="mailto:contact@civiclingo.com">contact@civiclingo.com</a>.</li>
          </ul>
        </section>

        <section>
          <h2>7. Parental Controls</h2>
          <p>For users ages 15–17, CivicLingo provides the following parental control capabilities:</p>
          <ul>
            <li><strong>Account review:</strong> Parents or guardians may request a full summary of their child's activity, challenges completed, and AI coach interactions.</li>
            <li><strong>Content restrictions:</strong> Parents may request that specific features — including peer matching and AI coaching — be restricted or disabled for their child's account.</li>
            <li><strong>Account deletion:</strong> Parents may request immediate deletion of their child's account and all associated data.</li>
            <li><strong>Notification preferences:</strong> Parents may opt into notifications about their child's platform activity.</li>
            <li><strong>Data access:</strong> Parents may request a copy of all data collected about their child.</li>
          </ul>
          <p>To exercise any parental control right, contact us at <a href="mailto:contact@civiclingo.com">contact@civiclingo.com</a> with subject line "Parental Control Request" and provide verification of your relationship to the minor account holder. We respond to all parental requests within 5 business days.</p>
        </section>

        <section>
          <h2>8. Community Guidelines</h2>
          <h3>8.1 Respect and Inclusion</h3>
          <p>Treat all community members with dignity and respect, regardless of background, identity, political views, or beliefs. Disagreement is welcome; disrespect is not.</p>
          <h3>8.2 Constructive Engagement</h3>
          <p>Participate in challenges, debates, and discussions in good faith. Contributions should be thoughtful, relevant, and aimed at advancing civic learning.</p>
          <h3>8.3 Authenticity</h3>
          <p>Be genuine in your interactions. Do not impersonate other users, public figures, or platform staff. Do not submit AI-generated content as your own personal reflection where authentic responses are required.</p>
          <h3>8.4 Privacy of Others</h3>
          <p>Do not share personally identifiable information about other users without their consent. Do not screenshot or republish private conversations outside the platform. This applies with heightened importance to any information involving minor users.</p>
          <h3>8.5 Reporting</h3>
          <p>Report violations — especially any safety concerns involving minor users — through the in-app reporting feature or by emailing <a href="mailto:contact@civiclingo.com">contact@civiclingo.com</a>. We respond to all reports within 48 hours, and to reports involving minors within 24 hours.</p>
        </section>

        <section>
          <h2>9. Prohibited Conduct</h2>
          <ul>
            <li>Posting content that is harassing, threatening, defamatory, hateful, or discriminatory.</li>
            <li>Any attempt by an adult user to contact, solicit, or interact with a minor user outside of moderated platform features.</li>
            <li>Misrepresenting your age to gain access to features restricted to adult users.</li>
            <li>Inciting or promoting violence or harm to others, including self-harm.</li>
            <li>Sharing content that infringes on the intellectual property rights of any third party.</li>
            <li>Attempting to gain unauthorized access to any part of the platform or its infrastructure.</li>
            <li>Using bots, scrapers, or automated tools to interact with the platform.</li>
            <li>Using the platform for commercial solicitation, spam, or unauthorized advertising.</li>
            <li>Collecting personal information of other users — especially minor users — without their consent.</li>
            <li>Misusing AI coaching features to generate harmful, misleading, or illegal content.</li>
            <li>Creating multiple accounts to circumvent bans or subscription limitations.</li>
            <li>Attempting to identify, locate, or contact minor users outside the platform.</li>
          </ul>
          <p>Violations involving the safety of minor users — including but not limited to solicitation, exploitation, or any attempt to identify or contact a minor outside the platform — <strong>will be reported to relevant law enforcement authorities</strong> without prior notice to the offending user. CivicLingo has a zero-tolerance policy for conduct that endangers minors.</p>
        </section>

        <section>
          <h2>10. Platform Security</h2>
          <p>We implement industry-standard security measures to protect all user data, with particular attention to the protection of minor user data:</p>
          <ul>
            <li><strong>Encryption in transit:</strong> All data transmitted between your device and our servers is encrypted using TLS 1.2 or higher.</li>
            <li><strong>Encryption at rest:</strong> Sensitive data stored in our systems is encrypted using AES-256.</li>
            <li><strong>Password security:</strong> Passwords are hashed using bcrypt and never stored in plaintext.</li>
            <li><strong>Access controls:</strong> Only authorized personnel with documented need can access user data. All access is logged and audited.</li>
            <li><strong>Infrastructure:</strong> Our platform is hosted on cloud infrastructure providers that maintain SOC 2 Type II compliance standards.</li>
            <li><strong>Breach notification:</strong> In the event of a data breach affecting your personal information, we will notify you without undue delay and as required by applicable law.</li>
          </ul>
          <p>To report a security vulnerability, contact <a href="mailto:contact@civiclingo.com">contact@civiclingo.com</a>. We take all security reports seriously and respond within 24 hours.</p>
        </section>

        <section>
          <h2>11. AI Coach Disclaimer (Nova)</h2>
          <p><strong>Important — Please Read Carefully.</strong> Nova, the AI coaching feature within CivicLingo, is designed exclusively as a personal civic development tool. It does not constitute professional advice of any kind.</p>
          <h3>11.1 Not a Substitute for Professional Services</h3>
          <p>Nova is an automated software tool. It is NOT a licensed therapist, medical doctor, licensed attorney, or crisis intervention service.</p>
          <p><strong>If you or someone you know is in crisis, please contact:</strong></p>
          <ul>
            <li>Emergency services: <strong>911</strong></li>
            <li>988 Suicide & Crisis Lifeline: <strong>988</strong></li>
            <li>Crisis Text Line: Text <strong>HOME to 741741</strong></li>
          </ul>
          <h3>11.2 Limitations of AI-Generated Content</h3>
          <p>AI-generated responses may be inaccurate, incomplete, or outdated. You should exercise independent judgment when acting on any AI-provided guidance. Nova is not a replacement for professional medical, legal, financial, or psychological advice.</p>
          <h3>11.3 No Professional Relationship</h3>
          <p>Use of Nova does not create any therapist-patient, attorney-client, doctor-patient, or other professional relationship between you and CivicLingo.</p>
          <h3>11.4 Minor User Safeguards</h3>
          <p>Nova's interactions with users ages 15–17 are subject to additional content guardrails and enhanced moderation. Conversations that trigger safety protocols are reviewed by our human moderation team within 24 hours.</p>
          <h3>11.5 Data Use in AI</h3>
          <p>Your interactions with Nova may be used in anonymized and aggregated form to improve the AI models. Minor user conversations are subject to stricter data handling. See our Privacy Policy for full details.</p>
        </section>

        <section>
          <h2>12. User Generated Content</h2>
          <h3>12.1 Ownership</h3>
          <p>You retain ownership of all original content you create and submit to the platform. By submitting content, you grant CivicLingo a non-exclusive, worldwide, royalty-free license to use and display such content solely for the purposes of operating and improving the platform.</p>
          <h3>12.2 Content Standards</h3>
          <p>All user content must comply with these Terms. You represent that you own or have the right to submit the content and that it does not infringe any third party's rights.</p>
          <h3>12.3 Content Moderation</h3>
          <p>We reserve the right to review, remove, or restrict any content that violates these Terms. Content involving or accessible to minor users receives enhanced automated and human moderation.</p>
        </section>

        <section>
          <h2>13. Intellectual Property</h2>
          <p>The platform and all its content — including software, text, graphics, logos, AI models, challenge content, and overall design — are owned by Civics Unplugged, The Motiff Group Inc., or their licensors and are protected by applicable intellectual property laws. We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the platform solely for your personal, non-commercial use.</p>
        </section>

        <section>
          <h2>14. Subscriptions and Payments</h2>
          <p>CivicLingo may offer free and paid subscription tiers. By subscribing to a paid plan, you authorize us to charge your designated payment method on a recurring basis. All fees are in U.S. dollars. We will provide at least 30 days' notice of any price changes. Payments are processed through Apple App Store, Google Play, or Stripe. Minor users may not subscribe to paid tiers without parental consent.</p>
        </section>

        <section>
          <h2>15. Cancellation & Refund Policy</h2>
          <p>You may cancel your subscription at any time through your account settings. Cancellations take effect at the end of the current billing period. All subscription fees are generally non-refundable except where required by applicable law. For billing errors, contact <a href="mailto:contact@civiclingo.com">contact@civiclingo.com</a> within 14 days.</p>
        </section>

        <section>
          <h2>16. Data Ownership & Retention</h2>
          <p>You retain ownership of your personal data and content. We do not sell your personal data to third parties. You may request a copy of your data or deletion of your account by contacting <a href="mailto:contact@civiclingo.com">contact@civiclingo.com</a>. Deletion requests are processed within 30 days. Parents or guardians of minor users may exercise these rights on their child's behalf.</p>
        </section>

        <section>
          <h2>17. Limitation of Liability</h2>
          <p>To the maximum extent permitted by applicable law, CivicLingo, Civics Unplugged, The Motiff Group Inc., and their respective officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including decisions made based on AI-generated content or any interruption of the platform.</p>
          <p>Our total aggregate liability for all claims shall not exceed the greater of (a) the total amount you paid us in the 12 months preceding the claim, or (b) $100 USD. This limitation does not apply to claims arising from our gross negligence or willful misconduct, or to the extent prohibited by applicable law with respect to minor users.</p>
        </section>

        <section>
          <h2>18. Indemnification</h2>
          <p>Adult users (18+) agree to defend, indemnify, and hold harmless CivicLingo and its affiliates from and against any claims, liabilities, damages, losses, and expenses arising out of their use of the platform, their user content, or their violation of these Terms. This indemnification obligation does not apply to users ages 15–17.</p>
        </section>

        <section>
          <h2>19. Dispute Resolution</h2>
          <h3>19.1 Informal Resolution</h3>
          <p>Before initiating any formal dispute, contact us at <a href="mailto:contact@civiclingo.com">contact@civiclingo.com</a> and give us 30 days to resolve the issue informally.</p>
          <h3>19.2 Binding Arbitration</h3>
          <p>Unresolved disputes will be settled through binding individual arbitration under the rules of the American Arbitration Association (AAA), conducted in English in the state where Civics Unplugged is incorporated. Arbitration is available only to adult users (18+). Disputes involving minor users shall be resolved in accordance with applicable state law.</p>
          <h3>19.3 Class Action Waiver</h3>
          <p><strong>You and CivicLingo waive the right to bring or participate in any class action lawsuit or class-wide arbitration.</strong> All disputes must be resolved on an individual basis. This waiver does not apply where prohibited by applicable law.</p>
        </section>

        <section>
          <h2>20. Governing Law</h2>
          <p>These Terms are governed by the laws of the United States and the state in which Civics Unplugged is incorporated, without regard to conflict of law provisions.</p>
        </section>

        <section>
          <h2>21. Termination</h2>
          <p>You may terminate your account at any time through app settings or by contacting <a href="mailto:contact@civiclingo.com">contact@civiclingo.com</a>. We may suspend or terminate any account immediately and without notice for violations of these Terms — particularly violations involving the safety of minor users. Upon termination, all licenses granted to you cease immediately. Sections 10, 11, 13, 16, 17, 18, 19, and 20 survive termination.</p>
        </section>

        <section>
          <h2>22. Contact Information</h2>
          <p>For all inquiries — including privacy requests, safety reports, security issues, billing, and legal matters — contact us at <a href="mailto:contact@civiclingo.com">contact@civiclingo.com</a>.</p>
          <p>Operated by <strong>Civics Unplugged</strong> · 501(c)(3) nonprofit · United States</p>
        </section>

        <section>
          <h2>23. Severability</h2>
          <p>If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, that provision shall be modified to the minimum extent necessary to make it enforceable, or severed from these Terms if modification is not possible. The remaining provisions shall continue in full force and effect. The invalidity of one provision does not affect the validity of the rest of these Terms.</p>
        </section>

        <section>
          <h2>24. Entire Agreement</h2>
          <p>These Terms, together with our Privacy Policy, constitute the entire agreement between you and CivicLingo regarding your use of the platform and supersede all prior agreements, understandings, representations, and warranties, whether written or oral, relating to the subject matter herein. No waiver by CivicLingo of any breach of these Terms shall be deemed a waiver of any subsequent breach.</p>
        </section>

        <section>
          <h2>25. Updates to Terms</h2>
          <p>We reserve the right to modify these Terms at any time. For material changes, we will notify you via email and/or in-app notification at least 14 days before changes take effect. For changes that materially affect minor users, we will also notify parents or guardians who have registered for notifications. Your continued use after the effective date constitutes acceptance.</p>
        </section>
      </div>
    </motion.div>
  )
}
