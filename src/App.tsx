import { Outlet } from "react-router-dom"
import "swagger-ui-react/swagger-ui.css"
import { Sidebar } from './components/Sidebar'

const App = () => {
  return (
    <div>
      <Sidebar />
      <div id="detail" className='relative pl-[16rem] w-full'>
        <Outlet />
      </div>
    </div>
  )
}

export default App