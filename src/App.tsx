import SwaggerUI from "swagger-ui-react"
import { Outlet } from "react-router-dom"
import "swagger-ui-react/swagger-ui.css"
import Dropdown, { DropdownElementsProps } from './components/Dropdown'

const App = () => {
  return (
    <div>
      <aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a href="/usuarios" className="flex items-center p-2  rounded-lg text-white hover:bg-gray-100 hover:text-gray-900 group">
                <svg className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ml-3">Usuarios</span>
              </a>
            </li>
            <li>
              <Dropdown title="Home" elements={homeElements} />
            </li>
            <li>
              <Dropdown title="AudioBook" elements={audioBookElements} />
            </li>
            <li>
              <Dropdown title="Music" elements={musicElements} />
            </li>
            <li>
              <Dropdown title="Subscription" elements={subscriptionElements} />
            </li>
            <li>
              <Dropdown title="Creators" elements={creatorElements} />
            </li>
          </ul>
        </div>
      </aside>

      <div id="detail" className='relative pl-[16rem] w-full'>
        <Outlet />
      </div>
      { /*<SwaggerUI url="/data.json" />*/}
    </div>
  )
}

const homeElements: DropdownElementsProps[] = [
  {
    title: 'Crear',
    path: 'inicio'
  },
  {
    title: 'Editar',
    path: 'album/editar'
  },
  {
    title: 'Eliminar',
    path: 'album/eliminar'
  }
]

const audioBookElements: DropdownElementsProps[] = [
  {
    title: 'Crear',
    path: 'artist/crear'
  },
  {
    title: 'Editar',
    path: 'artist/editar'
  },
  {
    title: 'Eliminar',
    path: 'artist/eliminar'
  }
]

const musicElements: DropdownElementsProps[] = [
  {
    title: 'Crear',
    path: 'audiobook/crear'
  },
  {
    title: 'Editar',
    path: 'audiobook/editar'
  },
  {
    title: 'Eliminar',
    path: 'audiobook/eliminar'
  }
]

const subscriptionElements: DropdownElementsProps[] = [
  {
    title: 'Crear',
    path: 'audiobook/crear'
  },
  {
    title: 'Editar',
    path: 'audiobook/editar'
  },
  {
    title: 'Eliminar',
    path: 'audiobook/eliminar'
  }
]

const creatorElements: DropdownElementsProps[] = [
  {
    title: 'Crear',
    path: 'audiobook/crear'
  },
  {
    title: 'Editar',
    path: 'audiobook/editar'
  },
  {
    title: 'Eliminar',
    path: 'audiobook/eliminar'
  }
]

export default App