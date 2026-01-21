import { useState } from "react";
import UploadBox from "../components/UploadBox";
import KpiCard from "../components/KpiCard";

import ErrorBarChart from "../components/ErrorBarChart";
import HourlyLineChart from "../components/HourlyLineChart";
import RequestVolumeChart from "../components/RequestVolumeChart";
import ErrorRateChart from "../components/ErrorRateChart";
import EndpointErrorChart from "../components/EndpointErrorChart";
import ResponseTimeChart from "../components/ResponseTimeChart";

export default function Dashboard({ onBack }) {
  const [result, setResult] = useState(null);

  const peakHour =
    result &&
    Object.entries(result.hourly_errors).reduce(
      (max, curr) => (curr[1] > max[1] ? curr : max),
      ["-", 0]
    )[0];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 flex flex-col">
      
      {/* HEADER BAR */}
      <header className="border-b border-black bg-white sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-5 py-2 bg-black text-white hover:bg-gray-800 rounded-full transition font-bold text-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
            <div>
              <h1 className="text-3xl font-black text-black">LogInsight</h1>
              <p className="text-xs text-gray-600 font-semibold">Log Analytics Dashboard</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-black text-black">
              📊 Dashboard
            </p>
            <p className="text-sm text-gray-600 font-semibold">Real-time Analysis</p>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <section className="flex-1 max-w-7xl mx-auto w-full px-8 py-12 space-y-12">

        {/* UPLOAD */}
        <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-black p-10 rounded-2xl shadow-lg hover:shadow-xl transition">
          <UploadBox onResult={setResult} />
        </div>

        {result && (
          <>
            {/* KPI SECTION */}
            <section>
              <h2 className="text-4xl font-black mb-8 text-black">
                Overview
              </h2>
              <div className="flex flex-wrap gap-6">
                <KpiCard title="Total Requests" value={result.total_requests} />
                <KpiCard title="Total Errors" value={result.total_errors} />
                <KpiCard title="Peak Error Hour" value={`${peakHour}:00`} />
              </div>
            </section>

            {/* VISUAL ANALYTICS */}
            <section>
              <div className="mb-10">
                <h2 className="text-4xl font-black mb-3 text-black">
                  Visual Analytics
                </h2>
                <p className="text-lg text-gray-700 font-semibold">
                  Traffic patterns, error severity, endpoint health, and performance metrics
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <DashboardCard>
                  <ErrorBarChart errorCounts={result.error_counts} />
                </DashboardCard>

                <DashboardCard>
                  <HourlyLineChart hourlyErrors={result.hourly_errors} />
                </DashboardCard>

                <DashboardCard>
                  <RequestVolumeChart hourlyRequests={result.hourly_requests} />
                </DashboardCard>

                <DashboardCard>
                  <ErrorRateChart errorRate={result.error_rate} />
                </DashboardCard>

                <DashboardCard>
                  <EndpointErrorChart endpointErrors={result.endpoint_errors} />
                </DashboardCard>

                <DashboardCard>
                  <ResponseTimeChart avgResponseTime={result.avg_response_time} />
                </DashboardCard>
              </div>
            </section>

            {/* TABLE ANALYSIS */}
            <section className="space-y-10">
              <h2 className="text-4xl font-black text-black">
                Detailed Analysis
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Error Codes */}
                <div className="bg-white border-2 border-black rounded-2xl p-10 shadow-lg hover:shadow-xl transition">
                  <h3 className="text-2xl font-black mb-8 text-black">
                    Error Code Breakdown
                  </h3>
                  <ul className="space-y-4">
                    {Object.entries(result.error_counts).map(([code, count]) => (
                      <li key={code} className="flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 rounded-xl border-2 border-black transition group">
                        <span className="font-black text-black text-lg group-hover:translate-x-1 transition">HTTP {code}</span>
                        <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-black">{count}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Top IPs */}
                <div className="bg-white border-2 border-black rounded-2xl p-10 shadow-lg hover:shadow-xl transition">
                  <h3 className="text-2xl font-black mb-8 text-black">
                    Top IP Addresses
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-black">
                          <th className="text-left py-4 px-4 font-black text-black text-lg">IP Address</th>
                          <th className="text-right py-4 px-4 font-black text-black text-lg">Errors</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(result.top_ips).map(([ip, count]) => (
                          <tr key={ip} className="border-b-2 border-gray-300 hover:bg-gray-50 transition group">
                            <td className="py-4 px-4 text-gray-800 font-semibold group-hover:text-black transition">{ip}</td>
                            <td className="py-4 px-4 text-right">
                              <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-black">{count}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </section>

      {/* Footer - Fixed at bottom */}
      <footer className="border-t-2 border-black bg-black text-white py-6 mt-16 w-full">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-sm font-semibold text-gray-400">&copy; 2026 LogInsight. Professional log analysis made simple.</p>
        </div>
      </footer>
    </main>
  );
}

/* ---------- Reusable Dashboard Card ---------- */
function DashboardCard({ children }) {
  return (
    <div className="bg-white border-2 border-black p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition transform duration-300 group">
      {children}
    </div>
  );
}