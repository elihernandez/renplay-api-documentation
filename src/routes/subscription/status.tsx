import SwaggerUI from "swagger-ui-react"
import { subscription } from '../../schemas/Subscription'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function Status() {
    const schemas = {
        ...subscription.schemas.getStatus
    }

    const paths = {
        ...subscription.paths.getStatus
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}