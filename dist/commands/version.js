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
class version {
    constructor() {
        this._command = "version";
    }
    name() {
        return "version";
    }
    help() {
        return "version";
    }
    cooldown() {
        return 2;
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msg, Bot) {
        return __awaiter(this, void 0, void 0, function* () {
            const versionEmbed = new Discord.MessageEmbed()
                .setAuthor('Bendy Man aka The Creator', Bot.user.avatarURL(), ``)
                .setDescription('Current version and build. Can be found at ``')
                .setColor([200, 50, 20])
                .setThumbnail(Bot.user.avatarURL())
                .addField('Version', 0.3, true)
                .addField('Build', 'alpha', true)
                .addField('Current update', 'Added clan functionality and new troops')
                .addField('Future update plans', 'Add more troops and fix fight')
                .setFooter('Bendy Corporation', msg.author.avatarURL())
                .setTimestamp(new Date());
            msg.channel.send(versionEmbed);
        });
    }
}
exports.default = version;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy92ZXJzaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBR3RDLE1BQXFCLE9BQU87SUFBNUI7UUFFcUIsYUFBUSxHQUFHLFNBQVMsQ0FBQTtJQWdDekMsQ0FBQztJQTlCRyxJQUFJO1FBQ0EsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUk7UUFDQSxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRUQsUUFBUTtRQUNKLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsR0FBb0IsRUFBRSxHQUFtQjs7WUFDdEUsTUFBTSxZQUFZLEdBQUcsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO2lCQUN0QixTQUFTLENBQUMsMkJBQTJCLEVBQUMsR0FBRyxDQUFDLElBQUssQ0FBQyxTQUFTLEVBQUcsRUFBQyxFQUFFLENBQUM7aUJBQ2hFLGNBQWMsQ0FBQywrQ0FBK0MsQ0FBQztpQkFDL0QsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQztpQkFDckIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFLLENBQUMsU0FBUyxFQUFHLENBQUM7aUJBQ3BDLFFBQVEsQ0FBQyxTQUFTLEVBQUMsR0FBRyxFQUFDLElBQUksQ0FBQztpQkFDNUIsUUFBUSxDQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsSUFBSSxDQUFDO2lCQUM5QixRQUFRLENBQUMsZ0JBQWdCLEVBQUMseUNBQXlDLENBQUM7aUJBQ3BFLFFBQVEsQ0FBQyxxQkFBcUIsRUFBQywrQkFBK0IsQ0FBQztpQkFDL0QsU0FBUyxDQUFDLG1CQUFtQixFQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFHLENBQUM7aUJBQ3RELFlBQVksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7WUFDbEQsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkMsQ0FBQztLQUFBO0NBRUo7QUFsQ0QsMEJBa0NDIn0=