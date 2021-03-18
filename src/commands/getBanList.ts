import * as Discord from "discord.js";
import { IBotCommand } from "../api/capi";

export default class credit implements IBotCommand {

    private readonly _command = "banList"

    name(): string {
        return "banList";
    } 

    help(): string {
        return "banList";
    }   
    
    cooldown(): number{
        return 2;
    }
    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msg: Discord.Message, Bot: Discord.Client): Promise<void> {
    
        let text = "";
        let counter = 1;
        msg.guild?.fetchBans().then((element: any) => {
            text+= counter + ". " + element; "\n";
            counter++;
        })
        msg.channel.send(text);

}
}