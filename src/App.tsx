import SwaggerUI from "swagger-ui-react"
import { Outlet } from "react-router-dom"
import "swagger-ui-react/swagger-ui.css"
import Dropdown, { DropdownElementsProps } from './components/Dropdown'

const estiloBoton = 'flex items-center p-2  rounded-lg text-white hover:bg-gray-100 hover:text-gray-900 group'
const icono = 'w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900'
const pathUno = 'M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z'
const pathDos = 'M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z'

const App = () => {
  return (
    <div>
      <aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a href="/usuarios" className={estiloBoton}>
                <svg className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 aria-hidden= true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                <span className="ml-3">Usuarios</span>
              </a>
              <a href="/inicio" className={estiloBoton}>
                <svg className={icono} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d={pathUno} />
                  <path d={pathDos} />
                </svg>
                <span className="ml-3">Home</span>
              </a>
              <a href="/audiolibros" className={estiloBoton}>
                <svg className={icono} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d={pathUno} />
                  <path d={pathDos} />
                </svg>
                <span className="ml-3">AudioBooks</span>
              </a>
              <a href="/musica" className={estiloBoton}>
                <svg className={icono} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d={pathUno} />
                  <path d={pathDos} />
                </svg>
                <span className="ml-3">Music</span>
              </a>
              <a href="/suscripcion" className={estiloBoton}>
                <svg className={icono} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d={pathUno} />
                  <path d={pathDos} />
                </svg>
                <span className="ml-3">Subscription</span>
              </a>
              <a href="/creadores" className={estiloBoton}>
                <svg className={icono} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d={pathUno} />
                  <path d={pathDos} />
                </svg>
                <span className="ml-3">Creators</span>
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