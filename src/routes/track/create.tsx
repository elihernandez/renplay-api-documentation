import SwaggerUI from "swagger-ui-react"
import { track } from '../../schemas/Track'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function CreateTrack() {
    const schemas = {
        ...track.schemas.createTrack
    }

    const paths = {
        ...track.paths.createTrack
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}