import LineChart from "./LineChart"
import ChartHeader from "./ChartHeader"

const LineChartContainer = () => {
  return (
    <div className="p-2 m-4 w-[65%] h-full">
    <ChartHeader title="Applications Received Time"/>
    <LineChart/>
</div>
  )
}

export default LineChartContainer