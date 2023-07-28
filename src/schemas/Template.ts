export const swaggerTemplate = {
    "openapi": "3.0.0",
    "info": {
        "title": "Documentación del API REN>PLAY",
        "version": "1.0.0",
        "description": "Este espacio está diseñado para ayudarte y ser guía dentro del código que necesites, ¡Éxito en tu proyecto!"
    },
    "servers": [
        {
            "url": "https://api.renplay.com"
        }
    ]
}

export function getSwaggerUISpec(paths: object, schemas: object) {
    return {
        ...swaggerTemplate,
        "paths": paths,
        "components": {
            "schemas": schemas
        }
    }
}