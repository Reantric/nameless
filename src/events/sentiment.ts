import * as Discord from "discord.js";
import { IBotEvent } from "../api/eapi";
var https = require('follow-redirects').https;
var fs = require('fs');

export let values: {[id: string]: number}  = {
  "P+": 1,
  "P": 0.5,
  "NEU" : 0,
  "NONE" : 0,
  "N" : -0.5,
  "N+": -1,
}

export let credits: number = NaN

export default class sentiment implements IBotEvent {


    private readonly _command = "sentiment"

    name(): string {
        return "sentiment";
    } 

    help(): string {
        return "sentiment";
    }   


    async runEvent(msg: Discord.Message, Bot: Discord.Client): Promise<void> {
        if (msg.channel.id != `821743564731973674` || msg.content.startsWith("!"))
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
                    var body: any = JSON.parse(Buffer.concat(chunks).toString());
                    let score = body[`score_tag`]

                    let colorScheme = () => {
                      let j = () => {
                        var newSize = 16777214 - 2;
                        var oldSize = 1 - (-1);
                        var oldScale: number = values[score] - (-1);
                        return (newSize * oldScale / oldSize) + 2 as number;
                    
                    }
                      return Math.floor(j()) as number 
                    }

                    const sentiment = new Discord.MessageEmbed()
                                .setAuthor(msg.author.username,msg.author.avatarURL()!,``)
                                .setColor(colorScheme())
                                .addField('Sentiment',score,true)
                                .addField('Subjectivity',body[`subjectivity`],true)
                                .addField('Irony',body[`irony`],true)
                                .addField('Agreement',body[`agreement`],true)
                                .setFooter(`${body[`confidence`]}% confident`,Bot.user!.avatarURL()!)
                                .setTimestamp(new Date());
                msg.channel.send(sentiment);

                if (isNaN(credits))
                    credits = body['status']['remaining_credits']
                  /*  while (content.length > 2000){
                      msg.channel.send(content.slice(0,2000));
                      content = content.slice(2000);
                    }
                 //   console.log(content);
                    msg.channel.send(content);*/

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