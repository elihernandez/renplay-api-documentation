export const playlist = {
    paths: {
        getPlaylist: {
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
            }
        },
        createPlaylist: {
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
            }
        },
        editPlaylist: {
            "/music/pl": {
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
            }
        },
        deletePlaylist: {
            "/music/pl": {
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
            }
        },
        getPlaylists: {
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
            }
        }
    },
    schemas: {
        getPlaylist: {
            "getPlaylist":{
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
                  "ReleaseDate": {
                    "type": "string",
                  },
                  "PosterType": {
                    "type": "number",
                  },
                  "ContentType": {
                    "type": "string",
                  },
                  "ParentSection": {
                    "type": "null"
                  },
                  "MusicCollectionID": {
                    "type": "number",
                  },
                  "Order": {
                    "type": "number",
                  },
                  "TotalItems": {
                    "type": "number",
                  },
                  "Length": {
                    "type": "number",
                  },
                  "OwnerID": {
                    "type": "number",
                  },
                  "IsPublic": {
                    "type": "boolean",
                  },
                  "Track": {
                    "type": "object",
                    "properties":{
                      "RegID":{
                        "type": "number",
                      },
                      "Title":{
                        "type": "string",
                      },
                      "Artist":{
                        "type": "object",
                        "properties":{
                          "ArtistID":{
                            "type": "number",
                          },
                          "Title":{
                            "type": "string",
                          },                                    
                        }
                      },
                      "Lenth":{
                        "type": "number",
                      },
                      "PortadaURL":{
                        "type": "string",
                      },
                      "TrackNumber":{
                        "type": "number",
                      },
                      "AlbumTitle":{
                        "type": "string",
                      },
                      "AlbumID":{
                        "type": "number",
                      },
                    }
                  },
                }
            }
        },
        createPlaylist: {
            "createPlaylist":{
                "type": "object",
        
                "properties":{
                  "Response":{
                    "type": "object",
        
                      "properties":{
                        "Msg":{
                          "type": "string",
                        },
                        "Code":{
                          "type": "number",
                        }
                      }
                  },
                  "MusicCollectionDTO":{
                    "type": "object",
        
                      "properties":{
                        "RegID":{
                          "type": "number",
                        },
                        "Title":{
                          "type": "string",
                        },
                        "Description":{
                          "type": "string",
                        },
                        "IsPublic":{
                          "type": "boolean",
                        }
                      }
                  }
                }
            }
        },
        editPlaylist: {
            "editPlaylist":{
                "type": "object",
        
                "properties":{
                  "Response":{
                    "type": "object",
        
                      "properties":{
                        "Msg":{
                          "type": "string",
                        },
                        "Code":{
                          "type": "number",
                        },
                      }
                  },
                  "MusicCollectionDTO":{
                    "type": "object",
        
                      "properties":{
                        "RegID":{
                          "type": "number",
                        },
                        "Title":{
                          "type": "string",
                        },
                        "Description":{
                          "type": "string",
                        },
                        "IsPublic":{
                          "type": "boolean"
                        }
                      }
                  }
                }
            }
        },
        deletePlaylist: {
            "deletePlaylist":{
                "type": "object",
                "properties":{
        
                  "Msg":{
                    "type": "string",
                  },
                  "Code":{
                    "type": "number"
                  }
                }
            }
        },
        getPlaylists: {
            "getplaylists":{
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
        
                      "Title": {
                        "type": "string",
                      },
                      "Description": {
                        "type": "string",
                      },
                      "PortadaURL": {
                        "type": "string",
                      },
                      "ReleaseDate": {
                        "type": "string",
                      },
                      "PosterType": {
                        "type": "number",
                      },
                      "ContentType": {
                        "type": "string",
                      },
                      "ParentSection": {
                        "type": "null",
                      },
                      "MusicCollectionID": {
                        "type": "number",
                      },
                      "Order": {
                        "type": "number",
                      },
                      "TotalItems": {
                        "type": "number",
                      },
                      "Length": {
                        "type": "number",
                      },
                      "OwnerID": {
                        "type": "number",
                      },
                      "IsPublic": {
                        "type": "boolean",
                      },
                      "Playlist":{
                        "type": "object",
                        "properties":{
        
                          "RegID": {
                            "type": "number",
                          },
                          "Title": {
                            "type": "string",
                          },
                          "Description": {
                            "type": "string",
                          },
                          "ArtistID": {
                            "type": "number",
                          },
                          "OwnerID": {
                            "type": "number",
                          },
                          "PortadaURL": {
                            "type": "string",
                          },
                          "ReleaseDate": {
                            "type": "string",
                          },
                          "ContentType": {
                            "type": "string",
                          },
                          "IsPublic": {
                            "type": "boolean"
                          }
                        }
        
                      }
                    }
                  }
                }
              }
        }
    }
}




/*{
        "schemas": {
            "musicHomeBody": {
                "type": "object",
                "properties": {
                  "DeviceID": {
                    "type": "string",
                    "example": "-C3M-VzZxiTrpuzNJkXV-DWaUF5_3VhoOGtEV3zQn0k"
                    },
                  "ProfileID": {
                    "type": "number",
                    "example": 63
                    }
                }
            },
            "musicSpotlightHomeBody": {
                "type": "object",
      
                  "properties": {
                    "DeviceID": {
                      "type": "string",
                      "example": "ObUdavVpzk32y8o-Y0KLPMZUDVz8WCTtIsUHdrX1ehE"
                          },
                    "ProfileID": {
                      "type": "number",
                      "example": "0"
                          }
                      }
                  }
        }
    },
    "paths": {
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
        }
    }
}*/