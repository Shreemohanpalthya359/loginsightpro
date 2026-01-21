import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ResponseTimeChart({ avgResponseTime }) {
  const data = {
    labels: Object.keys(avgResponseTime),
    datasets: [
      {
        label: "Avg Response Time (ms)",
        data: Object.values(avgResponseTime),
        backgroundColor: "#22c55e",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    animation: {
      duration: 1200,
      easing: "easeOutQuart",
    },
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Average Response Time per Endpoint",
        color: "#e5e7eb",
        font: { size: 16, weight: "bold" },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "API Endpoint",
          color: "#cbd5f5",
          font: { size: 13, weight: "bold" },
        },
        ticks: { color: "#94a3b8" },
        grid: { color: "#1e293b" },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Response Time (ms)",
          color: "#cbd5f5",
          font: { size: 13, weight: "bold" },
        },
        ticks: { color: "#94a3b8" },
        grid: { color: "#1e293b" },
      },
    },
  };

  return <Bar data={data} options={options} />;
}
