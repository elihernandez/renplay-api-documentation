import SwaggerUI from "swagger-ui-react"
import { artist } from '../../schemas/Artist'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function Artists() {
    const schemas = {
        ...artist.schemas.getArtists
    }

    const paths = {
        ...artist.paths.getArtists
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}