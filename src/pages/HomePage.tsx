import { ArrowRight, Download, Store } from 'lucide-react'
import { useAppData } from '../hooks/useAppData'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function Skeleton() {
  return (
    <div className="mx-auto max-w-5xl p-6 animate-pulse">
      <div className="h-8 w-56 bg-slate-800 rounded mb-4" />
      <div className="h-5 w-80 bg-slate-800 rounded mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-48 bg-slate-800 rounded" />
        ))}
      </div>
    </div>
  )
}

function HomePage() {
  const { data, error, loading } = useAppData()

  useEffect(() => {
    // Update page title based on app data
    if (data?.data.results?.[0]) {
      const appName = data.data.results[0].trackName
      document.title = `${appName} - Official Website`
    } else {
      document.title = 'App Official Website'
    }
  }, [data])

  if (loading) return <Skeleton />

  if (error)
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <header className="border-b border-slate-800/60 sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 z-10">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <Store size={20} className="text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold">{import.meta.env.VITE_APP_NAME || 'App'}</h1>
                <p className="text-xs text-slate-400">Coming Soon</p>
              </div>
            </Link>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-8">
              <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-6">
                <Store size={40} className="text-white" />
              </div>
              <h1 className="text-4xl font-bold mb-4 tracking-tight">Coming Soon to App Store</h1>
              <p className="text-xl text-slate-400 mb-8">
                {import.meta.env.VITE_APP_NAME || 'Our app'} is not yet available on the App Store. 
                We're working hard to bring you an amazing experience.
              </p>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-8 border border-slate-700 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
              <p className="text-slate-400 mb-6">
                We'll notify you as soon as {import.meta.env.VITE_APP_NAME || 'the app'} becomes available for download.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${import.meta.env.VITE_SUPPORT_EMAIL || 'support@example.com'}?subject=Notify me when ${import.meta.env.VITE_APP_NAME || 'App'} is available`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-cyan-500 text-slate-900 font-medium hover:bg-cyan-400 transition"
                >
                  <ArrowRight size={16} /> Get Notified
                </a>
                <a
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-slate-800 hover:bg-slate-700 transition text-slate-200"
                  href="/?"
                >
                  Refresh Page
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-slate-800/20 rounded-lg p-6 border border-slate-800">
                <h3 className="text-lg font-semibold mb-2">In Development</h3>
                <p className="text-slate-400 text-sm">
                  Our team is actively developing and testing to ensure the best user experience.
                </p>
              </div>
              <div className="bg-slate-800/20 rounded-lg p-6 border border-slate-800">
                <h3 className="text-lg font-semibold mb-2">Quality First</h3>
                <p className="text-slate-400 text-sm">
                  We're committed to delivering a high-quality app that meets Apple's standards.
                </p>
              </div>
              <div className="bg-slate-800/20 rounded-lg p-6 border border-slate-800">
                <h3 className="text-lg font-semibold mb-2">Worth the Wait</h3>
                <p className="text-slate-400 text-sm">
                  The final product will be worth waiting for with amazing features and performance.
                </p>
              </div>
            </div>
          </div>
        </main>

        <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-500 border-t border-slate-800/60">
          <div className="flex flex-wrap gap-4 justify-between items-center">
            <p>© {new Date().getFullYear()} {import.meta.env.VITE_APP_NAME || 'App'}Development-Team</p>
            <nav className="flex gap-4">
              <Link to="/support" className="hover:text-slate-300 transition">Support</Link>
              <Link to="/privacy" className="hover:text-slate-300 transition">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-slate-300 transition">Terms of Service</Link>
            </nav>
            <p>Contact: {import.meta.env.VITE_SUPPORT_EMAIL || 'support@example.com'}</p>
          </div>
        </footer>
      </div>
    )

  const app = data?.data.results?.[0]

  if (!app)
    return (
      <div className="min-h-screen grid place-items-center p-6">
        <div className="max-w-lg w-full text-center">
          <h1 className="text-2xl font-semibold mb-2">App Not Found</h1>
          <p className="text-slate-400">Please check the App ID or try again later.</p>
        </div>
      </div>
    )

  const screenshots = app.screenshotUrls?.slice(0, 6) || []

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <header className="border-b border-slate-800/60 sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 z-10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            {app.artworkUrl512 && (
              <img src={app.artworkUrl512} alt="icon" className="h-10 w-10 rounded-xl shadow" />
            )}
            <div>
              <h1 className="text-lg font-semibold">{app.trackName}</h1>
              <p className="text-xs text-slate-400">v{app.version} · {data?.region?.toUpperCase()}</p>
            </div>
          </Link>
          <a
            href={app.trackViewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-cyan-500 text-slate-900 font-medium hover:bg-cyan-400 transition"
          >
            <Store size={16} /> App Store
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-2 tracking-tight">{app.trackName}</h2>
          <p className="text-slate-400 max-w-3xl">{app.description?.slice(0, 220) || 'This is an excellent application.'}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={app.trackViewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-slate-900 font-medium hover:bg-neutral-100 transition"
            >
              <Download size={16} /> Download Now
            </a>
          </div>
        </section>

        {screenshots.length > 0 && (
          <section>
            <h3 className="text-xl font-semibold mb-4">App Screenshots</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {screenshots.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`screenshot-${idx}`}
                  className="w-full h-56 object-cover rounded-lg border border-slate-800/60"
                />
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-500 border-t border-slate-800/60">
        <div className="flex flex-wrap gap-4 justify-between items-center">
          <p>© {new Date().getFullYear()} {import.meta.env.VITE_APP_NAME || '应用'}Development-Team</p>
          <nav className="flex gap-4">
            <Link to="/support" className="hover:text-slate-300 transition">Support</Link>
            <Link to="/privacy" className="hover:text-slate-300 transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition">Terms of Service</Link>
          </nav>
          <p>Contact: {import.meta.env.VITE_SUPPORT_EMAIL || 'support@example.com'}</p>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
