import SwaggerUI from "swagger-ui-react"
import { album } from '../../schemas/Album'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function EditAlbum() {
    const schemas = {
        ...album.schemas.editAlbum
    }

    const paths = {
        ...album.paths.editAlbum,
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}