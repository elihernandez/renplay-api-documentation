import SwaggerUI from "swagger-ui-react"
import { email } from '../../schemas/Email'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function ValidateEmail() {
    const schemas = {
        ...email.schemas.validateEmail
    }

    const paths = {
        ...email.paths.validateEmail
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}