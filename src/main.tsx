import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ErrorPage from './components/error-page.tsx'
import Users from './routes/users/login.tsx'
import Home from './routes/home/home.tsx'
import AudioBooks from './routes/audiobook/audiobooks.tsx'
import Music from './routes/track/add.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Subscription from './routes/subscription.tsx'
import Creators from './routes/artist/artist.tsx'
import './index.css'
import 'flowbite'
import Album from './routes/album/album.tsx'
import Playlist from './routes/playlist/playlist.tsx'
import CreateAlbum from './routes/album/create.tsx'
import Albums from './routes/album/albums.tsx'
import EditAlbum from './routes/album/edit.tsx'
import DeleteAlbum from './routes/album/delete.tsx'
import AudioBook from './routes/audiobook/audiobooks.tsx'
import Spotlight from './routes/home/spotlight.tsx'
import Playlists from './routes/playlist/playlists.tsx'
import CreatePlaylist from './routes/playlist/create.tsx'
import EditPlaylist from './routes/playlist/edit.tsx'
import DeletePlaylist from './routes/playlist/delete.tsx'
import Artist from './routes/artist/artist.tsx'
import Artists from './routes/artist/artists.tsx'
import CreateArtists from './routes/artist/create.tsx'
import CreateArtist from './routes/artist/create.tsx'
import EditArtists from './routes/artist/edit.tsx'
import DeleteArtist from './routes/artist/delete.tsx'
import CreateTrack from './routes/track/create.tsx'
import EditTrack from './routes/track/edit.tsx'
import DeleteTrack from './routes/track/delete.tsx'
import AddTrackPlaylist from './routes/track/add.tsx'
import DeleteTrackPlaylist from './routes/track/deleteTrackPl.tsx'
import GetTracklink from './routes/track/tracklink.tsx'
import Status from './routes/subscription/status.tsx'
import Packs from './routes/subscription/packs.tsx'
import Demo from './routes/subscription/demo.tsx'
import ValidateCupon from './routes/subscription/cupon.tsx'
import Subscribe from './routes/subscription/subscribe.tsx'
import Info from './routes/users/info.tsx'
import CreateUser from './routes/users/create.tsx'
import ValidationUser from './routes/users/validation.tsx'
import DeleteUser from './routes/users/delete.tsx'
import Login from './routes/users/login.tsx'
import AddProfile from './routes/profile/add.tsx'
import GetProfiles from './routes/profile/profiles.tsx'
import DeleteProfile from './routes/profile/delete.tsx'
import ImgProfile from './routes/profile/img.tsx'
import NameUpdate from './routes/update/name.tsx'
import MasterpinUpdate from './routes/update/masterpin.tsx'
import PassUpdate from './routes/update/pass.tsx'
import EmailUpdate from './routes/update/email.tsx'
import ResetPass from './routes/update/resetPass.tsx'
import PhoneUpdate from './routes/update/phone.tsx'
import UserUpdate from './routes/update/user.tsx'
import Devices from './routes/device/devices.tsx'
import DeleteDevices from './routes/device/delete.tsx'
import ValidateEmail from './routes/email/validate.tsx'
import VerifyEmail from './routes/email/verify.tsx'
import VerifyPhone from './routes/phone/verify.tsx'
import ValidatePhone from './routes/phone/validate.tsx'
import UpdatePhone from './routes/phone/update.tsx'
import GetFeedback from './routes/feedback/feedback.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'users',
        element: <Users />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'spotlight',
        element: <Spotlight />
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
        path: 'album/create',
        element: <CreateAlbum />
      },
      {
        path: 'album/edit',
        element: <EditAlbum />
      },
      {
        path: 'album/delete',
        element: <DeleteAlbum />
      },
      {
        path: 'playlist',
        element: <Playlist />
      },
      {
        path: 'playlists',
        element: <Playlists />
      },
      {
        path: 'playlist/create',
        element: <CreatePlaylist />
      },
      {
        path: 'playlist/edit',
        element: <EditPlaylist />
      },
      {
        path: 'playlist/delete',
        element: <DeletePlaylist />
      },
      {
        path: 'audiobook',
        element: <AudioBook />
      },
      {
        path: 'artist',
        element: <Artist />
      },
      {
        path: 'artists',
        element: <Artists />
      },
      {
        path: 'artist/create',
        element: <CreateArtist />
      },
      {
        path: 'artist/edit',
        element: <EditArtists />
      },
      {
        path: 'artist/delete',
        element: <DeleteArtist />
      },
      {
        path: 'track/create',
        element: <CreateTrack />
      },
      {
        path: 'track/edit',
        element: <EditTrack />
      },
      {
        path: 'track/delete',
        element: <DeleteTrack />
      },
      {
        path: 'track/playlist/add',
        element: <AddTrackPlaylist />
      },
      {
        path: 'track/playlist/delete',
        element: <DeleteTrackPlaylist />
      },
      {
        path: 'tracklink/get',
        element: <GetTracklink />
      },
      {
        path: 'subscription/status',
        element: <Status />
      },
      {
        path: 'subscription/packs',
        element: <Packs />
      },
      {
        path: 'subscription/demo',
        element: <Demo />
      },
      {
        path: 'subscription/valcup',
        element: <ValidateCupon />
      },
      {
        path: 'subscription/subscribe',
        element: <Subscribe />
      },
      {
        path: 'user/login',
        element: <Login />
      },
      {
        path: 'user/info',
        element: <Info />
      },
      {
        path: 'user/create',
        element: <CreateUser />
      },
      {
        path: 'user/delete',
        element: <DeleteUser />
      },
      {
        path: 'user/validation',
        element: <ValidationUser />
      },
      {
        path: 'profile/add',
        element: <AddProfile />
      },
      {
        path: 'profiles',
        element: <GetProfiles />
      },
      {
        path: 'profile/delete',
        element: <DeleteProfile />
      },
      {
        path: 'profiles/imgs',
        element: <ImgProfile />
      },
      {
        path: 'update/name',
        element: <NameUpdate />
      },
      {
        path: 'update/masterpin',
        element: <MasterpinUpdate />
      },
      {
        path: 'update/pass',
        element: <PassUpdate />
      },
      {
        path: 'update/email',
        element: <EmailUpdate />
      },
      {
        path: 'reset/pass',
        element: <ResetPass />
      },
      {
        path: 'update/phone',
        element: <PhoneUpdate />
      },
      {
        path: 'update/user',
        element: <UserUpdate />
      },
      {
        path: 'devices',
        element: <Devices />
      },
      {
        path: 'device/delete',
        element: <DeleteDevices />
      },
      {
        path: 'email/verify',
        element: <VerifyEmail />
      },
      {
        path: 'email/validate',
        element: <ValidateEmail />
      },
      {
        path: 'phone/verify',
        element: <VerifyPhone />
      },
      {
        path: 'phone/validate',
        element: <ValidatePhone />
      },
      {
        path: 'phone/update',
        element: <UpdatePhone />
      },
      {
        path: 'feedback',
        element: <GetFeedback />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)