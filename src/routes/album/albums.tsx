import SwaggerUI from "swagger-ui-react"
import { album } from '../../schemas/Album'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function Albums() {
    const schemas = {
        ...album.schemas.getAlbums
    }

    const paths = {
        ...album.paths.getAlbums,
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}