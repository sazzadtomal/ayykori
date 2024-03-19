import ProgressBar from "@ramonak/react-progress-bar";


const styles="bg-[#11998E] bg-[#E7B860] bg-[#FF6A49] bg-[#7B7B7B] bg-[#61E7D3]"

const CustomProgressBar = ({value,color,title}) => {
  return (
    <div className="flex items-center text-xs font-bold">
    <div className="flex items-center gap-1 text-black basis-1/2 max-w-[50%]">
      <div className={`w-2 h-2 bg-[${color}] rounded-full`}></div>
      <div>{title}</div>
    </div>
    
    
    <div className="basis-1/2 max-w-[50%]">
      <ProgressBar completed={value}
       bgColor={color}
       height="8px"
       isLabelVisible={false}
       baseBgColor="#E0EDEA" 
       animateOnRender={true}/>
    </div>

     <div className="px-2">{value}%</div>
  
    </div>
  )
}

export default CustomProgressBar