import SwaggerUI from "swagger-ui-react"
import { track } from '../../schemas/Track'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function DeleteTrackPlaylist() {
    const schemas = {
        ...track.schemas.deleteTrackPlaylist
    }

    const paths = {
        ...track.paths.deleteTrackPlaylist
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}