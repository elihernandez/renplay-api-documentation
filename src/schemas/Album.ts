export const album = {
    paths: {
        getAlbum: {
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
            }
        },
        getAlbums: {
            "/creators/list/album": {
                "put": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        ""
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
                        ""
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
            "/creator/album": {
                "put": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        ""
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
            "/create/album": {
                "delete": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        ""
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
            "Album": {
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
        }
    }
}