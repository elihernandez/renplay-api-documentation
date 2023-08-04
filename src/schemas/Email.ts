export const email = {
    paths: {
        verifyEmail: {
            "/usr/verify/email": {
                "post": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        "Email"
                    ],
                    "summary": "Verificar email",
                    "description": "Este endpoint es para verificar un email.<br><br>",
                    "content":{
                            "schema": {
                                "$href": ""
                            }
                    },
                    "responses": {
                        "200": {
                            "description": "El usuario ingresó con éxito",
                            "schema": {
                                "$ref": ""
                            }
                        }
                    }
                }
            }
        },
        validateEmail: {
            "/usr/validate/email": {
                "get": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        "Email"
                    ],
                    "summary": "Validar email",
                    "description": "Este endpoint es para validar un email.<br><br>",
                    "content":{
                            "schema": {
                                "$href": ""
                            }
                    },
                    "responses": {
                        "200": {
                            "description": "El usuario ingresó con éxito",
                            "schema": {
                                "$ref": ""
                            }
                        }
                    }
                }
            }
        }
    },
    schemas: {
        verifyEmail: {
            "userVerifyEmail":{
                "type": "object",
                "properties":{
        
                  "ResponseMsg":{
                    "type": "string"
                  },
                  "ResponseCode":{
                    "type": "number"
                  },
                  "SuscriberID":{
                    "type": "null"
                  }
                }
            }
        },
        validateEmail: {
            "userVerifyEmail":{
                "type": "object",
                "properties":{
        
                  "ResponseMsg":{
                    "type": "string"
                  },
                  "ResponseCode":{
                    "type": "number"
                  },
                  "SuscriberID":{
                    "type": "null"
                  }
                }
            }
        }
    }
}