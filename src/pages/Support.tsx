import { Link } from 'react-router-dom'
import { ArrowLeft, Mail, MessageCircle, FileText } from 'lucide-react'
import { useEffect } from 'react'

function Support() {
  const appName = import.meta.env.VITE_APP_NAME || 'App'
  const supportEmail = import.meta.env.VITE_SUPPORT_EMAIL || 'support@example.com'
  const companyName = `${appName} Development Team`

  useEffect(() => {
    document.title = `Support - ${appName}`
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
        <h1 className="text-4xl font-bold mb-8">Support Center</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Get Help</h2>
          <p className="text-slate-400 mb-6">
            We're here to help you with {appName}. Please contact us through the following ways:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <Mail className="text-cyan-500 mb-3" size={24} />
              <h3 className="text-lg font-semibold mb-2">Email Support</h3>
              <p className="text-slate-400 mb-3">
                Send an email to our support team and we'll respond within 24 hours.
              </p>
              <a 
                href={`mailto:${supportEmail}`}
                className="text-cyan-400 hover:text-cyan-300 transition"
              >
                {supportEmail}
              </a>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <MessageCircle className="text-cyan-500 mb-3" size={24} />
              <h3 className="text-lg font-semibold mb-2">FAQ</h3>
              <p className="text-slate-400 mb-3">
                Check our frequently asked questions to quickly find the answers you need.
              </p>
              <Link 
                to="#faq"
                className="text-cyan-400 hover:text-cyan-300 transition"
              >
                View FAQ
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-12" id="faq">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <details className="bg-slate-800/30 rounded-lg p-4 border border-slate-700">
              <summary className="font-semibold cursor-pointer">How to download {appName}?</summary>
              <p className="mt-3 text-slate-400">
                You can search for "{appName}" directly in the App Store or click the download button on the homepage.
              </p>
            </details>

            <details className="bg-slate-800/30 rounded-lg p-4 border border-slate-700">
              <summary className="font-semibold cursor-pointer">Which devices are supported?</summary>
              <p className="mt-3 text-slate-400">
                {appName} supports iPhone, iPad, and iPod touch. Requires iOS 12.0 or later.
              </p>
            </details>

            <details className="bg-slate-800/30 rounded-lg p-4 border border-slate-700">
              <summary className="font-semibold cursor-pointer">How to update the app?</summary>
              <p className="mt-3 text-slate-400">
                Open the App Store, tap your profile picture in the top right corner, then pull down to refresh to see available updates.
              </p>
            </details>

            <details className="bg-slate-800/30 rounded-lg p-4 border border-slate-700">
              <summary className="font-semibold cursor-pointer">What to do if I encounter issues?</summary>
              <p className="mt-3 text-slate-400">
                If you encounter any issues, please contact us at {supportEmail} with detailed problem description and device information.
              </p>
            </details>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Feedback & Suggestions</h2>
          <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700">
            <FileText className="text-cyan-500 mb-3" size={24} />
            <p className="text-slate-400 mb-4">
              Your feedback is very important to us. If you have any suggestions or found any issues, please let us know.
            </p>
            <a 
              href={`mailto:${supportEmail}?subject=Feedback: ${appName}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-cyan-500 text-slate-900 font-medium hover:bg-cyan-400 transition"
            >
              Send Feedback
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Response Time</h2>
          <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700">
            <ul className="space-y-2 text-slate-400">
              <li>• Email support: Response within 24 hours</li>
              <li>• Urgent issues: Response within 4 hours</li>
              <li>• Feature suggestions: Response within 3-5 business days</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-4xl px-6 py-10 text-sm text-slate-500 border-t border-slate-800/60">
        <p>© {new Date().getFullYear()} {companyName}. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Support
