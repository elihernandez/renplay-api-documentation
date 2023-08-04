import SwaggerUI from "swagger-ui-react"
import { artist } from '../../schemas/Artist'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function Artist() {
    const schemas = {
        ...artist.schemas.getArtist
    }

    const paths = {
        ...artist.paths.getArtist
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}