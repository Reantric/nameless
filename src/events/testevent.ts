import * as Discord from "discord.js";
import { IBotEvent } from "../api/eapi";

export default class testevent implements IBotEvent {

    

    private readonly _command = "testevent"

    name(): string {
        return "testevent";
    } 

    help(): string {
        return "testevent";
    }   


    async runEvent(msg: Discord.Message, Bot: Discord.Client): Promise<void> {
        function randint(min: number,max: number) // min and max included
{
        return Math.floor(Math.random()*(max-min+1)+min);
}

        
        
        }

        

        
    }