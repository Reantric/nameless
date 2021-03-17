import * as Discord from "discord.js";
import { IBotEvent } from "../api/eapi";
var https = require('follow-redirects').https;
var fs = require('fs');

export default class sentiment implements IBotEvent {


    private readonly _command = "sentiment"

    name(): string {
        return "sentiment";
    } 

    help(): string {
        return "sentiment";
    }   


    async runEvent(msg: Discord.Message, Bot: Discord.Client): Promise<void> {
        if (msg.channel.id != `821743564731973674`)
                return;
        

            
              
        var options = {
                  'method': 'POST',
                  'hostname': 'api.meaningcloud.com',
                  'path': `/sentiment-2.1?key=bb7856b3cc9b538b7534467a7afbea0b&lang=en&txt=${encodeURI(msg.content)}&model=test`,
                  'headers': {
                  },
                  'maxRedirects': 20
                };
              
                var req = https.request(options, function (res: { on: (arg0: string, arg1: { (chunk: any): void; (chunk: any): void; (error: any): void; }) => void; }) {
                var chunks: any[] = [];
              
                  res.on("data", function (chunk: any) {
                    chunks.push(chunk);
                  });
              
                  res.on("end", function (chunk: any) {
                    var body = Buffer.concat(chunks);
                    let content = body.toString();
                    console.log(content);
                    msg.channel.send(content);
                  });
              
                  res.on("error", function (error: any) {
                    console.error(error);
                  });
                });
              
                req.end(); 
        
        
        }

    }
    function randint(min: number,max: number) // min and max included
    {
            return Math.floor(Math.random()*(max-min+1)+min);
    }