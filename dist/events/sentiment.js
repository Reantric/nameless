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
exports.values = void 0;
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
            if (msg.channel.id != `821743564731973674` || msg.content.startsWith("!"))
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VudGltZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2V2ZW50cy9zZW50aW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBRXRDLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUM5QyxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFWixRQUFBLE1BQU0sR0FBNEI7SUFDM0MsSUFBSSxFQUFFLENBQUM7SUFDUCxHQUFHLEVBQUUsR0FBRztJQUNSLEtBQUssRUFBRyxDQUFDO0lBQ1QsTUFBTSxFQUFHLENBQUM7SUFDVixHQUFHLEVBQUcsQ0FBQyxHQUFHO0lBQ1YsSUFBSSxFQUFFLENBQUMsQ0FBQztDQUNULENBQUE7QUFFRCxNQUFxQixTQUFTO0lBQTlCO1FBR3FCLGFBQVEsR0FBRyxXQUFXLENBQUE7SUE4RXZDLENBQUM7SUE1RUQsSUFBSTtRQUNBLE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJO1FBQ0EsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQUdLLFFBQVEsQ0FBQyxHQUFvQixFQUFFLEdBQW1COztZQUNwRCxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLG9CQUFvQixJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztnQkFDakUsT0FBTztZQUtmLElBQUksT0FBTyxHQUFHO2dCQUNKLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixVQUFVLEVBQUUsc0JBQXNCO2dCQUNsQyxNQUFNLEVBQUUsbUVBQW1FLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWE7Z0JBQzlHLFNBQVMsRUFBRSxFQUNWO2dCQUNELGNBQWMsRUFBRSxFQUFFO2FBQ25CLENBQUM7WUFFRixJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsT0FB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