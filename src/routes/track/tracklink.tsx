import SwaggerUI from "swagger-ui-react"
import { track } from '../../schemas/Track'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function GetTracklink() {
    const schemas = {
        ...track.schemas.getTracklink
    }

    const paths = {
        ...track.paths.getTracklink
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}