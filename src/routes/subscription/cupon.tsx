import SwaggerUI from "swagger-ui-react"
import { subscription } from '../../schemas/Subscription'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function ValidateCupon() {
    const schemas = {
        ...subscription.schemas.getValcup
    }

    const paths = {
        ...subscription.paths.getValcup
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}