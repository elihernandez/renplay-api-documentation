export const home = {
    paths: {
        getHome: {
            "/music/section/home": {
                "put": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        "Inicio"
                    ],
                    "summary": "Inicio",
                    "description": "Este endpoint lleva al usuario al inicio de la aplicación.<br><br>",
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
        getSpotlight: {
            "/music/spotlight/home": {
                "put": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        "Inicio"
                    ],
                    "summary": "Spotlight",
                    "description": "Este endpoint muestra los anuncios que la aplicación tiene para el usuario, como lo más nuevo o tendencias.<br><br>",
                    "requestBody": {           
                            "schema": {
                                "$ref": "#/components/schemas/musicSpotlightHomeBody"
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
        spotlight: {
            "spotlight":{
                "type": "object",
        
                "properties": {
                  "RegID": {
                    "type": "number",
                  },
                  "Order": {
                    "type": "number",
                  },
                  "ImageURL_landscape": {
                    "type": "string",
                  },
                  "ImageURL_portrait": {
                    "type": "string",
                  },
                  "Duration": {
                    "type": "number",
                  },
                  "ContentID": {
                    "type": "string",
                  },
                  "ContentType": {
                    "type": "string",
                  },
                  "Start": {
                    "type": "string",
                  },
                  "End": {
                    "type": "string",
                  },
                }
            }
        },
        musicHome: {
            "musicHome":{
                "type": "object",
                "properties": {
                  "SuscriptionStatus": {
                    "type": "number",
                  },
                  "SuscriptionResponse": {
                    "type": "string",
                  },
                  "musicSection":{
                    "type": "object",
                    "properties": {
                      "Title": {
                        "type": "string",
                      },
                      "Description": {
                        "type": "string",
                      },
                      "PortadaURL": {
                        "type": "null",
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
                      "Album":{
                        "type": "object",
                        "properties":{
                          "AlbumID":{
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
                          "PortadaURL":{
                            "type": "string"
                          }
                        }
                      },
        
                      
                        SectionAudiobook:{
                            "type": "object",
                            "properties":{
                              "Title": {
                                "type": "string",
                              },               
                              "Description": {
                                "type": "string",
                              },
                              "PortadaURL": {
                                "type": "null",
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
                              "Audiobook":{
                                "type": "object",
                                "properties":{
                                  "AudiobookID": {
                                    "type": "number",
                                  },
                                  "Title": {
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
                                  "Narrator": {
                                    "type": "string",
                                  },
                                  "PortadaURL": {
                                    "type": "string",
                                  },
                                }
                              },  
                            }     
                        },

                        SectionEstreno:{
                            "type": "object",
                            "properties":{
                              
                              "Title":{
                                "type": "string",
                              },
                              "Description":{
                                "type": "string",
                              },
                              "PortadaURL": {
                                "type": "null",
                              },
                              "ReleaseDate":{
                                "type": "string",
                              },
                              "PosterType":{
                                "type": "number",
                              },
                              "ContentType":{
                                "type": "string",
                              },
                              "ParentSection":{
                                "type": "null",
                              },
                              "MusicCollectionID":{
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
                              "Track":{
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
                                },
                              }
                            }
                        },
                     
                        SectionmisPlayList:{
                            "type": "object",
                            "properties":{
            
                              "Title":{
                                "type": "string",
                              },
                              "Description":{
                                "type": "string",
                              },
                              "PortadaURL": {
                                "type": "null",
                              },
                              "ReleaseDate":{
                                "type": "string",
                              },
                              "PosterType":{
                                "type": "number",
                              },
                              "ContentType":{
                                "type": "string",
                              },
                              "ParentSection":{
                                "type": "null",
                              },
                              "MusicCollectionID":{
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
                              "PlayList":{
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
                                  "ArtistID":{
                                    "type": "number",
                                  },
                                  "OwnerID":{
                                    "type": "number",
                                  },
                                  "PortadaURL":{
                                    "type": "string",
                                  },
                                  "ReleaseDate":{
                                    "type": "string",
                                  },
                                  "ContentType":{
                                    "type": "string",
                                  },
                                  "Ispublic":{
                                    "type": "boolean"
                                  }
                                }
                              }
                            }
                        },
                      
                     
                        SectionRecomendadosParaTi:{
                            "type": "object",
                            "properties":{
            
                              "Title":{
                                "type": "string",
                              },
                              "Description":{
                                "type": "string",
                              },
                              "PortadaURL": {
                                "type": "null",
                              },
                              "ReleaseDate":{
                                "type": "string",
                              },
                              "PosterType":{
                                "type": "number",
                              },
                              "ContentType":{
                                "type": "string",
                              },
                              "ParentSection":{
                                "type": "null",
                              },
                              "MusicCollectionID":{
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
                              "Track":{
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
                                },
                              }
                            }
                        },
        
                     
                        SectionColeccionesParaTi:{
                            "type": "object",
                            "properties":{
            
                              "Title":{
                                "type": "string",
                              },
                              "Description":{
                                "type": "string",
                              },
                              "PortadaURL": {
                                "type": "null",
                              },
                              "ReleaseDate":{
                                "type": "string",
                              },
                              "PosterType":{
                                "type": "number",
                              },
                              "ContentType":{
                                "type": "string",
                              },
                              "ParentSection":{
                                "type": "null",
                              },
                              "MusicCollectionID":{
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
                              "playList":{
                                "type": "object",
                        
                                "properties": {
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
                              },
                            }
                        },
        
                        SectionArtistasPopulares:{
                            "type": "object",
                            "properties":{
            
                              "Title":{
                                "type": "string",
                              },
                              "Description":{
                                "type": "string",
                              },
                              "PortadaURL": {
                                "type": "null",
                              },
                              "ReleaseDate":{
                                "type": "string",
                              },
                              "PosterType":{
                                "type": "number",
                              },
                              "ContentType":{
                                "type": "string",
                              },
                              "ParentSection":{
                                "type": "null",
                              },
                              "MusicCollectionID":{
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
                              "Artist":{
                                "type": "object",
                        
                                "properties": {
                                  "ArtistID": {
                                    "type": "number",
                                  },
                                  "Title": {
                                    "type": "string",
                                  },
                                  "Description":{
                                    "type": "string",
                                  },
                                  "PortadaURL":{
                                    "type": "string"
                                  }
                                }
                              },
                            }
                        }
        
                    },
                         
                  },     
                      
                },          
            }
        },
        
        

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
    },
    "paths": {
        "/music/section/home": {
            "put": {
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Inicio"
                ],
                "summary": "Inicio",
                "description": "Este endpoint lleva al usuario al inicio de la aplicación.<br><br>",
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
        "/music/spotlight/home": {
            "put": {
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Inicio"
                ],
                "summary": "Spotlight",
                "description": "Este endpoint muestra los anuncios que la aplicación tiene para el usuario, como lo más nuevo o tendencias.<br><br>",
                "requestBody": {           
                        "schema": {
                            "$ref": "#/components/schemas/musicSpotlightHomeBody"
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