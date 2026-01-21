export default function Landing({ onStart }) {
  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 backdrop-blur-md bg-opacity-95 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-3xl font-black text-black tracking-tight">LogInsight</div>
          <div className="space-x-10 flex items-center">
            <a href="#features" className="text-gray-700 hover:text-black transition font-semibold text-sm">Features</a>
            <a href="#benefits" className="text-gray-700 hover:text-black transition font-semibold text-sm">Why Us</a>
            <button
              onClick={onStart}
              className="px-6 py-2 bg-black text-white rounded-full font-bold text-sm hover:shadow-lg transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 pt-32 pb-32 px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-black rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-8 inline-block">
            <span className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-full text-sm font-semibold text-gray-700">
              ✨ Powerful Log Analysis Platform
            </span>
          </div>

          <h1 className="text-7xl md:text-8xl font-black mb-8 text-black leading-tight tracking-tight">
            Transform Logs Into Insights
          </h1>

          <p className="text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
            Professional log analysis made simple. Monitor errors, track performance, and understand your system with powerful analytics.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={onStart}
              className="px-10 py-4 bg-black text-white rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition transform"
            >
              Launch Dashboard →
            </button>
            <button className="px-10 py-4 border-2 border-black text-black rounded-full text-lg font-bold hover:bg-black hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-black mb-2">10K+</div>
            <div className="text-gray-400 font-semibold">Logs Analyzed</div>
          </div>
          <div>
            <div className="text-5xl font-black mb-2">99.9%</div>
            <div className="text-gray-400 font-semibold">Uptime</div>
          </div>
          <div>
            <div className="text-5xl font-black mb-2">500+</div>
            <div className="text-gray-400 font-semibold">Active Users</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-6 text-black">Core Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to monitor and analyze your logs effectively</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white border-2 border-black p-10 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition transform duration-300">
              <div className="text-7xl font-black text-gray-200 mb-6 group-hover:text-black transition">01</div>
              <h3 className="text-3xl font-black mb-4 text-black">Error Tracking</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Real-time error monitoring with detailed insights into failures and patterns across your entire system.</p>
              <div className="mt-6 h-1 w-0 bg-black group-hover:w-full transition-all duration-300"></div>
            </div>

            <div className="group bg-white border-2 border-black p-10 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition transform duration-300">
              <div className="text-7xl font-black text-gray-200 mb-6 group-hover:text-black transition">02</div>
              <h3 className="text-3xl font-black mb-4 text-black">Performance Metrics</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Track response times and system performance across all endpoints with comprehensive analytics.</p>
              <div className="mt-6 h-1 w-0 bg-black group-hover:w-full transition-all duration-300"></div>
            </div>

            <div className="group bg-white border-2 border-black p-10 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition transform duration-300">
              <div className="text-7xl font-black text-gray-200 mb-6 group-hover:text-black transition">03</div>
              <h3 className="text-3xl font-black mb-4 text-black">Traffic Analysis</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Understand request patterns and identify traffic trends affecting your system performance.</p>
              <div className="mt-6 h-1 w-0 bg-black group-hover:w-full transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="bg-black text-white py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-6xl font-black text-center mb-20">Why Choose LogInsight?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-white bg-opacity-5 border border-white border-opacity-20 backdrop-blur-md p-8 rounded-2xl hover:bg-opacity-10 hover:border-opacity-40 transition">
              <div className="flex items-start gap-4">
                <div className="text-4xl">⚡</div>
                <div>
                  <h3 className="text-2xl font-black mb-3">Real-Time Monitoring</h3>
                  <p className="text-gray-300 text-lg">Get instant alerts and live updates on critical issues before they impact your users.</p>
                </div>
              </div>
            </div>

            <div className="group bg-white bg-opacity-5 border border-white border-opacity-20 backdrop-blur-md p-8 rounded-2xl hover:bg-opacity-10 hover:border-opacity-40 transition">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🧠</div>
                <div>
                  <h3 className="text-2xl font-black mb-3">Intelligent Analytics</h3>
                  <p className="text-gray-300 text-lg">Advanced algorithms uncover patterns and predict potential problems automatically.</p>
                </div>
              </div>
            </div>

            <div className="group bg-white bg-opacity-5 border border-white border-opacity-20 backdrop-blur-md p-8 rounded-2xl hover:bg-opacity-10 hover:border-opacity-40 transition">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🔌</div>
                <div>
                  <h3 className="text-2xl font-black mb-3">Easy Integration</h3>
                  <p className="text-gray-300 text-lg">Connect your logs in minutes with our simple upload and configuration process.</p>
                </div>
              </div>
            </div>

            <div className="group bg-white bg-opacity-5 border border-white border-opacity-20 backdrop-blur-md p-8 rounded-2xl hover:bg-opacity-10 hover:border-opacity-40 transition">
              <div className="flex items-start gap-4">
                <div className="text-4xl">📊</div>
                <div>
                  <h3 className="text-2xl font-black mb-3">Professional Dashboards</h3>
                  <p className="text-gray-300 text-lg">Beautiful dashboards and detailed reports to share with your team instantly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-6xl font-black mb-8 text-black">Ready to Analyze Your Logs?</h2>
          <p className="text-2xl text-gray-700 mb-12 leading-relaxed">
            Start today and gain valuable insights into your system performance in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={onStart}
              className="px-10 py-4 bg-black text-white rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition transform"
            >
              Launch Dashboard Now →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="text-2xl font-black mb-4">LogInsight</h4>
              <p className="text-gray-400">Professional log analysis made simple.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2026 LogInsight. Professional log analysis made simple.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}