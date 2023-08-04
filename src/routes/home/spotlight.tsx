import SwaggerUI from "swagger-ui-react"
import { home } from '../../schemas/Home'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function Spotlight() {
    const schemas = {
        ...home.schemas.spotlight
    }

    const paths = {
        ...home.paths.getSpotlight
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}
