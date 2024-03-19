// Styling
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
const LineChart=()=>{
  
    const data = () => {
    return {
      labels: ["8PM", "10PM", "12PM", "2PM", "4PM", "6PM","8PM"],
      datasets: [
        {
          data: [50, 63, 58, 72, 64, 48, 92],
          fill: "start",
          backgroundColor: (context) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, "rgba(2,104,96,0.94)");
            gradient.addColorStop(1, "rgba(87,215,204,0.1)");
            return gradient;
          },
          borderColor: "#11998E",
          borderWidth:1
        }
      ]
    };
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks:{
            color:"#11998E"
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks:{
            color:"#11998E"
        }
      }
    },
    elements: {
      line: {
        tension: 0.35
      }
    },
    plugins: {
      legend:{
        display:false
    }
    },
    
  };

  return (
    <div>
      <Line data={data()} options={options} />
    </div>
  );
}


export default LineChart