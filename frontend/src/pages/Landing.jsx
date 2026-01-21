export default function Landing({ onStart }) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-white flex items-center justify-center">
      <div className="max-w-3xl text-center px-6">

        <h1 className="text-5xl font-extrabold mb-6">
          LogInsight <span className="text-sky-400">Pro</span>
        </h1>

        <p className="text-lg text-slate-300 mb-8">
          Transform raw server logs into actionable insights.
          Monitor errors, traffic patterns, and performance metrics
          with a professional analytics dashboard.
        </p>

        <button
          onClick={onStart}
          className="px-8 py-3 bg-sky-500 hover:bg-sky-600 rounded-xl text-lg font-semibold transition"
        >
          Get Started
        </button>

      </div>
    </main>
  );
}
