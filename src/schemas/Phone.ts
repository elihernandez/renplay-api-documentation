export const phone = {
    paths: {
        validatePhone: {
            "/usr/validate/phone": {
                "post": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        "Validar"
                    ],
                    "summary": "Validar teléfono",
                    "description": "Este endpoint es para validar el teléfono del usuario.<br><br>",
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
        verifyPhone: {
            "/usr/verify/phone": {
                "post": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        "Verificar"
                    ],
                    "summary": "Verificar teléfono",
                    "description": "Este endpoint es para verificar el teléfono del usuario.<br><br>",
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
        updatePhone: {
            "/usr/update/phone": {
                "post": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        "Update"
                    ],
                    "summary": "Actualizar teléfono",
                    "description": "Este endpoint le permite al usuario actualizar su número de teléfono.<br><br>",
                    "requestBody": {
                        "schema": {
                            "$ref": ""
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
            },
        }
    },
    schemas: {
        validatePhone: {
            "userValidatePhone":{
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
        verifyPhone: {
            "userVerifyPhone":{
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
        updatePhone: {
            "userUpdatePhone":{
                "type": "object",
                "properties":{
        
                  "UpdateResponseMsg":{
                    "type": "string"
                  },
                  "UpdateResponseCode":{
                    "type": "number"
                  }
                }
            }
        }
    }
}