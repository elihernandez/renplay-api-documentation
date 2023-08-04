export const device = {
    paths: {
        getDevices: {
            "/usr/devices": {
                "put": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        "Device"
                    ],
                    "summary": "Lista de dispositivos",
                    "description": "Este endpoint muestra la lista de dispositivos ligados al usuario.<br><br>",
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
        deleteDevice: {
            "/usr/device": {
                "delete": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        "Device"
                    ],
                    "summary": "Eliminar dispositivo",
                    "description": "Este endpoint elimina un dispositivo ligado al usuario.<br><br>",
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
            },
        }
    },
    schemas: {
        getDevices: {
            "userDevicesList":{
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
                  "UsrDevices":{
                    "type": "object",
                    "properties":{
        
                      "SubscriberDeviceID":{
                        "type": "string"
                      },
                      "UUID":{
                        "type": "string"
                      },
                      "Platform":{
                        "type": "string"
                      },
                      "Type":{
                        "type": "string"
                      },
                      "IP":{
                        "type": "string"
                      },
                      "LastSignIn":{
                        "type": "string"
                      },
                      "DeviceCreated":{
                        "type": "string"
                      }
                    }
                  }
                }
              }
        },
        deleteDevice: {
            "userDeviceDelete":{
                "type": "object",
                "properties":{
        
                  "UpdateResponseMsg":{
                    "type": "string"
                  },
                  "UpdateResponseCode":{
                    "type": "number"
                  },
                }
            }
        }
    }
}