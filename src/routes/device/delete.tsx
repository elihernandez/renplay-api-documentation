import SwaggerUI from "swagger-ui-react"
import { device } from '../../schemas/Device'
import { getSwaggerUISpec } from '../../schemas/Template'

export default function DeleteDevices() {
    const schemas = {
        ...device.schemas.deleteDevice
    }

    const paths = {
        ...device.paths.deleteDevice
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}