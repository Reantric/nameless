import * as Discord from "discord.js";
import { IBotCommand } from "../api/capi";
import * as db from "quick.db";


export default class getbanlist implements IBotCommand {

    private readonly _command = "top"

    name(): string {
        return "top";
    } 

    help(): string {
        return "top";
    }   
    
    cooldown(): number{
        return 2;
    }
    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msg: Discord.Message, Bot: Discord.Client): Promise<void> {
     /* 8   const ranks = new Discord.MessageEmbed()
                                .setTitle('Positivity Leaderboard');
                                .setColor('#edc537');
    let arr = db.all();
    for(let i = 0; i<arr.length; i++){

    }
    */
}
}
