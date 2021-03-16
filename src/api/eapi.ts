import * as Discord from "discord.js";

export interface IBotEvent { //basically the blueprint for all commands to follow!
    name(): string;
    help(): string;
    runEvent(msg: Discord.Message, Bot: Discord.Client): Promise<void>; /*give msg and bot, and is of type Promise<void> 
    which all that really means is that it's expecting the data to be asynchronous; not orderly. Basically it'll be a lot more lenient with you ;D
    */
}