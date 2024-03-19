import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, BarElement,CategoryScale, LinearScale,Tooltip,Legend } from "chart.js"


ChartJS.register(
    BarElement,CategoryScale,LinearScale,Tooltip,Legend
)
const StackedBarChart = () => {

    const data={
        labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
        datasets:[
            {data:[3,6,9,8,4,2,3], backgroundColor:"#FF6A49",borderRadius: 5,barThickness: 6,},
            {data:[7,2,5,2,4,6,2], backgroundColor:"#E7B860",borderRadius: 5,barThickness: 6,},
            {data:[2,6,9,8,3,9,1], backgroundColor:"#11998E",borderRadius: 5,barThickness: 6,},
        ],
    }

    const options={
        scales:{
            x:{
                stacked:true,
                grid:{
                    display:false
                },
                ticks:{
                    color:"#11998E"
                }
                

            },
            y:{
                stacked:true,
                grid:{
                    borderDash: [8, 4],
                    color:"#B9F2E5"
                },
                border:{
                    dash:[12,6]
                },
                ticks:{
                    color:"#11998E"
                }

            },
        },
        plugins:{
            legend:{
                display:false
            }
        }

    }


  return (
    <div >
        <Bar data={data} options={options}></Bar></div>
  )
}

export default StackedBarChart