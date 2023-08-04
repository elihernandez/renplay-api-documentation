import SwaggerUI from "swagger-ui-react"
import { artist } from '../../schemas/Artist'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function EditArtist() {
    const schemas = {
        ...artist.schemas.editArtist
    }

    const paths = {
        ...artist.paths.editArtist
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}