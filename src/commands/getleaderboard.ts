import * as Discord from "discord.js";
import { IBotCommand } from "../api/capi";
import * as db from "quick.db";


export default class getbanlist implements IBotCommand {

    private readonly _command = "getleaderboard"

    name(): string {
        return "getleaderboard";
    } 

    help(): string {
        return "getleaderboard";
    }   
    
    cooldown(): number{
        return 2;
    }
    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msg: Discord.Message, Bot: Discord.Client): Promise<void> {
        const embed = new Discord.MessageEmbed()
        .setTitle('Positivity Leaderboard!')
        .setDescription('Here are the top ten most positive people in the server!')
        .setColor('#0099ff')
        .setAuthor(Bot.user!.username, Bot.user!.avatarURL()!)
        //.setImage('https://i.redd.it/l28662sbcec51.png')
        .setImage('https://i.imgur.com/aowYZQG.jpeg')
        //.setAuthor(msg.author.username)
        .addFields(
            { name: 'my field title', value: 'some stuff' },
            { name: 'my field title2', value: 'some stuff' },
            { name: 'my field title3', value: 'some stuff' }
        )
    
        .setTimestamp()
    
    msg.channel.send(embed);         
    /*let arr = db.all();
    for(let i = 0; i<arr.length; i++){
        
    }*/
    
}
}
