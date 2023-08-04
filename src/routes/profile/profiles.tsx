import SwaggerUI from "swagger-ui-react"
import { profile } from '../../schemas/Profile'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function GetProfiles() {
    const schemas = {
        ...profile.schemas.getProfiles
    }

    const paths = {
        ...profile.paths.getProfiles
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}