import SwaggerUI from "swagger-ui-react";
import { phone } from '../../schemas/Phone'
import { getSwaggerUISpec } from "../../schemas/Template";

export default function VerifyPhone(){
    const schemas = {
        ...phone.schemas.verifyPhone
    }

    const paths = {
        ...phone.paths.verifyPhone
    }

    return (
        <>
            <SwaggerUI spec={getSwaggerUISpec(paths, schemas)} />
        </>
    )
}