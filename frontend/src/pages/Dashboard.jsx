import { useState } from "react";
import UploadBox from "../components/UploadBox";
import KpiCard from "../components/KpiCard";

import ErrorBarChart from "../components/ErrorBarChart";
import HourlyLineChart from "../components/HourlyLineChart";
import RequestVolumeChart from "../components/RequestVolumeChart";
import ErrorRateChart from "../components/ErrorRateChart";
import EndpointErrorChart from "../components/EndpointErrorChart";
import ResponseTimeChart from "../components/ResponseTimeChart";

export default function Dashboard() {
  const [result, setResult] = useState(null);

  const peakHour =
    result &&
    Object.entries(result.hourly_errors).reduce(
      (max, curr) => (curr[1] > max[1] ? curr : max),
      ["-", 0]
    )[0];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      
      {/* HEADER BAR */}
      <header className="border-b border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            LogInsight <span className="text-sky-400">Pro</span>
          </h1>
          <p className="text-slate-400 text-sm">
            Log Analytics & Observability Dashboard
          </p>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-8 py-10 space-y-16">

        {/* UPLOAD */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <UploadBox onResult={setResult} />
        </div>

        {result && (
          <>
            {/* KPI SECTION */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-300">
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
              <h2 className="text-2xl font-semibold mb-2">
                Visual Analytics
              </h2>
              <p className="text-slate-400 mb-6">
                Traffic patterns, error severity, endpoint health, and performance metrics
              </p>

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
            <section className="space-y-12">
              <h2 className="text-2xl font-semibold">
                Detailed Analysis
              </h2>

              {/* Error Codes */}
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Error Code Breakdown
                </h3>
                <ul className="text-slate-300">
                  {Object.entries(result.error_counts).map(([code, count]) => (
                    <li key={code}>HTTP {code}: {count}</li>
                  ))}
                </ul>
              </div>

              {/* Top IPs */}
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Top IP Addresses
                </h3>
                <table className="w-[420px] border-collapse">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2">IP</th>
                      <th className="text-left py-2">Errors</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(result.top_ips).map(([ip, count]) => (
                      <tr key={ip} className="border-b border-slate-800">
                        <td className="py-2">{ip}</td>
                        <td className="py-2">{count}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}
      </section>
    </main>
  );
}

/* ---------- Reusable Dashboard Card ---------- */
function DashboardCard({ children }) {
  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow">
      {children}
    </div>
  );
}
