import SwaggerUI from "swagger-ui-react"
import { subscription } from '../../schemas/Subscription'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function Subscribe() {
    const schemas = {
        ...subscription.schemas.getSubscribe
    }

    const paths = {
        ...subscription.paths.getSubscribe
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}