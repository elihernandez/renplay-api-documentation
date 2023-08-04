import SwaggerUI from "swagger-ui-react"
import { track } from '../../schemas/Track'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function DeleteTrack() {
    const schemas = {
        ...track.schemas.deleteTrack
    }

    const paths = {
        ...track.paths.deleteTrack
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}