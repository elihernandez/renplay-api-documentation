import SwaggerUI from "swagger-ui-react"
import { track } from '../../schemas/Track'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function AddTrackPlaylist() {
    const schemas = {
        ...track.schemas.addTrackPlaylist
    }

    const paths = {
        ...track.paths.addTrackPlaylist
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}