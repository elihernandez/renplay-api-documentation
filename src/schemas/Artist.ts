export const artist = {
    paths: {
        getArtist: {
          "/music/artist/{id}": {
            "get": {
                "produces": [
                    "application/json"
                ],
                "tags": [
                    ""
                ],
                "summary": "Artista",
                "description": "Este endpoint muestra todo sobre el artista llamado por medio del id.<br><br>",
                "requestBody": {           
                        "schema": {
                            "$ref": "#/components/schemas/musicHomeBody"
                        }
                },
                "responses": {
                    "200": {
                        "description": "El usuario ingresó con éxito",
                        "schema": {
                            "$ref": "#/components/schemas/musicHomeBody"
                        }
                    }
                }
            }
          }
        },
        getArtists: {
          "/creators/list/artist": {
            "put": {
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Lista"
                ],
                "summary": "Lista de artistas",
                "description": "Este endpoint muestra una lista de todos los artistas.<br><br>",
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
        createArtist: {
          "/creators/artist": {
            "post": {
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Crear"
                ],
                "summary": "Crear artista",
                "description": "Este endpoint es para crear un artista.<br><br>",
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
        editArtist: {
          "/creators/artist": {
            "put": {
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Editar"
                ],
                "summary": "Editar artista",
                "description": "Este endpointes para editar la información del artista.<br><br>",
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
        deleteArtist: {
          "/creators/artist": {
            "delete": {
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Eliminar"
                ],
                "summary": "Eliminar lista",
                "description": "Este endpoint elimina una lista de album por medio del ArtistID.<br><br>",
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
    },
    schemas: {
        getArtist: {
          "getArtist":{
            "type": "object",
    
            "properties": {
              "Title": {
                "type": "string",
              },
              "Description": {
                "type": "string",
              },
              "PortadaURL": {
                "type": "string",
              },
            }
          }
        },
        getArtists: {
          "listaDeArtistas":{
            "type": "object",
            "properties":{
    
              "Response":{
                "type": "object",
                "properties":{
                  "Msg":{
                    "type": "string"
                  },
                  "Code":{
                    "type": "number"
                  }
                },
              },
              "Artist":{
                "type": "object",
                "properties":{
                  "Title":{
                    "type": "string"
                  },
                  "Description":{
                    "type": "string"
                  },
                  "PortadaURL":{
                    "type": "string"
                  },
                  "Active":{
                    "type": "boolean"
                  },
                  "OwnerID":{
                    "type": "number"
                  },
                  "ArtistID":{
                    "type": "number"
                  }
                }
              }
            }
          }
        },
        createArtist: {
          "artistCreate":{
            "type": "object",
            "properties":{
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
              },
              "Artist":{
                "type": "object",
                "properties":{
                  "Title":{
                    "type": "null",
                  },
                  "Description":{
                    "type": "null"
                  },
                  "PortadaURL":{
                    "type": "null"
                  },
                  "Active":{
                    "type": "boolean"
                  },
                  "OwnerID":{
                    "type": "number"
                  }
                }
              }
            }
          }
        },
        editArtist: {
          "editArtist":{
            "type": "object",
            "properties":{
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
              },
              "Artist":{
                "type": "object",
                "properties":{
                  "Title":{
                    "type": "string"
                  },
                  "Description":{
                    "type": "string"
                  },
                  "PortadaURL":{
                    "type": "string"
                  },
                  "Active":{
                    "type": "boolean"
                  },
                  "OwnerID":{
                    "type": "number"
                  },
                  "ArtistID":{
                    "type": "number"
                  }
                }
              }
            }
          }
        },
        deleteArtist: {
          "deleteArtist":{
            "type": "object",
            "properties":{
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
              },
              "Artist":{
                "type": "object",
                "properties":{
                  "Title":{
                    "type": "null"
                  },
                  "Description":{
                    "type": "null"
                  },
                  "PortadaURL":{
                    "type": "null"
                  },
                  "Active":{
                    "type": "boolean"
                  },
                  "OwnerID":{
                    "type": "number"
                  }
                }
              },         
            }
          }
        }
    }
}


/*{   
    "paths": {
        "/creators/track": {
            "post": {
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Crear"
                ],
                "summary": "Crear track",
                "description": "Este endpoint crea un track.<br><br>",
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
        "/creator/track": {
            "put": {
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Editar"
                ],
                "summary": "Editar track",
                "description": "Este endpoint permite editar un track.<br><br>",
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
        "/creato/track": {
            "delete": {
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Eliminar"
                ],
                "summary": "Eliminar track",
                "description": "Este endpoint permite eliminar un track.<br><br>",
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

    }
    
}*/