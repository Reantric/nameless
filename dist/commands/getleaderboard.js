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
class getbanlist {
    constructor() {
        this._command = "getleaderboard";
    }
    name() {
        return "getleaderboard";
    }
    help() {
        return "getleaderboard";
    }
    cooldown() {
        return 2;
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msg, Bot) {
        return __awaiter(this, void 0, void 0, function* () {
            const embed = new Discord.MessageEmbed()
                .setTitle('Positivity Leaderboard!')
                .setAuthor(Bot.user.username, Bot.user.avatarURL())
                .addFields({ name: 'my field title', value: 'some stuff' }, { name: 'my field title2', value: 'some stuff' }, { name: 'my field title3', value: 'some stuff' })
                .setTimestamp();
            msg.channel.send(embed);
        });
    }
}
exports.default = getbanlist;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0bGVhZGVyYm9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvZ2V0bGVhZGVyYm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFLdEMsTUFBcUIsVUFBVTtJQUEvQjtRQUVxQixhQUFRLEdBQUcsZ0JBQWdCLENBQUE7SUFxQ2hELENBQUM7SUFuQ0csSUFBSTtRQUNBLE9BQU8sZ0JBQWdCLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUk7UUFDQSxPQUFPLGdCQUFnQixDQUFDO0lBQzVCLENBQUM7SUFFRCxRQUFRO1FBQ0osT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ0QsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxHQUFvQixFQUFFLEdBQW1COztZQUN0RSxNQUFNLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7aUJBQ3ZDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQztpQkFDbkMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxJQUFLLENBQUMsU0FBUyxFQUFHLENBQUM7aUJBRXJELFNBQVMsQ0FDTixFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEVBQy9DLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsRUFDaEQsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxDQUNuRDtpQkFFQSxZQUFZLEVBQUUsQ0FBQTtZQUVuQixHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQU01QixDQUFDO0tBQUE7Q0FDQTtBQXZDRCw2QkF1Q0MifQ==