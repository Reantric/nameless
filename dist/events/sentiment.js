"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.credits = exports.values = void 0;
const Discord = require("discord.js");
var https = require('follow-redirects').https;
var fs = require('fs');
exports.values = {
    "P+": 1,
    "P": 0.5,
    "NEU": 0,
    "NONE": 0,
    "N": -0.5,
    "N+": -1,
};
exports.credits = NaN;
class sentiment {
    constructor() {
        this._command = "sentiment";
    }
    name() {
        return "sentiment";
    }
    help() {
        return "sentiment";
    }
    runEvent(msg, Bot) {
        return __awaiter(this, void 0, void 0, function* () {
            if (msg.channel.id != `821743564731973674` && msg.channel.id != `822258266075430933` || msg.content.startsWith("!"))
                return;
            var options = {
                'method': 'POST',
                'hostname': 'api.meaningcloud.com',
                'path': `/sentiment-2.1?key=bb7856b3cc9b538b7534467a7afbea0b&lang=en&txt=${encodeURI(msg.content)}&model=test`,
                'headers': {},
                'maxRedirects': 20
            };
            var req = https.request(options, function (res) {
                var chunks = [];
                res.on("data", function (chunk) {
                    chunks.push(chunk);
                });
                res.on("end", function (chunk) {
                    var body = JSON.parse(Buffer.concat(chunks).toString());
                    let score = body[`score_tag`];
                    let colorScheme = () => {
                        let j = () => {
                            var newSize = 16777214 - 2;
                            var oldSize = 1 - (-1);
                            var oldScale = exports.values[score] - (-1);
                            return (newSize * oldScale / oldSize) + 2;
                        };
                        return Math.floor(j());
                    };
                    const sentiment = new Discord.MessageEmbed()
                        .setAuthor(msg.author.username, msg.author.avatarURL(), ``)
                        .setColor(colorScheme())
                        .addField('Sentiment', score, true)
                        .addField('Subjectivity', body[`subjectivity`], true)
                        .addField('Irony', body[`irony`], true)
                        .addField('Agreement', body[`agreement`], true)
                        .setFooter(`${body[`confidence`]}% confident`, Bot.user.avatarURL())
                        .setTimestamp(new Date());
                    msg.channel.send(sentiment);
                    exports.credits = body['status']['remaining_credits'];
                });
                res.on("error", function (error) {
                    console.error(error);
                });
            });
            req.end();
        });
    }
}
exports.default = sentiment;
function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VudGltZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2V2ZW50cy9zZW50aW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBRXRDLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUM5QyxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFWixRQUFBLE1BQU0sR0FBZ0M7SUFDL0MsSUFBSSxFQUFFLENBQUM7SUFDUCxHQUFHLEVBQUUsR0FBRztJQUNSLEtBQUssRUFBRyxDQUFDO0lBQ1QsTUFBTSxFQUFHLENBQUM7SUFDVixHQUFHLEVBQUcsQ0FBQyxHQUFHO0lBQ1YsSUFBSSxFQUFFLENBQUMsQ0FBQztDQUNULENBQUE7QUFDVSxRQUFBLE9BQU8sR0FBVyxHQUFHLENBQUE7QUFFaEMsTUFBcUIsU0FBUztJQUE5QjtRQUdxQixhQUFRLEdBQUcsV0FBVyxDQUFBO0lBa0Z2QyxDQUFDO0lBaEZELElBQUk7UUFDQSxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSTtRQUNBLE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUFHSyxRQUFRLENBQUMsR0FBb0IsRUFBRSxHQUFtQjs7WUFDcEQsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxvQkFBb0IsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxvQkFBb0IsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7Z0JBQzNHLE9BQU87WUFLZixJQUFJLE9BQU8sR0FBRztnQkFDSixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsVUFBVSxFQUFFLHNCQUFzQjtnQkFDbEMsTUFBTSxFQUFFLG1FQUFtRSxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhO2dCQUM5RyxTQUFTLEVB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