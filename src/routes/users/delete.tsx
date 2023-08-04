import SwaggerUI from "swagger-ui-react"
import { users } from '../../schemas/Users'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function DeleteUser() {
    const schemas = {
        ...users.schemas.deleteUser
    }

    const paths = {
        ...users.paths.deleteUser
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}