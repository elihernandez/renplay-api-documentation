import SwaggerUI from "swagger-ui-react"
import { track } from '../../schemas/Track'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function EditTrack() {
    const schemas = {
        ...track.schemas.editTrack
    }

    const paths = {
        ...track.paths.editTrack
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}