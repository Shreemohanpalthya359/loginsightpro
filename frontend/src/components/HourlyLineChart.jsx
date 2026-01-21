import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function HourlyLineChart({ hourlyErrors }) {
  const data = {
    labels: Object.keys(hourlyErrors).map((h) => `${h}:00`),
    datasets: [
      {
        label: "Errors",
        data: Object.values(hourlyErrors),
        borderColor: "#22c55e",
        backgroundColor: "#22c55e",
        tension: 0.4,
        pointRadius: 5,
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
        text: "Hourly Error Trend",
        color: "#e5e7eb",
        font: { size: 16, weight: "bold" },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time (Hour)",
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
          text: "Number of Errors",
          color: "#cbd5f5",
          font: { size: 13, weight: "bold" },
        },
        ticks: { color: "#94a3b8" },
        grid: { color: "#1e293b" },
      },
    },
  };

  return <Line data={data} options={options} />;
}
