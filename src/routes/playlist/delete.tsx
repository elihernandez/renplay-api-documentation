import SwaggerUI from "swagger-ui-react"
import { playlist } from '../../schemas/Playlist'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function DeletePlaylist() {
    const schemas = {
        ...playlist.schemas.deletePlaylist
    }

    const paths = {
        ...playlist.paths.deletePlaylist
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}