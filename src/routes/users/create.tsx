import SwaggerUI from "swagger-ui-react"
import { users } from '../../schemas/Users'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function CreateUser() {
    const schemas = {
        ...users.schemas.createUser
    }

    const paths = {
        ...users.paths.createUser
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}