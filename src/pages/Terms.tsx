import { Link } from 'react-router-dom'
import { ArrowLeft, Scale, AlertCircle, CheckCircle } from 'lucide-react'
import { useEffect } from 'react'

function Terms() {
  const appName = import.meta.env.VITE_APP_NAME || 'App'
  const supportEmail = import.meta.env.VITE_SUPPORT_EMAIL || 'support@example.com'
  const companyName = `${appName} Development Team`

  const lastUpdated = 'January 1, 2024'

  useEffect(() => {
    document.title = `Terms of Service - ${appName}`
  }, [appName])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <header className="border-b border-slate-800/60">
        <div className="mx-auto max-w-4xl px-6 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-200 transition">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-slate-400">Last updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section className="bg-slate-800/30 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="text-cyan-500" size={24} />
              <h2 className="text-2xl font-semibold m-0">Acceptance of Terms</h2>
            </div>
            <p className="text-slate-300 m-0">
              By using {appName}, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Service Description</h2>
            <p className="text-slate-300">
              {appName} is a mobile application service provided by {companyName}. We reserve the right to modify, suspend, or terminate the service (or any part thereof) at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Terms of Use</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">2.1 License Grant</h3>
                <p className="text-slate-300">
                  We grant you a limited, non-exclusive, non-transferable, revocable license to download and use {appName} for personal, non-commercial purposes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">2.2 Usage Restrictions</h3>
                <p className="text-slate-300 mb-3">You agree not to:</p>
                <ul className="space-y-2 text-slate-300">
                  <li>• Copy, modify, or distribute any part of the application</li>
                  <li>• Reverse engineer, decompile, or disassemble the application</li>
                  <li>• Use the application for any illegal or unauthorized purpose</li>
                  <li>• Violate any applicable laws or regulations</li>
                  <li>• Interfere with or disrupt the normal operation of the service</li>
                  <li>• Attempt unauthorized access to our systems or networks</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">2.3 Account Responsibility</h3>
                <p className="text-slate-300">
                  If the application requires account creation, you are responsible for maintaining the confidentiality and security of your account and are liable for all activities that occur under your account.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
            <p className="text-slate-300 mb-4">
              {appName} and all its content, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by {companyName} and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <div className="bg-blue-950/30 border border-blue-800/50 rounded-lg p-4">
              <p className="text-slate-300 m-0">
                All trademarks, service marks, logos, and trade names are the property of their respective owners.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. User Content</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">4.1 User Responsibility</h3>
                <p className="text-slate-300">
                  You are solely responsible for any content you submit, post, or display through the application.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">4.2 Content License</h3>
                <p className="text-slate-300">
                  By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, and distribute such content.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Privacy</h2>
            <p className="text-slate-300">
              Your use of the service is also governed by our <Link to="/privacy" className="text-cyan-400 hover:text-cyan-300">Privacy Policy</Link>.
              Please review our Privacy Policy to understand how we collect, use, and share your information.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="text-yellow-500" size={24} />
              <h2 className="text-2xl font-semibold">6. Disclaimers</h2>
            </div>
            
            <div className="bg-yellow-950/20 border border-yellow-800/50 rounded-lg p-4 space-y-3">
              <p className="text-slate-300">
                The service is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied.
              </p>
              <p className="text-slate-300">
                We do not warrant that the service will be uninterrupted, timely, secure, or error-free.
              </p>
              <p className="text-slate-300">
                We are not responsible for the accuracy or reliability of any content obtained through the service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p className="text-slate-300">
              In no event shall {companyName} and its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Indemnification</h2>
            <p className="text-slate-300">
              You agree to defend, indemnify, and hold harmless {companyName} and its affiliates, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from your breach of these terms or your use of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
            <p className="text-slate-300 mb-4">
              We may terminate or suspend your access to the service at any time for any reason without notice. Upon termination:
            </p>
            <ul className="space-y-2 text-slate-300">
              <li>• Your right to use the service will cease immediately</li>
              <li>• You must delete all downloaded copies of the application</li>
              <li>• All terms that should survive termination will continue to be effective</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
            <p className="text-slate-300">
              These terms are governed by and construed in accordance with the laws of the People's Republic of China, without regard to its conflict of law provisions.
              You agree to submit to the exclusive jurisdiction of the courts of China.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
            <p className="text-slate-300">
              We reserve the right to modify these terms at any time. If we make material changes, we will notify you through in-app notifications or email.
              Continued use of the service constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Entire Agreement</h2>
            <p className="text-slate-300">
              These terms constitute the entire agreement between you and {companyName} regarding the use of the service and supersede any prior agreements.
            </p>
          </section>

          <section className="bg-slate-800/30 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="text-green-500" size={24} />
              <h2 className="text-2xl font-semibold">13. Contact Information</h2>
            </div>
            <p className="text-slate-300 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-slate-300">
              <p>• Email: <a href={`mailto:${supportEmail}`} className="text-cyan-400 hover:text-cyan-300">{supportEmail}</a></p>
              <p>• Development Team: {companyName}</p>
            </div>
          </section>

          <section className="text-center py-8">
            <p className="text-slate-400 text-sm">
              By using {appName}, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </section>
        </div>
      </main>

      <footer className="mx-auto max-w-4xl px-6 py-10 text-sm text-slate-500 border-t border-slate-800/60">
        <div className="flex justify-between items-center">
          <p>© {new Date().getFullYear()} {companyName}. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link to="/privacy" className="hover:text-slate-300 transition">Privacy Policy</Link>
            <Link to="/support" className="hover:text-slate-300 transition">Support</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default Terms