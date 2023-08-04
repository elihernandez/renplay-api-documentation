export const audiobook = {
    paths: {
        getAudioBook: {
            "/music/audiobook/{id}": {
                "get": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        "Mostrar"
                    ],
                    "summary": "AudioLibro",
                    "description": "Este endpoint devuelve un audiolibro enviando el id.<br><br>",
                    "parameters": {
                        "- in": "path",
                        "name": "id",
                        "schema": {
                            "type": "integer",
                            "description": "The mode of a workout"
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
            
        }
    },
    schemas: {
        audiobook: {
            "AudioBook": {
                "type":"object",
    
                "properties": {
                "Title": {
                    "type":"string",
                },
                "Description": {
                    "type":"string",
                },
                "Lenght": {
                    "type": "number",
                },
                "PortadaURL": {
                    "type": "string",
                },
                "Language": {
                    "type": "string",
                },
                "ASIN": {
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
                    }
                    }
                },
                "Narrator": {
                    "type": "string",
                },
                "ReleaseDate": {
                    "type": "string",
                },
                "Episode": {
                    "type": "number",
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
                            "type": "string"
                        }
                        }
                    },
                    "Length":{
                        "type": "number",
                    },
                    "TrackNumber":{
                        "type": "number",
                    },
                    "PortadaURL":{
                        "type": "string",
                    },
                    "AudioBookTitle":{
                        "type": "string",
                    },
                    "AudioBookID":{
                        "type": "number"
                    }
                    }
                    },
                    "AudiobookID": {
                        "type": "number",
                    }
                }
            }
        }
    }     
}

/*{
    
    "paths": {
        "/music/audiobook/{id}": {
            "get": {
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Mostrar"
                ],
                "summary": "AudioLibro",
                "description": "Este endpoint devuelve un audiolibro enviando el id.<br><br>",
                "parameters": {
                    "- in": "path",
                    "name": "id",
                    "schema": {
                        "type": "integer",
                        "description": "The mode of a workout"
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