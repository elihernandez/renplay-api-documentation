import SwaggerUI from "swagger-ui-react"
import { home } from '../../schemas/Home'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function Home() {
    const schemas = {
        ...home.schemas.musicHome
    }

    const paths = {
        ...home.paths.getHome
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}
