import { Doughnut } from "react-chartjs-2";
import { Icon } from "@iconify/react";
import { Chart as ChartJS, ArcElement } from "chart.js";

ChartJS.register(ArcElement);

const ByGender = ({mainPercentage}) => {

    const data = {
        datasets: [
          {
            data: [mainPercentage,100-mainPercentage],
            backgroundColor: ["#11998E", "#E7B860"],
            borderWidth: 0,
            borderRadius: 5,
          },
        ],
      };


  return (
    <div className="flex text-xs flex-col m-4 p-2 items-center flex-grow">
        <h3 className="font-bold mb-2 w-full">Candidates by Gender</h3>
        <div className="h-[80%] flex justify-center items-center">
            <div className="absolute p-6 bg-background shadow-lg text-primary-color flex justify-center items-center rounded-full">
                <Icon icon="ph:gender-intersex-light"/>
            </div>
            <Doughnut
                  data={data}
                  options={{ cutout: "80%" }}
                />
        </div>
        <div className="flex w-full p-2 justify-evenly">
            <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary-color rounded-full"></div>
                        <div>Male</div>
            </div>
            <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#E7B860] rounded-full"></div>
                        <div>Female</div>
            </div>
        </div>

    </div>
  )
}

export default ByGender