import SwaggerUI from "swagger-ui-react"
import { artist } from '../../schemas/Artist'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function DeleteArtist() {
    const schemas = {
        ...artist.schemas.deleteArtist
    }

    const paths = {
        ...artist.paths.deleteArtist
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}