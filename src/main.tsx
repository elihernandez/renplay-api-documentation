import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ErrorPage from './components/error-page.tsx'
import Users from './routes/users.tsx'
import Home from './routes/home.tsx'
import AudioBooks from './routes/audiobooks.tsx'
import Music from './routes/music.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Subscription from './routes/subscription.tsx'
import Creators from './routes/creators.tsx'
import './index.css'
import 'flowbite'
import Album from './routes/album/album.tsx'
import Playlist from './routes/playlist.tsx'
import CreateAlbum from './routes/album/create.tsx'
import Albums from './routes/album/albums.tsx'
import EditAlbum from './routes/album/edit.tsx'
import DeleteAlbum from './routes/album/delete.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'usuarios',
        element: <Users />
      },
      {
        path: 'inicio',
        element: <Home />
      },
      {
        path: 'audiolibros',
        element: <AudioBooks />
      },
      {
        path: 'musica',
        element: <Music />
      },
      {
        path: 'suscripcion',
        element: <Subscription />
      },
      {
        path: 'creadores',
        element: <Creators />
      },
      {
        path: 'album',
        element: <Album />,
        // children: [
        //   {
        //     path: 'crear',
        //     element: <CreateAlbum />
        //   }
        // ]
      },
      {
        path: 'albums',
        element: <Albums />
      },
      {
        path: 'album/crear',
        element: <CreateAlbum />
      },
      {
        path: 'album/editar',
        element: <EditAlbum />
      },
      {
        path: 'album/eliminar',
        element: <DeleteAlbum />
      },
      {
        path: 'playlist',
        element: <Playlist />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)