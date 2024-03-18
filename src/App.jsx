import {Routes, Route} from "react-router-dom"
import Layout from "./components/Layout"
import Application from "./pages/Application"
import Dashboard from "./pages/Dashboard"
function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="/application" element={<Application/>}/>
        <Route path="/calender" element={<div>Calender</div>}/>
        <Route path="/jobs" element={<div>Jobs</div>}/>
        <Route path="/message" element={<div>message</div>}/>
        <Route path="/career-site" element={<div>Career Site</div>}/>
        <Route path="/my-referrals" element={<div>My referrals</div>}/>
      </Route>
    </Routes>
  )
}

export default App
