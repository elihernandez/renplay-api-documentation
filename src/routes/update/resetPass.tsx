import SwaggerUI from "swagger-ui-react"
import { update } from '../../schemas/Update'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function ResetPass() {
    const schemas = {
        ...update.schemas.resetPass
    }

    const paths = {
        ...update.paths.resetPass
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}