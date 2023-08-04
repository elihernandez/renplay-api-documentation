import SwaggerUI from "swagger-ui-react"
import { users } from '../../schemas/Users'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function Info() {
    const schemas = {
        ...users.schemas.infoUser
    }

    const paths = {
        ...users.paths.infoUser
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}