import { Icon } from "@iconify/react"
import { useState } from "react"

const Search = () => {
  const [input,setInput]=useState()
  return (
    <form action=""
            className="flex items-center absolute top-6 right-4 w-[30%] z-10"
          >
            <input value={input} onChange={(e)=>setInput(e.target.value)}
              type="text"
              placeholder="Search"
              className="bg-shade px-4 py-2 w-full text-xs rounded"
            />
            <button className="bg-primary-color text-white rounded  p-2">
              <Icon icon="basil:search-solid" />
            </button>
          </form>
  )
}

export default Search