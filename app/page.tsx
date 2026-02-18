import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Build AI-Powered SaaS
            <span className="text-gold"> Faster</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Deploy production-ready landing pages in minutes. 
            No design skills required. Just add your content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors">
              Get Started Free
            </button>
            <button className="px-8 py-4 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-white transition-colors">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Everything You Need
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-gold rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-700">Next.js 14 with edge runtime. Pages load instantly, SEO is automatic.</p>
            </div>
            
            <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-gold rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Fully Responsive</h3>
              <p className="text-gray-700">Looks perfect on every device. Mobile-first design out of the box.</p>
            </div>
            
            <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-gold rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">TypeScript Ready</h3>
              <p className="text-gray-700">Type-safe code means fewer bugs and easier maintenance as you scale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-peach">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Launch Your Product?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Join 100+ founders who deployed in under 10 minutes.
          </p>
          <button className="px-12 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors text-lg">
            Get Started Now →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p>© 2026 OpenClaw Templates - Built with AI, for AI builders</p>
        </div>
      </footer>
    </main>
  )
}