import { Doughnut } from "react-chartjs-2";
import { Icon } from "@iconify/react";
import { Chart as ChartJS, ArcElement } from "chart.js";

ChartJS.register(ArcElement);



const classes="text-[#11998E] text-[#E7B860] text-[#FF6A49]"

const StatData = ({title,value,primary,secondary,mainPercentage, secondaryPercentage}) => {

    const data = {
        datasets: [
          {
            data: [mainPercentage,100-mainPercentage],
            backgroundColor: [primary, secondary],
            borderWidth: 0,
            borderRadius: 5,
          },
        ],
      };
      
      const dougnutLabel = {
        id: "doungnutLabel",
        afterDatasetsDraw(chart) {
          const { ctx } = chart;
          const centerX = chart.getDatasetMeta(0).data[0].x;
          const centerY = chart.getDatasetMeta(0).data[0].y+4;
      
          ctx.save();
          ctx.font = "bold 12px sans-serif";
          ctx.fillStyle = primary;
          ctx.textAlign = "center";
          ctx.fillText("+"+mainPercentage+"%", centerX, centerY);
        },
      };




  return (
    <div className="px-4 basis-1/3 flex items-center">
        <div className="relative p-4">
        <Icon icon="bi:three-dots" className="absolute top-0 right-0 text-xl text-gray" />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">{title}</h3>
            <h4 className="text-2xl font-bold">{value}</h4>
            <h5 className={`flex text-[${primary}] text-xs items-center gap-2`}>
              <div className={`bg-shade rounded-full p-1 `}>
                <Icon icon="ph:arrow-up-bold" className="rotate-45"/>
              </div>
              <span>+{secondaryPercentage}% inc</span>
            </h5>
          </div>
          <div className="flex justify-center text-shade items-center w-16">
            <Doughnut
              data={data}
              options={{ cutout: "80%" }}
              plugins={[dougnutLabel]}
            />
        </div>
        </div>
          </div>
    </div>
  )
}

export default StatData