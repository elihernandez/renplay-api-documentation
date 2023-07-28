import SwaggerUI from "swagger-ui-react"
import { Outlet } from "react-router-dom"
import "swagger-ui-react/swagger-ui.css"
import Dropdown, { DropdownElementsProps } from './components/Dropdown'

const estiloBoton = 'flex items-center p-2  rounded-lg text-white hover:bg-gray-100 hover:text-gray-900 group'
const icono = 'w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900'


const App = () => {
  return (
    <div>
      <aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a href="/usuarios" className={estiloBoton}>
                <svg className={icono} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="ml-3">Usuarios</span>
              </a>
              <a href="/inicio" className={estiloBoton}>
                <svg className={icono} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                <span className="ml-3">Home</span>
              </a>
              <a href="/audiolibros" className={estiloBoton}>
                <svg className={icono} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d='M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z' />
                </svg>
                <span className="ml-3">AudioBooks</span>
              </a>
              <a href="/musica" className={estiloBoton}>
                <svg className={icono} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d='M14.316.051A1 1 0 0 0 13 1v8.473A4.49 4.49 0 0 0 11 9c-2.206 0-4 1.525-4 3.4s1.794 3.4 4 3.4 4-1.526 4-3.4a2.945 2.945 0 0 0-.067-.566c.041-.107.064-.22.067-.334V2.763A2.974 2.974 0 0 1 16 5a1 1 0 0 0 2 0C18 1.322 14.467.1 14.316.051ZM10 3H1a1 1 0 0 1 0-2h9a1 1 0 1 1 0 2Z' />
                  <path d='M10 7H1a1 1 0 0 1 0-2h9a1 1 0 1 1 0 2Zm-5 4H1a1 1 0 0 1 0-2h4a1 1 0 1 1 0 2Z' />
                </svg>
                <span className="ml-3">Music</span>
              </a>
              <a href="/suscripcion" className={estiloBoton}>
                <svg className={icono} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
                </svg>
                <span className="ml-3">Subscription</span>
              </a>
              <a href="/creadores" className={estiloBoton}>
                <svg className={icono} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d='M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z' />
                </svg>
                <span className="ml-3">Creators</span>
              </a>
              <a href="/album" className={estiloBoton}>
                <svg className={icono} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d='M1 19h13a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H0v10a1 1 0 0 0 1 1ZM0 6h7.443l-1.2-1.6a1 1 0 0 0-.8-.4H1a1 1 0 0 0-1 1v1Z' />
                  <path d='M17 4h-4.557l-2.4-3.2a2.009 2.009 0 0 0-1.6-.8H4a2 2 0 0 0-2 2h3.443a3.014 3.014 0 0 1 2.4 1.2l2.1 2.8H14a3 3 0 0 1 3 3v8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z' />
                </svg>
                <span className="ml-3">Album</span>
              </a>
              <a href="/playlist" className={estiloBoton}>
                <svg className={icono} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d='M1 19h13a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H0v10a1 1 0 0 0 1 1ZM0 6h7.443l-1.2-1.6a1 1 0 0 0-.8-.4H1a1 1 0 0 0-1 1v1Z' />
                  <path d='M17 4h-4.557l-2.4-3.2a2.009 2.009 0 0 0-1.6-.8H4a2 2 0 0 0-2 2h3.443a3.014 3.014 0 0 1 2.4 1.2l2.1 2.8H14a3 3 0 0 1 3 3v8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z' />
                </svg>
                <span className="ml-3">Playlist</span>
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