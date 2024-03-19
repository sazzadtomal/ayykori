import StackedBarChart from "./StackedBarChart"
import ChartHeader from "./ChartHeader"
const BarChartContainer = () => {
  return (
    <div className="p-2 m-4 w-[65%]">
        <ChartHeader title="Statistics of Active Applications"/>
        <StackedBarChart/>
    </div>
  )
}

export default BarChartContainer