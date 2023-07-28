import SwaggerUI from "swagger-ui-react"
import { album } from '../../schemas/Album'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function Album() {
    const schemas = {
        ...album.schemas.album
    }

    const paths = {
        ...album.paths.getAlbum
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}