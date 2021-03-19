import * as Discord from "discord.js";
import { IBotCommand } from "../api/capi";
import * as db from "quick.db";


export default class getbanlist implements IBotCommand {

    private readonly _command = "help"

    name(): string {
        return "help";
    } 

    help(): string {
        return "help";
    }   
    
    cooldown(): number{
        return 2;
    }
    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msg: Discord.Message, Bot: Discord.Client): Promise<void> {
        const embed = new Discord.MessageEmbed()
        .setTitle('Eclipse Help is Here!')
        .setDescription('Here are a list of our commands!')
        .setColor('#0099ff')
        .setAuthor(Bot.user!.username, Bot.user!.avatarURL()!)
        //.setAuthor(msg.author.username)
        //.addField(mod,'Mod only commands')
        .addFields(
            { name: '!banlist', value: 'DMs the mod with the list of banned users from the server' },
            { name: '!strike', value: 'A manual strike to a user' }
        )
        //.addField('Member available commands',' ')
        .addFields(
            { name:'!getleaderboard', value:'Gives leaderboard of the top ten most positive members based on sentiment scores'},
        )
    
        .setTimestamp()
    
    msg.channel.send(embed);         
    /*let arr = db.all();
    for(let i = 0; i<arr.length; i++){
        
    }*/
    
}
}