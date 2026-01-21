export default function Landing({ onStart }) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-white flex items-center">
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <section>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            LogInsight <span className="text-sky-400">Pro</span>
          </h1>

          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            Transform raw server logs into <span className="text-white font-semibold">
            actionable operational insights</span>.  
            Monitor errors, traffic trends, and performance — all in one dashboard.
          </p>

          <ul className="mt-6 space-y-3 text-slate-300">
            <li>✔ Error & traffic analytics</li>
            <li>✔ Time-based monitoring</li>
            <li>✔ Performance & endpoint insights</li>
            <li>✔ Real-time visual dashboards</li>
          </ul>

          <div className="mt-8 flex gap-4">
            <button
              onClick={onStart}
              className="px-8 py-3 bg-sky-500 hover:bg-sky-600 rounded-xl font-semibold transition"
            >
              Get Started
            </button>

            <button
              className="px-8 py-3 border border-slate-600 rounded-xl hover:bg-slate-800 transition"
            >
              View Features
            </button>
          </div>
        </section>

        {/* RIGHT VISUAL */}
        <section className="hidden md:block">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <p className="text-slate-400 text-sm mb-3">Live Dashboard Preview</p>
            <div className="space-y-3">
              <div className="h-3 w-3/4 bg-sky-500 rounded"></div>
              <div className="h-3 w-2/3 bg-green-500 rounded"></div>
              <div className="h-3 w-1/2 bg-red-500 rounded"></div>
              <div className="h-24 bg-slate-900 rounded-lg mt-4"></div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
