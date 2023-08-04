import SwaggerUI from "swagger-ui-react"
import { update } from '../../schemas/Update'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function MasterpinUpdate() {
    const schemas = {
        ...update.schemas.masterpinUpdate
    }

    const paths = {
        ...update.paths.masterpinUpdate
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}