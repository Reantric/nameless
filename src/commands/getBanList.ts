import * as Discord from "discord.js";
import { IBotCommand } from "../api/capi";

export default class getbanlist implements IBotCommand {

    private readonly _command = "banlist"

    name(): string {
        return "banlist";
    } 

    help(): string {
        return "banlist";
    }   
    
    cooldown(): number{
        return 2;
    }
    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msg: Discord.Message, Bot: Discord.Client): Promise<void> {
        
        msg.guild?.fetchBans().then(a => {
            for (const user of a.array()){
                msg.channel.send(user.user.username);
            }
        })

}
}