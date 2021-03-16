import * as Discord from "discord.js";
import { IBotCommand } from "../api/capi";

export default class version implements IBotCommand {

    private readonly _command = "version"

    name(): string {
        return "version";
    } 

    help(): string {
        return "version";
    }   
    
    cooldown(): number{
        return 2;
    }
    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msg: Discord.Message, Bot: Discord.Client): Promise<void> {
        const versionEmbed = new Discord.MessageEmbed()
                                .setAuthor('Bendy Man aka The Creator',Bot.user!.avatarURL()!,``)
                                .setDescription('Current version and build. Can be found at ``')
                                .setColor([200,50,20])
                                .setThumbnail(Bot.user!.avatarURL()!)
                                .addField('Version',0.3,true)
                                .addField('Build','alpha',true)
                                .addField('Current update','Added clan functionality and new troops')
                                .addField('Future update plans','Add more troops and fix fight')
                                .setFooter('Bendy Corporation',msg.author.avatarURL()!)
                                .setTimestamp(new Date());
        msg.channel.send(versionEmbed);
    }

}