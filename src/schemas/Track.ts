export const track = {
    paths: {
        addTrackPlaylist: {
          "/music/pl/track": {
            "post": {
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Track"
                ],
                "summary": "Agregar track a playlist",
                "description": "Este endpoint es para agregar una canción a una playlist.<br><br>",
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
        deleteTrackPlaylist: {
          "/music/pl/track": {
            "delete": {
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Playlist"
                ],
                "summary": "Eliminar track de playlist",
                "description": "Este endpoint es para eliminar un track de una playList.<br><br>",
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
        getTracklink: {
          "/music/tracklink": {
            "put": {
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Obtener"
                ],
                "summary": "Obtener tracklink",
                "description": "Este enpoint obtiene el link de reproducción del track, mismo que contiene un código de protección.<br><br>",
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
        createTrack: {
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
          }
        },
        editTrack: {
          "/creators/track": {
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
          }
        },
        deleteTrack: {
          "/creators/track": {
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
    },
    schemas: {
        addTrackPlaylist: {
          "addTrack":{
            "type": "object",
            "properties":{
    
              "Response":{
                "type": "object",
                "properties":{
                  "Msg":{
                    "type": "string",
                  },
                  "Code":{
                    "type": "number"
                  }
                }
              },
              "MusicCollectionDTO":{
                "type": "object",
                "properties":{
                  "PlayListID":{
                    "type": "number",
                  },
                  "TrackID":{
                    "type": "number",
                  },
                  "Order":{
                    "type": "number"
                  }
                }
              }
            }
          }
        },
        deleteTrackPlaylist: {
          "deleteTrackPlaylist":{
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
              "MusicCollectionDTO":{
                "type": "object",
                "properties":{
    
                  "PlayListID":{
                    "type": "number"
                  },
                  "TrackID":{
                    "type": "number"
                  },
                  "Orden":{
                    "type": "number"
                  }
                }
              }
            }
          }
        },
        getTracklink: {
          "getTracklink":{
            "type": "object",
            "properties":{
    
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
              "Url":{
                "type": "string"
              }
            }
          }
        },
        createTrack: {
          "createTrack":{
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
              "Track":{
                "type": "object",
                "properties":{
                  "TrackID":{
                    "type": "number"
                  },
                  "Title":{
                    "type": "null"
                  },
                  "Artists":{
                    "type": "null"
                  },
                  "Length":{
                    "type": "null"
                  },
                  "StreamURL":{
                    "type": "null"
                  },
                  "TrackNumber":{
                    "type": "null"
                  },
                  "Active":{
                    "type": "boolean"
                  },
                  "IsVideo":{
                    "type": "null"
                  },
                  "AlbumID":{
                    "type": "null"
                  }
                }
              },         
            }
          }
        },
        editTrack: {
          "editTrack":{
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
              "Track":{
                "type": "object",
                "properties":{
                  "TrackID":{
                    "type": "number"
                  },
                  "Title":{
                    "type": "string"
                  },
                  "Artists":{
                    "type": "array",
                    "items":{
                      "type": "object",
                      "properties":{
                        "ArtistID":{
                          "type": "array",
                          "items":{
                            "type": "number"
                          }    
                        }
                      }
                    }
                  },
                  "Length":{
                    "type": "number"
                  },
                  "StreamURL":{
                    "type": "string"
                  },
                  "TrackNumber":{
                    "type": "number"
                  },
                  "Active":{
                    "type": "boolean"
                  },
                  "IsVideo":{
                    "type": "boolean"
                  },
                  "AlbumID":{
                    "type": "number"
                  }
                }
              }
            }
          }
        },
        deleteTrack: {
          "deleteTrack":{
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
              "Track":{
                "type": "object",
                "properties":{
                  "TrackID":{
                    "type": "number"
                  },
                  "Title":{
                    "type": "null"
                  },
                  "Artists":{
                    "type": "null"
                  },
                  "Length":{
                    "type": "null"
                  },
                  "StreamURL":{
                    "type": "null"
                  },
                  "TrackNumber":{
                    "type": "null"
                  },
                  "Active":{
                    "type": "boolean"
                  },
                  "IsVideo":{
                    "type": "null"
                  },
                  "AlbumID":{
                    "type": "null"
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
        "/music/album/{id}": {
            "get": {
                "produces": [
                    "application/json"
                ],
                "tags": [
                    ""
                ],
                "summary": "Álbum",
                "description": "Este endpoint muestra el albúm llamado por medio del id.<br><br>",
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
        },
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
        },
        "/music/playlist/{id}": {
            "put": {
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Playlist"
                ],
                "summary": "Playlist",
                "description": "Este endpoint muestra la playlist llamada por medio del id.<br><br>",
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
        },
        "/music/pl": {
            "post": {
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Playlist"
                ],
                "summary": "Crear playlist",
                "description": "Este endpoint es para crear una nueva playlist.<br><br>",
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
        },
        "/music/pla": {
            "put": {
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Playlist"
                ],
                "summary": "Editar playlist",
                "description": "Este endpoint es para editar una playlist.<br><br>",
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
        },
        "/music/play": {
            "delete": {
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Playlist"
                ],
                "summary": "Eliminar playlist",
                "description": "Este endpoint es para eliminar una playlist.<br><br>",
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
        },
        "/music/playlist/track": {
            "post": {
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Playlist"
                ],
                "summary": "Agregar track a playlist",
                "description": "Este endpoint es para agregar una canción a una playlist.<br><br>",
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
        },
        "/music/pl/track": {
            "delete": {
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Playlist"
                ],
                "summary": "Eliminar track de playlist",
                "description": "Este endpoint es para eliminar un track de una playList.<br><br>",
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
        },
        "/music/myplaylist": {
            "put": {
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Playlist"
                ],
                "summary": "Obtener playlist",
                "description": "Este endpoint obtiene los playlist del usuario por profile ID.<br><br>",
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
        },
        "/music/tracklink": {
            "put": {
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Obtener"
                ],
                "summary": "Obtener tracklink",
                "description": "Este enpoint obtiene el link de reproducción del track, mismo que contiene un código de protección.<br><br>",
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
        },
        "/music/feedback": {
            "put": {
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Obtener"
                ],
                "summary": "Feedback",
                "description": "Este enpoint nos sirve para otorgar el Feedback de un elemento.<br><br>",
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
        
    }
    
}*/