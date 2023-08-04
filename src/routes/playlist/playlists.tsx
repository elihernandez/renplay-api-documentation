import SwaggerUI from "swagger-ui-react"
import { playlist } from '../../schemas/Playlist'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function Playlists() {
    const schemas = {
        ...playlist.schemas.getPlaylists
    }

    const paths = {
        ...playlist.paths.getPlaylists
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}