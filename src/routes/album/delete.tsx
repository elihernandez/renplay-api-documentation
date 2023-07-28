import SwaggerUI from "swagger-ui-react"
import { album } from '../../schemas/Album'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function DeleteAlbum() {
    const schemas = {
        ...album.schemas.album
    }

    const paths = {
        ...album.paths.deleteAlbum,
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}