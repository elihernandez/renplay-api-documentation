import SwaggerUI from "swagger-ui-react"
import { users } from '../../schemas/Users'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function Login() {
    const schemas = {
        ...users.schemas.loginUser
    }

    const paths = {
        ...users.paths.loginUser
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}