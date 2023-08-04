import SwaggerUI from "swagger-ui-react"
import { update } from '../../schemas/Update'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function UserUpdate() {
    const schemas = {
        ...update.schemas.userUpdate
    }

    const paths = {
        ...update.paths.userUpdate
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}