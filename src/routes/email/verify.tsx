import SwaggerUI from "swagger-ui-react"
import { email } from '../../schemas/Email'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function VerifyEmail() {
    const schemas = {
        ...email.schemas.verifyEmail
    }

    const paths = {
        ...email.paths.verifyEmail
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}