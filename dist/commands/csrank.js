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
const Discord = require("discord.js");
const fetch = require('node-fetch');
const request = require('request');
var firstLine;
class csrank {
    constructor() {
        this._command = "csrank";
    }
    name() {
        return "csrank";
    }
    help() {
        return "csrank";
    }
    cooldown() {
        return 2;
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msg, Bot) {
        return __awaiter(this, void 0, void 0, function* () {
            function randint(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);
            }
            const rankArr = ["Unknown", "Silver I", "Silver II", "Silver III", "Silver IV", "Silver Elite", "Silver Elite Master", "Gold Nova I", "Gold Nova II",
                "Gold Nova III", "Gold Nova Master", "Master Guardian I", "Master Guardian II", "Master Guardian Elite", "Distinguished Master Guardian",
                "Legendary Eagle", "Legendary Eagle Master", "Supreme Master First Class", "The Global Elite", "Varun Duvvur-bendy"];
            if (args[0] == undefined) {
                msg.channel.send("My brother! You must Supply Me an ID !!!1");
                return;
            }
            let api = args[0];
            const options = {
                url: `https://steamid.io/lookup/${api}`,
                method: 'GET',
                headers: {
                    "Accept": "text/html",
                    "User-Agent": "Chrome"
                }
            };
            request(options, function (err, res, body) {
                var stringCheck = body.toString();
                firstLine = stringCheck.split('\n')[7];
                firstLine = firstLine.split(" ")[firstLine.split(" ").length - 1];
                firstLine = firstLine.slice(1, firstLine.length - 3);
                if (isNaN(firstLine)) {
                    msg.channel.send("NOT VALID STEAM ID!");
                    return;
                }
                msg.channel.send(`STEAM64 ID: ${firstLine} \nCSGO-STATS is pretty slow. Gimme some time!`).then(msg => {
                    msg.delete(9000)
                        .catch(console.error);
                });
                msg.channel.send({ files: ["https://media.giphy.com/media/IgjQgp6ZsiWU28JtmE/giphy.gif"] }).then(msg => {
                    msg.delete(9000)
                        .catch(console.error);
                });
                const options2 = {
                    url: `https://csgo-stats.com/player/${firstLine}`,
                    method: 'GET',
                    headers: {
                        "Accept": "text/html",
                        "User-Agent": "Chrome"
                    }
                };
                request(options2, function (err, res, body) {
                    var imageArr = body.toString();
                    let index = imageArr.indexOf(`<div class="rank"><img src="/custom/img/ranks`);
                    imageArr = imageArr.slice(index, index + 56);
                    if (imageArr.includes('-')) {
                        imageArr = 0;
                    }
                    else {
                        try {
                            imageArr = imageArr.match(/\d+/)[0];
                        }
                        catch (_a) {
                            imageArr = 0;
                        }
                    }
                    console.log(imageArr);
                    let rankEmbed = new Discord.MessageEmbed()
                        .setTitle(`${api}'s CSGO Rank!`)
                        .setColor(Math.floor(Math.random() * 16777214) + 1)
                        .setDescription(`${api}'s rank: **${rankArr[imageArr < 18 ? imageArr : 19]}**`)
                        .setImage(`https://csgostats.gg/images/ranks/${imageArr}.png`);
                    msg.channel.send(rankEmbed);
                });
            });
        });
    }
}
exports.default = csrank;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NyYW5rLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2NzcmFuay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUV0QyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDcEMsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25DLElBQUksU0FBYyxDQUFDO0FBR25CLE1BQXFCLE1BQU07SUFBM0I7UUFFcUIsYUFBUSxHQUFHLFFBQVEsQ0FBQTtJQW9HeEMsQ0FBQztJQWxHRyxJQUFJO1FBQ0EsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQUk7UUFDQSxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBRUQsUUFBUTtRQUNKLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsR0FBb0IsRUFBRSxHQUFtQjs7WUFFdEUsU0FBUyxPQUFPLENBQUMsR0FBVyxFQUFDLEdBQVc7Z0JBRXhDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxHQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pELENBQUM7WUFFTyxNQUFNLE9BQU8sR0FBRyxDQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLHFCQUFxQixFQUFFLGFBQWEsRUFBRSxjQUFjO2dCQUNuSixlQUFlLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUMsdUJBQXVCLEVBQUUsK0JBQStCO2dCQUN2SSxp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