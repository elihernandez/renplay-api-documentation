import SwaggerUI from "swagger-ui-react"
import { artist } from '../../schemas/Artist'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function CreateArtist() {
    const schemas = {
        ...artist.schemas.createArtist
    }

    const paths = {
        ...artist.paths.createArtist
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}