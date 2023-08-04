import SwaggerUI from "swagger-ui-react"
import { profile } from '../../schemas/Profile'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function AddProfile() {
    const schemas = {
        ...profile.schemas.addProfile
    }

    const paths = {
        ...profile.paths.addProfile
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}