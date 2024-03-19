import { Icon } from "@iconify/react"
const ChartHeader = ({title}) => {
  return (
    <div className="flex items-center text-xs justify-between mb-4">
            <h3 className="font-bold">{title}</h3>
            <div className="flex">
                <div className="p-1 bg-shade rounded text-primary-color">
                    <Icon icon="clarity:date-solid"/>
                </div>
                <select name="" id="" className="font-bold">
                <option value="week">Week</option>
                <option value="month">month</option>
                <option value="Year">Year</option>
            </select>
            </div>
          
        </div>
  )
}

export default ChartHeader