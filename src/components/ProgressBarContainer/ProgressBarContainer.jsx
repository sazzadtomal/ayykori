import ChartHeader from "../ChartHeader"
import CustomProgressBar from "../CustomProgressBar"
import styles from "./progress.module.css"

const ProgressBarContainer = () => {

  return (
    <div className="flex-grow p-2 m-4 flex flex-col">
        <ChartHeader title="Acquisitions"/>
        <div className="flex flex-col mt-2 flex-grow justify-between">
          <CustomProgressBar title="Applications" value={80} color="#11998E"/>
          <CustomProgressBar title="Shortlisted" value={55} color="#E7B860"/>
          <CustomProgressBar title="Rejected" value={47} color="#FF6A49"/>
          <CustomProgressBar title="On Hold" value={35} color="#7B7B7B"/>
          <CustomProgressBar title="Finalised" value={24} color="#61E7D3"/>
        </div>
    
    </div>
  )
}

export default ProgressBarContainer