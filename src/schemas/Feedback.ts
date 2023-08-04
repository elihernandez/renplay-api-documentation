export const feedback = {
    paths: {
        getFeedback: {
            "/music/feedback": {
                "put": {
                    "produces": [
                        "application/json"
                    ],
                    "tags": [
                        "Feedback"
                    ],
                    "summary": "Feedback",
                    "description": "Este enpoint nos sirve para otorgar el Feedback de un elemento.<br><br>",
                    "requestBody": {
                      "content":{
                        "schema": {
                            "$href": "#/schemas/getFeedbackBody/musicFeedbackBody"
                        }
                      },
                    },
                    "responses": {
                        "200": {
                            "description": "El usuario ingresó con éxito",
                        }
                    }
                }
            }
        }
    },
    schemas: {
        getFeedback: {
          "musicFeedback":{
            "type": "object",
            "properties":{
    
              "Msg": {
                "type": "string"
              },
              "Code": {
                "type": "number"
              }
            }
          }
        },
        getFeedbackBody: {
          "musicFeedbackBody":{
            "type": "object",
            "properties":{
    
              "DeviceID":{
                "type": "string",
                "example": "v9aK1dAIg2fqaapqLsiXSE9n9ngKkvIdwkbrW5-pgV0"
              },
              "ProfileID":{
                "type": "number",
                "example": "1"
              },
              "IsLiked":{
                "type": "boolean",
                "example": false
              },
              TrackID:{
                "type": "number",
                "example": "21"
              }
            }
          }
        }
        
    }
}