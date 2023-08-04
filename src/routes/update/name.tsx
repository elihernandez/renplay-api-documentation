import SwaggerUI from "swagger-ui-react"
import { update } from '../../schemas/Update'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function NameUpdate() {
    const schemas = {
        ...update.schemas.nameUpdate
    }

    const paths = {
        ...update.paths.nameUpdate
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}