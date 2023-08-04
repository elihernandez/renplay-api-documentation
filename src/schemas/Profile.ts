export const profile = {
    paths: {
        getProfiles: {
            "/usr/profiles": {
                "put": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        "Profiles"
                    ],
                    "summary": "Lista de perfiles",
                    "description": "Este endpoint le permite al usuario ver la lista de perfiles que hay en la cuenta.<br><br>",
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
        addProfile: {
            "/usr/profile": {
                "post": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        "Profiles"
                    ],
                    "summary": "Agregar un perfil al usuario",
                    "description": "Este endpoint le permite al usuario agregar un nuevo perfil.<br><br>",
                    "requestBody": {
                        "schema": {
                            "$ref": "#/components/schemas/userProfileAddBody"
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
        deleteProfile: {
            "/usr/profile": {
                "delete": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        "Profiles"
                    ],
                    "summary": "Eliminar",
                    "description": "Este endpoint le permite al usuario eliminar un perfil.<br><br>",
                    "requestBody": {
                        "schema": {
                            "$ref": "#/components/schemas/userProfileDeleteBody"
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
        imgProfile: {
            "/usr/profiles/imgs": {
                "put": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        "Profiles"
                    ],
                    "summary": "Imágenes para perfil",
                    "description": "Este endpoint le muestra al usuario imágenes que puede utilizar para identificar su perfil.<br><br>",
                    "requestBody": {
                        "schema": {
                            "$ref": "#/components/schemas/userProfilesImgBody"
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
        getProfiles: {
            "userProfileList":{
                "type": "object",
                "properties":{
        
                  "ResponseMsg":{
                    "type": "string"
                  },
                  "ResponseCode":{
                    "type": "number"
                  },
                  "Limit":{
                    "type": "number"
                  },
                  "UsrProfiles":{
                    "type": "object",
                    "properties":{
        
                      "RegID":{
                        "type": "number"
                      },
                      "Name":{
                        "type": "string"
                      },
                      "ImageURL":{
                        "type": "string"
                      },
                      "ImageID":{
                        "type": "number"
                      },
                      "NumericPin":{
                        "type": "number"
                      },
                      "IsAKid":{
                        "type": "boolean"
                      }
                    }
                  }
                }
            },
        },
        addProfile: {
            "userProfileAdd":{
                "type": "object",
                "properties":{
        
                  "UpdateResponseMsg":{
                    "type": "string"
                  },
                  "UpdateResponseCode":{
                    "type": "number"
                  },
                }
            },
        },
        deleteProfile: {
            "userProfileDelete":{
                "type": "object",
                "properties":{
        
                  "UpdateResponseMsg":{
                    "type": "string"
                  },
                  "UpdateResponseCode":{
                    "type": "number"
                  },
                }
              },
        },
        imgProfile: {
            "userProfilesImg":{
                "type": "object",
                "properties":{
        
                  "ResponseMsg":{
                    "type": "string"
                  },
                  "ResponseCode":{
                    "type": "number"
                  },
                  "UsrProfiles":{
                    "type": "object",
                    "properties":{
        
                      "ImageID":{
                        "type": "number"
                      },
                      "ImageURL":{
                        "type": "string"
                      }
                    }
                  }
                }
              },
        }
    }
}