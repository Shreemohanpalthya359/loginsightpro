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

export default function ErrorBarChart({ errorCounts }) {
  const data = {
    labels: Object.keys(errorCounts),
    datasets: [
      {
        label: "Errors",
        data: Object.values(errorCounts),
        backgroundColor: "#ef4444",
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
        text: "HTTP Error Code Distribution",
        color: "#e5e7eb",
        font: { size: 16, weight: "bold" },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "HTTP Status Codes",
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
          text: "Error Count",
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
