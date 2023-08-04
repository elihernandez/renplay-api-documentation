import SwaggerUI from "swagger-ui-react"
import { subscription } from '../../schemas/Subscription'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function Demo() {
    const schemas = {
        ...subscription.schemas.getDemo
    }

    const paths = {
        ...subscription.paths.getDemo
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}