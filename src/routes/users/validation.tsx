import SwaggerUI from "swagger-ui-react"
import { users } from '../../schemas/Users'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function ValidationUser() {
    const schemas = {
        ...users.schemas.validationUser
    }

    const paths = {
        ...users.paths.validationUser
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}