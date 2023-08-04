import SwaggerUI from "swagger-ui-react"
import { feedback } from '../../schemas/Feedback'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function GetFeedback() {
    const schemas = {
        ...feedback.schemas.getFeedback
    }

    const paths = {
        ...feedback.paths.getFeedback
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}