import SwaggerUI from "swagger-ui-react"
import { profile } from '../../schemas/Profile'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function ImgProfile() {
    const schemas = {
        ...profile.schemas.imgProfile
    }

    const paths = {
        ...profile.paths.imgProfile
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}