export const subscription = {
    paths: {
        getStatus: {
          "/subscription/status": {
            "put": {
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Obtener"
                ],
                "summary": "Status de suscripción",
                "description": "Este endpoint muestra el status de la subscripción del usuario.<br><br>",
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
        getPacks: {
          "/subscription/packs": {
            "put": {
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Paquetes"
                ],
                "summary": "Planes de suscripción",
                "description": "Este endpoint muestra los paquetes disponibles para la subscripción del usuario.<br><br>",
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
        getDemo: {
          "/subscription/demo": {
            "put": {
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Demo"
                ],
                "summary": "Prueba gratis",
                "description": "Este endpoint le permite al usuario tener un paquete de suscrpción gratis por 7 días (Prueba gratuita).<br><br>",
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
        getValcup: {
          "/subscription/valcup": {
            "put": {
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Validar"
                ],
                "summary": "Validar cupón",
                "description": "Este endpoint valida un cupón de descuento ingresado por el usuario.<br><br>",
                "requestBody": {           
                        "schema": {
                            "PromoCode": "PromoTest2023OK",
                            "SubRegID": 10
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
        getSubscribe: {
          "/subscription/subscribe": {
            "put": {
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Agregar"
                ],
                "summary": "Añadir suscripción de un usuario",
                "description": "Este endpoint define la suscripción del paquete que el usuario haya elegido.<br><br>",
                "requestBody": {           
                        "schema": {
                            "SuscriberID": "h3lZVO-mkP2NfTq5p8LObLzhPg0CMp9rdQwqFVpk0TA=",
                            "SubscriptionInfo": {
                                "SubID": 10,
                                "AmountDebt": 58.65,
                                "DiscountCode": "PromoTest2023OK"
                            },
                            "PaymentCard": {
                                "card_number": "4111111111111111",
                                "holder_name": "Sary Cazares",
                                "expiration_year": "24",
                                "expiration_month": "08",
                                "cvv2": "123"
                            }
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
        getStatus: {
          "getSubscription":{
            "type": "object",
            "properties":{
    
              "CurrentSuscriptionPeriod":{
                "type": "null"
              },
              "SuscriberStatus":{
                "type": "object",
                "properties":{
    
                  "Code":{
                    "type": "number",
                  },
                  "Msg":{
                    "type": "string"
                  }
                }
              },
              "SubscriptionPkg":{
                "type": "object",
                "properties":{
    
                  "RegID":{
                    "type": "number"
                  },
                  "PackageCode":{
                    "type": "string"
                  },
                  "PackageName":{
                    "type": "string"
                  },
                  "Notes":{
                    "type": "null"
                  },
                  "Price":{
                    "type": "number"
                  },
                  "Currency":{
                    "type": "null"
                  },
                  "Poster":{
                    "type": "null"
                  },
                  "TrialDays":{
                    "type": "null"
                  },
                  "MaxDevices":{
                    "type": "null"
                  },
                  "MaxConcurrentViewers":{
                    "type": "null"
                  }
                }
              }
            }
          }
        },
        getPacks: {
          "getPackage":{
            "type": "object",
            "properties":{
    
              "RegID":{
                "type": "number"
              },
              "PackageCode":{
                "type": "string"
              },
              "PackageName":{
                "type": "string"
              },
              "Notes":{
                "types": "string"
              },
              "Price":{
                "type": "number"
              },
              "Currency":{
                "type": "string"
              },
              "Poster":{
                "type": "string"
              },
              "TrialDays":{
                "type": "number"
              },
              "MaxDevices":{
                "type": "number"
              },
              "MaxConcurrentViewers":{
                "type": "number"
              }
            }
          }
        },
        getDemo: {
          "getDemo":{
            "type": "object",
            "properties":{
    
              "Msg":{
                "type": "string"
              },
              "Code":{
                "type": "number"
              }
            }
          }
        },
        getValcup: {
          "getValidateCupon":{
            "type": "object",
            "properties":{
    
              "Coupon":{
                "type": "object",
                "properties":{
    
                  "RegID":{
                    "type": "number"
                  },
                  "ResellerID":{
                    "type": "string"
                  },
                  "PromoCode":{
                    "type": "string"
                  },
                  "PriceDiscountPct":{
                    "type": "number"
                  },
                  "Countrylso2":{
                    "type": "string"
                  },
                  "SubRegID":{
                    "type": "number"
                  },
                  "ExpDate":{
                    "type": "string"
                  },
                  "PromoCodeResponse":{
                    "type": "number"
                  }
                }
              },
              "Response":{
                "type": "object",
                "properties":{
    
                  "Msg":{
                    "type": "string"
                  },
                  "Code":{
                    "type": "number"
                  }
                }
              }
            }     
          }
        },
        getSubscribe: {
          "getSubscribe":{
            "type": "object",
            "properties":{
    
              "Msg":{
                "type": "string"
              },
              "Code":{
                "type": "number"
              }
            }
          }
        }
    }
}