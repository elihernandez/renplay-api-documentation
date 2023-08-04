export const users = {
    paths: {
        loginUser: {
            "/usr/login": {
                "post": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        "Users"
                    ],
                    "summary": "Login del usuario",
                    "description": "Este endpoint es para que el usuario pueda iniciar sesión.<br><br>",
                    "requestBody": {           
                            "schema": {
                                "$ref": "#/components/schemas/usrLoginBody"
                            }
                    },
                    "responses": {
                        "200": {
                            "description": "El usuario ingresó con éxito",
                                "schema": {
                                    "$href": ""
                                }
                        }
                    }
                }
            }
        },
        infoUser: {
            "/usr/info": {
                "put": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        "Users"
                    ],
                    "summary": "Información",
                    "description": "Este endpoint es para que el usuario pueda iniciar sesión.<br><br>",
                    "content":{
                            "schema": {
                                "$href": "#/components/schemas/usrInfoBody"
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
        createUser: {
            "/usr/create": {
                "post": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        "Users"
                    ],
                    "summary": "Crear usuario",
                    "description": "Este endpoint es para crear un usuario.<br><br>",
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
        validationUser: {
            "/usr/validation": {
                "post": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        "User"
                    ],
                    "summary": "Validar usuario",
                    "description": "Este endpoint permite al usuario validar su información.<br><br>",
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
        deleteUser: {
            "/usr/delete": {
                "post": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        "User"
                    ],
                    "summary": "Eliminar",
                    "description": "Este endpoint elimina el usuario.<br><br>",
                    "requestBody": {           
                            "schema": {
                                "$ref": "#/components/schemas/usrDeleteBody"
                            }
                    },
                    "responses": {
                        "200": {
                            "description": "Usuario eliminado",
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
        loginUser: {
            "usrLogin":{
                "type": "object",
                "properties":{
        
                  "SuscriberID":{
                    "type": "string",
                  },
                  "DeviceID":{
                    "type": "string",
                  },
                  "ResponseMsg":{
                    "type": "string",
                  },
                  "IsSuscribed":{
                    "type": "boolean",
                  },
                  "ResponseCode":{
                    "type": "number"
                  }
                }
              }
        },
        infoUser: {
            "userInfo":{
                "type": "object",
                "properties":{
        
                  "UserReg":{
                    "type": "number"
                  },
                  "SuscriberID":{
                    "type": "string"
                  },
                  "UserName":{
                    "type": "string"
                  },
                  "Name":{
                    "type": "string"
                  },
                  "Email":{
                    "type": "email"
                  },
                  "EmailConfirmed":{
                    "type": "boolean"
                  },
                  "Phone":{
                    "type": "number"
                  },
                  "PhoneConfirmed":{
                    "type": "boolean"
                  },
                  "Password":{
                    "type": "null"
                  },
                  "MasterPin":{
                    "type": "number"
                  },
                  "TrialTaken":{
                    "type": "boolean"
                  },
                  "LockoutEnabled":{
                    "type": "boolean"
                  },
                  "LockoutEnd":{
                    "type": "null"
                  }
                }
              }
        },
        createUser: {
            "userCreate":{
                "type": "object",
                "properties":{
        
                }
              }
        },
        deleteUser: {
            "userDelete":{
                "type": "object",
                "properties":{
        
                  "UserReg":{
                    "type": "number"
                  },
                  "DeleteResponseMsg":{
                    "type": "string"
                  },
                  "DeleteUserResponseCode":{
                    "type": "number"
                  }
                }
              }
        },
        validationUser: {
            "userValidation":{
                "type": "object",
                "properties":{
        
                  "UpdateResponseMsg":{
                    "type": "string"
                  },
                  "UpdateResponseCode":{
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