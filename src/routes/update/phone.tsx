import SwaggerUI from "swagger-ui-react"
import { update } from '../../schemas/Update'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function PhoneUpdate() {
    const schemas = {
        ...update.schemas.phoneUpdate
    }

    const paths = {
        ...update.paths.phoneUpdate
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}