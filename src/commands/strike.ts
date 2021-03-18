import * as Discord from "discord.js";
import { IBotCommand } from "../api/capi";
import { credits } from "../events/sentiment";
import * as db from "quick.db";

export default class strike implements IBotCommand {

    private readonly _command = "strike"

    name(): string {
        return "strike";
    } 

    help(): string {
        return "strike";
    }   
    
    cooldown(): number{
        return 2;
    }
    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msg: Discord.Message, Bot: Discord.Client): Promise<void> {
        
        let strikeAmount = db.add (`${msg.author.id}.money`,1);
    }
}