import SwaggerUI from "swagger-ui-react"
import { playlist } from '../../schemas/Playlist'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function EditPlaylist() {
    const schemas = {
        ...playlist.schemas.editPlaylist
    }

    const paths = {
        ...playlist.paths.editPlaylist
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}