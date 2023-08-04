import SwaggerUI from "swagger-ui-react";
import { phone } from '../../schemas/Phone'
import { getSwaggerUISpec } from "../../schemas/Template";

export default function UpdatePhone(){
    const schemas = {
        ...phone.schemas.updatePhone
    }

    const paths = {
        ...phone.paths.updatePhone
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}