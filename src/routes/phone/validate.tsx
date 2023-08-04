import SwaggerUI from "swagger-ui-react";
import { phone } from '../../schemas/Phone'
import { getSwaggerUISpec } from "../../schemas/Template";

export default function ValidatePhone(){
    const schemas = {
        ...phone.schemas.validatePhone
    }

    const paths = {
        ...phone.paths.validatePhone
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}