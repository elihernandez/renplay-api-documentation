import SwaggerUI from "swagger-ui-react"
import { device } from '../../schemas/Device'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function Devices() {
    const schemas = {
        ...device.schemas.getDevices
    }

    const paths = {
        ...device.paths.getDevices
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}