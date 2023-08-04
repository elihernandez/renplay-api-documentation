import Dropdown, { DropdownElementsProps } from '../Dropdown'

const styleButton = 'flex items-center p-2  rounded-lg text-white hover:bg-gray-100 hover:text-gray-900 group'
const styleIcon = 'w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900'

export function Sidebar() {
    return (
        <aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
                <ul className="space-y-2 font-medium">
                    {/* <li>
                        <a href="/usuarios" className={styleButton}>
                            <svg className={styleIcon} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                            </svg>
                            <span className="ml-3">Usuarios</span>
                        </a>
                        <a href="/inicio" className={styleButton}>
                            <svg className={styleIcon} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            <span className="ml-3">Home</span>
                        </a>
                        <a href="/audiolibros" className={styleButton}>
                            <svg className={styleIcon} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d='M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z' />
                            </svg>
                            <span className="ml-3">AudioBooks</span>
                        </a>
                        <a href="/musica" className={styleButton}>
                            <svg className={styleIcon} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d='M14.316.051A1 1 0 0 0 13 1v8.473A4.49 4.49 0 0 0 11 9c-2.206 0-4 1.525-4 3.4s1.794 3.4 4 3.4 4-1.526 4-3.4a2.945 2.945 0 0 0-.067-.566c.041-.107.064-.22.067-.334V2.763A2.974 2.974 0 0 1 16 5a1 1 0 0 0 2 0C18 1.322 14.467.1 14.316.051ZM10 3H1a1 1 0 0 1 0-2h9a1 1 0 1 1 0 2Z' />
                                <path d='M10 7H1a1 1 0 0 1 0-2h9a1 1 0 1 1 0 2Zm-5 4H1a1 1 0 0 1 0-2h4a1 1 0 1 1 0 2Z' />
                            </svg>
                            <span className="ml-3">Music</span>
                        </a>
                        <a href="/suscripcion" className={styleButton}>
                            <svg className={styleIcon} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
                            </svg>
                            <span className="ml-3">Subscription</span>
                        </a>
                        <a href="/creadores" className={styleButton}>
                            <svg className={styleIcon} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d='M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z' />
                            </svg>
                            <span className="ml-3">Creators</span>
                        </a>
                        <a href="/album" className={styleButton}>
                            <svg className={styleIcon} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d='M1 19h13a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H0v10a1 1 0 0 0 1 1ZM0 6h7.443l-1.2-1.6a1 1 0 0 0-.8-.4H1a1 1 0 0 0-1 1v1Z' />
                                <path d='M17 4h-4.557l-2.4-3.2a2.009 2.009 0 0 0-1.6-.8H4a2 2 0 0 0-2 2h3.443a3.014 3.014 0 0 1 2.4 1.2l2.1 2.8H14a3 3 0 0 1 3 3v8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z' />
                            </svg>
                            <span className="ml-3">Album</span>
                        </a>
                        <a href="/playlist" className={styleButton}>
                            <svg className={styleIcon} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d='M1 19h13a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H0v10a1 1 0 0 0 1 1ZM0 6h7.443l-1.2-1.6a1 1 0 0 0-.8-.4H1a1 1 0 0 0-1 1v1Z' />
                                <path d='M17 4h-4.557l-2.4-3.2a2.009 2.009 0 0 0-1.6-.8H4a2 2 0 0 0-2 2h3.443a3.014 3.014 0 0 1 2.4 1.2l2.1 2.8H14a3 3 0 0 1 3 3v8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z' />
                            </svg>
                            <span className="ml-3">Playlist</span>
                        </a>
                    </li> */}
                    <li>
                        <Dropdown title="Users" elements={userElements} />
                    </li>
                    <li>
                        <Dropdown title="Update" elements={updateElements} />
                    </li>
                    <li>
                        <Dropdown title="Home" elements={homeElements} />
                    </li>
                    <li>
                        <Dropdown title="Playlist" elements={playlistElements} />
                    </li>
                    <li>
                        <Dropdown title="Album" elements={albumLinks} />
                    </li>
                    <li>
                        <Dropdown title="AudioBook" elements={audioBookElements} />
                    </li>
                    <li>
                        <Dropdown title="Artist" elements={artistElements} />
                    </li>
                    <li>
                        <Dropdown title="Track" elements={trackElements} />
                    </li>
                    <li>
                        <Dropdown title="Subscription" elements={subscriptionElements} />
                    </li>
                    <li>
                        <Dropdown title="Profile" elements={profileElements} />
                    </li>
                    <li>
                        <Dropdown title="Device" elements={deviceElements} />
                    </li>
                    <li>
                        <Dropdown title="Email" elements={emailElements} />
                    </li>
                    <li>
                        <Dropdown title="Phone" elements={phoneElements} />
                    </li>
                    <li>
                        <Dropdown title="Feedback" elements={feedbackElements} />
                    </li>
                </ul>
            </div>
        </aside>
    )
}

const userElements: DropdownElementsProps[] = [
    {
        title: 'Login',
        path: '/user/login'
    },
    {
        title: 'Info',
        path: '/user/info'
    },
    {
        title: 'Create User',
        path: '/user/create'
    },
    {
        title: 'Delete User',
        path: '/user/delete'
    },
    {
        title: 'Validation User',
        path: '/user/validation'
    },
]

const homeElements: DropdownElementsProps[] = [
    {
        title: 'Get Home',
        path: '/inicio'
    },
    {
        title: 'Get Spotlight',
        path: '/spotlight'
    }
]

const audioBookElements: DropdownElementsProps[] = [
    {
        title: 'Get AudioBook',
        path: '/audiobook'
    }
]

const playlistElements: DropdownElementsProps[] = [
    {
        title: 'Create playlist',
        path: '/playlist/create'
    },
    {
        title: 'Edit playlist',
        path: '/playlist/edit'
    },
    {
        title: 'Delete playlist',
        path: '/playlist/delete'
    },
    {
        title: 'Get playlist',
        path: '/playlist'
    },
    {
        title: 'Get playlists',
        path: '/playlists'
    }

]

const trackElements: DropdownElementsProps[] = [
    {
        title: 'Create Track',
        path: '/track/create'
    },
    {
        title: 'Edit Track',
        path: '/track/edit'
    },
    {
        title: 'Delete Track',
        path: '/track/delete'
    },
    {
        title: 'Add Track',
        path: '/track/playlist/add'
    },
    {
        title: 'Delete Track Playlist',
        path: '/track/playlist/delete'
    },
    {
        title: 'Get Tracklink',
        path: '/tracklink/get'
    }
]

const artistElements: DropdownElementsProps[] = [
    {
        title: 'Get Artist',
        path: 'artist'
    },
    {
        title: 'Get Artists',
        path: 'artists'
    },
    {
        title: 'Create Artist',
        path: 'artist/create'
    },
    {
        title: 'Edit Artist',
        path: 'artist/edit'
    },
    {
        title: 'Delete Artist',
        path: 'artist/delete'
    }
]

const albumLinks: DropdownElementsProps[] = [
    {
        title: 'Get Album',
        path: '/album'
    },
    {
        title: 'Get Albums',
        path: '/albums'
    },
    {
        title: 'Create Album',
        path: '/album/create'
    },
    {
        title: 'Edit Album',
        path: '/album/edit'
    },
    {
        title: 'Delete Album',
        path: '/album/delete'
    },
]

const subscriptionElements: DropdownElementsProps[] = [
    {
        title: 'Get Status',
        path: '/subscription/status'
    },
    {
        title: 'Get Packs',
        path: '/subscription/packs'
    },
    {
        title: 'Get Demo',
        path: '/subscription/demo'
    },
    {
        title: 'Get Validate Cupon',
        path: '/subscription/valcup'
    },
    {
        title: 'Get subscribe',
        path: '/subscription/subscribe'
    },
]

const profileElements: DropdownElementsProps[] = [
    {
        title: 'Get Profiles',
        path: '/profiles'
    },
    {
        title: 'Add Profile',
        path: '/profile/add'
    },
    {
        title: 'Delete Profile',
        path: '/profile/delete'
    },
    {
        title: 'Get Img',
        path: '/profiles/imgs'
    }
]

const updateElements: DropdownElementsProps[] = [
    {
        title: 'Update Name',
        path: '/update/name'
    },
    {
        title: 'Update Masterpin',
        path: '/update/masterpin'
    },
    {
        title: 'Update Pass',
        path: '/update/pass'
    },
    {
        title: 'Update Email',
        path: '/update/email'
    },
    {
        title: 'Reset Pass',
        path: '/reset/pass'
    },
    {
        title: 'Update Phone',
        path: '/update/phone'
    },
    {
        title: 'Update User',
        path: '/update/User'
    }
]

const deviceElements: DropdownElementsProps[] = [
    {
        title: 'Get Devices',
        path: '/devices'
    },
    {
        title: 'Delete Devices',
        path: '/device/delete'
    }
]

const emailElements: DropdownElementsProps[] = [
    {
        title: 'Verify Email',
        path: '/email/verify'
    },
    {
        title: 'Validate Email',
        path: '/email/validate'
    }
]

const phoneElements: DropdownElementsProps[] = [
    {
        title: 'Verify Phone',
        path: '/phone/verify'
    },
    {
        title: 'Validate Phone',
        path: '/phone/validate'
    },
    {
        title: 'Update Phone',
        path: '/phone/update'
    }
]

const feedbackElements: DropdownElementsProps[] = [
    {
        title: 'Feedback',
        path: '/feedback'
    }
]