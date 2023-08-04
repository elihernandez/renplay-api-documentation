import SwaggerUI from "swagger-ui-react"
import { audiobook } from '../../schemas/Audiobook'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function AudioBook() {
    const schemas = {
        ...audiobook.schemas.audiobook
    }

    const paths = {
        ...audiobook.paths.getAudioBook
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}