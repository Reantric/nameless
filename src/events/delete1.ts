import * as Discord from "discord.js";
import { IBotEvent } from "../api/eapi";
var https = require('follow-redirects').https;
var fs = require('fs');

//export let credits: number = NaN
var forbiddenWords=['fach'];
export default class delete1 implements IBotEvent {

    private readonly _command = "delete1"

    

    name(): string {
        return "delete1";
    } 

    help(): string {
        return "delete1";
    }   
    

    async runEvent(msg: Discord.Message, Bot: Discord.Client): Promise<void> {
        if (msg.channel.id != `821743564731973674` || msg.content.startsWith("!"))
                return;
      
        for(var i=0;i<forbiddenWords.length;i++){
          if (msg.content.includes(forbiddenWords[i])) {
            msg.delete();
            console.log('Deleted message due to forbidden word');
            msg.author.send("Hey, you used a bad word in your recent message. It was deleted and you were striked.")
            // delete message, log, etc.
            break;
          }
        }
        
                
               /* const deleted = new Discord.MessageEmbed()
                                .setAuthor(msg.author.username,msg.author.avatarURL()!,``)
                                .setColor('greeb')
                                .addField('Sentiment',score,true)
                                .addField('Subjectivity',body[`subjectivity`],true)
                                .addField('Irony',body[`irony`],true)
                                .addField('Agreement',body[`agreement`],true)
                                .setFooter(`${body[`confidence`]}% confident`,Bot.user!.avatarURL()!)
                                .setTimestamp(new Date());
                msg.channel.send(deleted);*/



                

    }
  }