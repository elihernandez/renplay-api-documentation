import SwaggerUI from "swagger-ui-react"
import { subscription } from '../../schemas/Subscription'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function Packs() {
    const schemas = {
        ...subscription.schemas.getPacks
    }

    const paths = {
        ...subscription.paths.getPacks
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}