export const album = {
    paths: {
        getAlbum: {
            "/music/album/{id}": {
                "get": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        "Álbum"
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
            }
        },
        getAlbums: {
            "/creators/list/album": {
                "put": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        "Álbum"
                    ],
                    "summary": "Lista de álbum",
                    "description": "Este endpoint muestra la lista de los álbums existentes.<br><br>",
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
        createAlbum: {
            "/creators/album": {
                "post": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        "Álbum"
                    ],
                    "summary": "Crear álbum",
                    "description": "Este endpoint es para crear un nuevo álbum.<br><br>",
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
        editAlbum: {
            "/creators/album": {
                "put": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        "Álbum"
                    ],
                    "summary": "Editar álbum",
                    "description": "Este endpoint es para editar un álbum.<br><br>",
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
        deleteAlbum: {
            "/creators/album": {
                "delete": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        "Álbum"
                    ],
                    "summary": "Eliminar álbum",
                    "description": "Este endpoint elimina un album de la lista de album por medio del AlbumID.<br><br>",
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
        album: {
            "album":{
                "type": "object",
        
                "properties": {
                  "AlbumID": {
                    "type": "number",
                  },
                  "Title": {
                    "type": "string",
                  },
                  "PortadaURL": {
                    "type": "string",
                  },
                }
              },
        },
        getAlbum: {
            "getAlbum":{
                "type": "object",
        
                "properties": {
                  "Title": {
                    "type": "string",
                  },
                  "Description": {
                    "type": "string",
                  },
                  "Length": {
                    "type": "number",
                  },
                  "PortadaURL": {
                    "type": "string",
                  },
                  "ReleaseDate": {
                    "type": "string",
                  },
                  "TotalItems": {
                    "type": "number",
                  },
                  "Artist": {
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
                          }
                        }
                      },
                      "Length":{
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
                        "type": "number"
                      }
                    }
                  },
                  "AlbumID": {
                    "type": "number",
                  },
                }
              },
        },
        createAlbum: {
            "createAlbum":{
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
                  "Album":{
                    "type": "object",
                    "properties":{
                      "Title":{
                        "type": "null"
                      },
                      "Description":{
                        "type": "null"
                      },
                      "Length":{
                        "type": "null"
                      },
                      "PortadaURL":{
                        "type": "null"
                      },
                      "ReleaseDate":{
                        "type": "null"
                      },
                      "TotalItems":{
                        "type": "boolean"
                      },
                      "Active":{
                        "type": "null"
                      },
                      "Artist":{
                        "type": "null"
                      },
                      "AlbumID":{
                        "type": "null"
                      }
                    }
                  }
                }
            },
        },
        editAlbum: {
            "editAlbum":{
                  "type": "object",
                  "properties":{
                    "Response":{
                        "type": "object",
                        "properties": {
                            "Msg":{
                                "type": "string"
                                },
                                "Code":{
                                "type": "number"
                            }
                        }  
                    },
                    "Album":{
                        "type": "object",
                        "properties":{
                          "Title":{
                            "type": "null"
                          },
                          "Description":{
                            "type": "null"
                          },
                          "Length":{
                            "type": "null"
                          },
                          "PortadaURL":{
                            "type": "null"
                          },
                          "ReleaseDate":{
                            "type": "null"
                          },
                          "TotalItems":{
                            "type": "boolean"
                          },
                          "Active":{
                            "type": "boolean"
                          },
                          "Artists":{
                            "type": "array",
                            "properties":{
                              "ArtistID":{
                                "type": "number"
                              }
                            }
                          },
                          "AlbumID":{
                            "type": "number"
                          }
                        }
                      }
                },
            },
        },
        getAlbums: {
            "getAlbums":{
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
                  "Albums":{
                    "type": "object",
                    "properties":{
                      "Title":{
                        "type": "string"
                      },
                      "Description":{
                        "type": "string"
                      },
                      "Length":{
                        "type": "number"
                      },
                      "PortadaURL":{
                        "type": "string"
                      },
                      "ReleaseDate":{
                        "type": "string"
                      },
                      "TotalItems":{
                        "type": "number"
                      },
                      "Active":{
                        "type": "boolean"
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
                      "AlbumID":{
                        "type": "number"
                      }
                    }
                  }
                }
              },
        },
        deleteAlbum: {
            "deleteAlbum":{
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