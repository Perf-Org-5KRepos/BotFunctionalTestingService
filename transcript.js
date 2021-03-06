var _ = require("underscore");

class Transcript {
    static getMessages(transcript) {
        var messages = (transcript && _.isArray(transcript)) ? _.filter(transcript, function (obj) {
                return obj.type === "message" || obj.type === "endOfConversation";
            }
        ) : [];
        messages = _.map(messages, 
                         function(message) {
                             return _.pick(message, ["type", "text", "attachments", "speak", "locale", "textFormat", "from", "recipient", "value"]);
                         });
        return messages;    
    }
}

module.exports = Transcript;
