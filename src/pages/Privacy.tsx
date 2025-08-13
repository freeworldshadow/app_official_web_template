import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Lock, Eye, Database } from 'lucide-react'
import { useEffect } from 'react'

function Privacy() {
  const appName = import.meta.env.VITE_APP_NAME || 'App'
  const supportEmail = import.meta.env.VITE_SUPPORT_EMAIL || 'support@example.com'
  const companyName = `${appName} Development Team`

  const lastUpdated = 'January 1, 2024'

  useEffect(() => {
    document.title = `Privacy Policy - ${appName}`
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
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-slate-400">Last updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <p className="text-slate-300 text-lg">
              {companyName} (referred to as "we") values your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use the {appName} application.
            </p>
          </section>

          <section className="bg-slate-800/30 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-cyan-500" size={24} />
              <h2 className="text-2xl font-semibold m-0">Our Commitment</h2>
            </div>
            <p className="text-slate-400 m-0">
              We are committed to protecting your personal information and will not sell, trade, or otherwise transfer your personal information to third parties.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database className="text-cyan-500" size={24} />
              <h2 className="text-2xl font-semibold">Information Collection</h2>
            </div>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Information We Collect</h3>
            <ul className="space-y-2 text-slate-300">
              <li>• <strong>Device Information:</strong> Device model, operating system version, unique device identifiers</li>
              <li>• <strong>Usage Information:</strong> App usage frequency, feature usage, crash reports</li>
              <li>• <strong>Network Information:</strong> IP address, network type, geographic location (if authorized)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Information We Do Not Collect</h3>
            <ul className="space-y-2 text-slate-300">
              <li>• Your name, phone number, or email address (unless you voluntarily provide it)</li>
              <li>• Your contacts, photos, or other personal files</li>
              <li>• Your precise location information (unless explicitly authorized)</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-cyan-500" size={24} />
              <h2 className="text-2xl font-semibold">Information Usage</h2>
            </div>
            
            <p className="text-slate-300 mb-4">We use the collected information for:</p>
            <ul className="space-y-2 text-slate-300">
              <li>• Providing and maintaining our services</li>
              <li>• Improving and optimizing app performance</li>
              <li>• Analyzing usage trends and user preferences</li>
              <li>• Providing customer support</li>
              <li>• Sending important service notifications</li>
              <li>• Detecting and preventing fraud or technical issues</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="text-cyan-500" size={24} />
              <h2 className="text-2xl font-semibold">Information Protection</h2>
            </div>
            
            <p className="text-slate-300 mb-4">
              We implement appropriate technical and organizational measures to protect your information:
            </p>
            <ul className="space-y-2 text-slate-300">
              <li>• Use encryption technology to protect data transmission</li>
              <li>• Restrict access to personal information</li>
              <li>• Regularly review our security measures</li>
              <li>• Comply with applicable data protection laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="text-slate-300 mb-4">
              Our app may contain links to or integrations with third-party services. These third-party services have their own privacy policies, and we recommend you read them carefully.
            </p>
            <p className="text-slate-300">
              Third-party services we may use include:
            </p>
            <ul className="space-y-2 text-slate-300 mt-2">
              <li>• Analytics services (such as Google Analytics)</li>
              <li>• Crash reporting services (such as Crashlytics)</li>
              <li>• Cloud storage services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
            <p className="text-slate-300">
              Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.
              If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-slate-300 mb-4">You have the following rights regarding your personal information:</p>
            <ul className="space-y-2 text-slate-300">
              <li>• <strong>Access Right:</strong> You have the right to request access to personal information we hold about you</li>
              <li>• <strong>Correction Right:</strong> You have the right to request correction of inaccurate personal information</li>
              <li>• <strong>Deletion Right:</strong> You have the right to request deletion of your personal information</li>
              <li>• <strong>Objection Right:</strong> You have the right to object to our processing of your personal information</li>
              <li>• <strong>Data Portability Right:</strong> You have the right to receive your personal information in a structured, commonly used, and machine-readable format</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookie Policy</h2>
            <p className="text-slate-300">
              Our website may use cookies and similar technologies to improve user experience. You can control the use of cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Policy Updates</h2>
            <p className="text-slate-300">
              We may update this Privacy Policy from time to time. The updated policy will be posted on this page with a revised "Last updated" date.
              For significant changes, we will notify you through in-app notifications or other appropriate means.
            </p>
          </section>

          <section className="bg-slate-800/30 rounded-lg p-6 border border-slate-700">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-slate-300 mb-4">
              If you have any questions or concerns about this Privacy Policy, please contact us:
            </p>
            <div className="space-y-2 text-slate-300">
              <p>• Email: <a href={`mailto:${supportEmail}`} className="text-cyan-400 hover:text-cyan-300">{supportEmail}</a></p>
              <p>• Development Team: {companyName}</p>
            </div>
          </section>
        </div>
      </main>

      <footer className="mx-auto max-w-4xl px-6 py-10 text-sm text-slate-500 border-t border-slate-800/60">
        <div className="flex justify-between items-center">
          <p>© {new Date().getFullYear()} {companyName}. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link to="/terms" className="hover:text-slate-300 transition">Terms of Service</Link>
            <Link to="/support" className="hover:text-slate-300 transition">Support</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default Privacy