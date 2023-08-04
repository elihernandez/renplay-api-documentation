import SwaggerUI from "swagger-ui-react"
import { album } from '../../schemas/Album'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function CreateAlbum() {
    const schemas = {
        ...album.schemas.createAlbum
    }

    const paths = {
        ...album.paths.createAlbum,
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}