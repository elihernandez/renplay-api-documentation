import SwaggerUI from "swagger-ui-react"
import { profile } from '../../schemas/Profile'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function DeleteProfile() {
    const schemas = {
        ...profile.schemas.deleteProfile
    }

    const paths = {
        ...profile.paths.deleteProfile
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}