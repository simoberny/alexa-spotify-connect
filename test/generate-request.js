module.exports = {
    intentRequest: function (intentName, slots, accessToken) {
        return {
            "session": {
                "application": {
                    "applicationId": "amzn1.ask.skill.893f8558-b899-463a-8c6c-43faa97894bb"
                },
                "user": {
                    "accessToken": accessToken || null
                }
            },
            "request": {
                "type": "IntentRequest",
                "intent": {
                    "name": intentName || "",
                    "slots": slots || {}
                }
            },
            "context": {
                "System": {
                    "application": {
                        "applicationId": "amzn1.ask.skill.893f8558-b899-463a-8c6c-43faa97894bb"
                    },
                    "user": {
                        "userId": "amzn1.ask.account.VOID",
                        "accessToken": accessToken || null
                    }
                }
            }
        }
    },
    intentRequestSessionAttributes: function (intentName, sessionAttributes, slots, accessToken, newSession, locale) {
        return {
            "session": {
                "new": newSession || false,
                "application": {
                    "applicationId": "amzn1.ask.skill.893f8558-b899-463a-8c6c-43faa97894bb"
                },
                "user": {
                    "accessToken": accessToken || null
                },
                "attributes": sessionAttributes || {}
            },
            "request": {
                "type": "IntentRequest",
                "intent": {
                    "name": intentName || "",
                    "slots": slots || {}
                },
                "locale": locale || "en-GB"
            },
            "context": {
                "System": {
                    "application": {
                        "applicationId": "amzn1.ask.skill.893f8558-b899-463a-8c6c-43faa97894bb"
                    },
                    "user": {
                        "userId": "amzn1.ask.account.VOID",
                        "accessToken": accessToken || null
                    }
                }
            }
        }
    },
    requestType: function (requestType, applicationId, locale) {
        return {
            "session": {
                "application": {
                    "applicationId": applicationId || "amzn1.ask.skill.893f8558-b899-463a-8c6c-43faa97894bb"
                },
                "user": {}
            },
            "request": {
                "type": requestType || "LaunchRequest",
                "locale": locale || "en-GB"
            },
            "context": {
                "System": {
                    "application": {},
                    "user": {}
                }
            }
        };
    },
    intentRequestNoSession: function (intentName) {
        return {
            "request": {
                "type": "IntentRequest",
                "intent": {
                    "name": intentName || ""
                }
            },
            "context": {
                "System": {
                    "application": {
                        "applicationId": "amzn1.ask.skill.893f8558-b899-463a-8c6c-43faa97894bb"
                    },
                    "user": {
                        "userId": "amzn1.ask.account.VOID",
                        "accessToken": "example-access-token"
                    }
                }
            }
        }
    }
}
