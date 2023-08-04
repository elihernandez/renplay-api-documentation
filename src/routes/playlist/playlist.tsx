import SwaggerUI from "swagger-ui-react"
import { playlist } from '../../schemas/Playlist'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function Playlist() {
    const schemas = {
        ...playlist.schemas.getPlaylist
    }

    const paths = {
        ...playlist.paths.getPlaylist
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}