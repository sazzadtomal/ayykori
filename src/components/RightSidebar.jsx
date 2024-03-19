import JobCard from "./JobCard"

const RightSidebar = () => {
  return (
    <div className="border-l-4 border-[#11998E] p-4 flex flex-col items-center basis-1/4 shrink-0">
        <div className="p-8 flex flex-col items-center mb-16">
          <h2 className="font-semibold mt-4 mb-6 text-xl">Welcome back XTZ</h2>
          <button className="bg-primary-color text-white font-medium px-6 py-2 rounded-lg">
            + Create New Job
          </button>
        </div>

        <div className="flex flex-col w-full gap-2 overflow-y-auto">
          <h3 className="mb-2">Recent Added Jobs</h3>
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
  )
}

export default RightSidebar