export const update = {
    paths: {
        nameUpdate: {
            "/usr/update/name": {
                "post": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        "Update"
                    ],
                    "summary": "Actualizar nombre",
                    "description": "Este endpoint permite al usuario actualizar su nombre.<br><br>",
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
            }
        },
        masterpinUpdate: {
            "/usr/update/masterpin": {
                "post": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        "Update"
                    ],
                    "summary": "Actualizar masterpin",
                    "description": "Este endpoint le permite al usuario actualizar su masterpin.<br><br>",
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
        },
        passUpdate: {
            "/usr/update/pass": {
                "post": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        "Update"
                    ],
                    "summary": "Actualizar contraseña",
                    "description": "Este endpoint le permite al usuario actualizar su contraseña.<br><br>",
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
        },
        emailUpdate: {
            "/usr/update/email": {
                "post": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        "Update"
                    ],
                    "summary": "Actualizar email",
                    "description": "Este endpoint le permite al usuario actualizar su correo electrónico.<br><br>",
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
        },
        resetPass: {
            "/usr/reset/pass": {
                "post": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        "Update"
                    ],
                    "summary": "Restaurar contraseña",
                    "description": "Este endpoint le permite al usuario restaurar su contraseña en caso de olvidarla.<br><br>",
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
        },
        phoneUpdate: {
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
        },
        userUpdate: {
            "/usr/update/user": {
                "post": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        "Update"
                    ],
                    "summary": "Actualizar usuario",
                    "description": "Este endpoint le permite al cliente actualizar su perfil de usuario.<br><br>",
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
        nameUpdate: {
            "userUpdateName":{
                "type": "object",
                "properties":{
        
                  "UpdateResponseMsg":{
                    "type": "string"
                  },
                  "UpdateResponseCode":{
                    "type": "number"
                  }
                }
            },
        },
        masterpinUpdate: {
            "userUpdateMasterpin":{
                "properties":{
        
                  "UpdateResponseMsg":{
                    "type": "string"
                  },
                  "UpdateResponseCode":{
                    "type": "number"
                  }
                }
            },
        },
        passUpdate: {
            "userUpdatePassword":{
                "type": "object",
                "properties":{
        
                  "UpdateResponseMsg":{
                    "type": "string"
                  },
                  "UpdateResponseCode":{
                    "type": "number"
                  }
                }
              },
        },
        emailUpdate: {
            "userUpdateEmail":{
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
        },
        resetPass: {
            "userResetPassword":{
                "type": "object",
                "properties":{
        
                  "UpdateResponseMsg":{
                    "type": "string"
                  },
                  "UpdateResponseCode":{
                    "type": "number"
                  },
                  "SuscriberID":{
                    "type": "string"
                  }
                }
            }
        },
        phoneUpdate: {
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
        },
        userUpdate: {
            "userUpdateUser":{
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