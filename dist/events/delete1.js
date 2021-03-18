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
var https = require('follow-redirects').https;
var fs = require('fs');
const db = require("quick.db");
var forbiddenWords = ['banana', 'apple', 'strawberry'];
class delete1 {
    constructor() {
        this._command = "delete1";
    }
    name() {
        return "delete1";
    }
    help() {
        return "delete1";
    }
    runEvent(msg, Bot) {
        return __awaiter(this, void 0, void 0, function* () {
            if (msg.channel.id != `816678642254872680` || msg.content.startsWith("!"))
                return;
            for (var i = 0; i < forbiddenWords.length; i++) {
                if (msg.content.includes(forbiddenWords[i])) {
                    let strikeAmount = db.add(`${msg.author.id}.strikes`, 1);
                    msg.reply(`${msg.author.username} now has ${db.get(`${msg.author.id}.strikes`)} strikes!`);
                    console.log(strikeAmount);
                    msg.delete();
                    console.log('Deleted message due to forbidden word');
                    msg.author.send("Hey, you used a bad word in your recent message. It was deleted and you were given a strike."
                        + "You now have " + `${db.get(`${msg.author.id}.strikes`)} strikes!`);
                    break;
                }
            }
        });
    }
}
exports.default = delete1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlMS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ldmVudHMvZGVsZXRlMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUM5QyxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkIsK0JBQStCO0FBRS9CLElBQUksY0FBYyxHQUFDLENBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxZQUFZLENBQUMsQ0FBQztBQUNuRCxNQUFxQixPQUFPO0lBQTVCO1FBRXFCLGFBQVEsR0FBRyxTQUFTLENBQUE7SUFpRHZDLENBQUM7SUE3Q0MsSUFBSTtRQUNBLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFJO1FBQ0EsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUdLLFFBQVEsQ0FBQyxHQUFvQixFQUFFLEdBQW1COztZQUNwRCxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLG9CQUFvQixJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztnQkFDakUsT0FBTztZQUVmLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxjQUFjLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDO2dCQUN0QyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUUzQyxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUMsQ0FBQztvQkFDeEQsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxZQUFZLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFBO29CQUMxRixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO29CQUN6QixHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO29CQUNyRCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyw4RkFBOEY7MEJBQzdHLGVBQWUsR0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUVuRSxNQUFNO2lCQUNQO2FBQ0Y7UUFrQkwsQ0FBQztLQUFBO0NBQ0Y7QUFuREgsMEJBbURHIn0=