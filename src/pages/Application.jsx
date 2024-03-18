import searchIcon from "../assets/search.svg"
import filterIcon from "../assets/filter.svg"

const Application = () => {
  return (
    <div className='px-6 py-8 bg-background flex-grow'>
      <h2 className='font-bold mb-8'>Application</h2>
      <div className='my-4'>
        <h3 className="mb-2">On Going Recruitment</h3>
        <select name="" id="" className='p-4 pr-24 rounded-lg bg-shade'>
          <option value="jr.ui/uxdesigner">Jr.UI/UX Designer</option>
          <option value="jr.ui/uxdesigner">Jr.UI/UX Designer</option>
          <option value="jr.ui/uxdesigner">Jr.UI/UX Designer</option>
          <option value="jr.ui/uxdesigner">Jr.UI/UX Designer</option>
          <option value="jr.ui/uxdesigner">Jr.UI/UX Designer</option>
        </select>
      </div>
      <div className='flex bg-white px-6  justify-between rounded-lg items-center'>
        <ul className='flex flex-wrap [&>*]:px-2 [&>*]:mx-2 [&>*]:py-4   [&>*]:font-bold flex-grow'><li>All(165)</li>
        <li>Shortlisted(50)</li>
        <li>In process(5)</li>
        <li>On Hold(25)</li>
        <li>Rejected(54)</li></ul>

        <div className="flex items-center">
          <div className="flex p-2">
            <img src={searchIcon} alt="search" />
            <span className="mx-2">
              Search
            </span>
          </div>
          <div className="flex p-2">
            <img src={filterIcon} alt="filter" />
            <span className="mx-2">
              Filter
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Application