import SwaggerUI from "swagger-ui-react"
import { playlist } from '../../schemas/Playlist'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function createPlaylist() {
    const schemas = {
        ...playlist.schemas.createPlaylist
    }

    const paths = {
        ...playlist.paths.createPlaylist
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}