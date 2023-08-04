import SwaggerUI from "swagger-ui-react"
import { update } from '../../schemas/Update'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function EmailUpdate() {
    const schemas = {
        ...update.schemas.emailUpdate
    }

    const paths = {
        ...update.paths.emailUpdate
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}