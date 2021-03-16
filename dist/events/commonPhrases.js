"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class commonPhrases {
    constructor() {
        this._command = "commonPhrases";
    }
    name() {
        return "commonPhrases";
    }
    help() {
        return "commonPhrases";
    }
    runEvent(msg, Bot) {
        return __awaiter(this, void 0, void 0, function* () {
            function randint(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);
            }
            const g = msg.content.toLowerCase();
            const f = msg.channel;
            const loveArray = ["i love you too !", "why are you so far", "can you play with my hair"];
            const cuteArray = ["no ur cuter", "shut shut no you", "we are together :3"];
            const hateArray = ["as you should", "time to friendzone you!", "do you really feel that way?", "i hate you too", "WHY???", "no you don't", "sorry you feel that way", "that's my job"];
            if (g.includes("cute") || g.includes("cutie") || g.includes("qt"))
                f.send(cuteArray[randint(0, cuteArray.length - 1)]);
            else if (g.includes("misf") || g.includes("miss"))
                f.send("i miss you too");
            else if (g.includes("so far"))
                f.send("WHY ARE YOU?");
            else if (g.includes("lauv you") || g.includes("lauv u") || g.includes("love u") || g.includes("lauv") || g.includes("love you"))
                f.send(loveArray[randint(0, loveArray.length - 1)]);
            else if (g.includes("right back"))
                f.send("shut");
            else if (g.includes("shut"))
                f.send("you shut !");
            else if (g.includes("hair"))
                f.send("play with my hair please?!");
            else if (g.includes("mwah") || g.includes("kith"))
                f.send("<:kith:815054904539217950>");
            else if (g.includes("<:ugh:814960219187576873>") || g.includes("rude"))
                f.send("🙄");
            else if (g.includes("ihu") || g.includes("ihy") || g.includes("hate u") || g.includes("hate you"))
                f.send(hateArray[randint(0, hateArray.length - 1)]);
            else if (g.includes("fuck u") || g.includes("fuck you") || g.includes("fym")) {
                f.send("when?");
                f.send("drop the addy");
            }
            else if (g.includes("hand"))
                f.send("my hands are pink thanks to you");
            else if (g.includes("men"))
                f.send("ikr they suck so much i hate men");
            else if (g === ".")
                f.send("4'11 4'11 4'11 ");
        });
    }
}
exports.default = commonPhrases;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uUGhyYXNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ldmVudHMvY29tbW9uUGhyYXNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBLE1BQXFCLGFBQWE7SUFBbEM7UUFJcUIsYUFBUSxHQUFHLGVBQWUsQ0FBQTtJQXdFM0MsQ0FBQztJQXRFRCxJQUFJO1FBQ0EsT0FBTyxlQUFlLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQUk7UUFDQSxPQUFPLGVBQWUsQ0FBQztJQUMzQixDQUFDO0lBR0ssUUFBUSxDQUFDLEdBQW9CLEVBQUUsR0FBbUI7O1lBQ3BELFNBQVMsT0FBTyxDQUFDLEdBQVcsRUFBQyxHQUFXO2dCQUV4QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsR0FBRyxHQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMsR0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6RCxDQUFDO1lBRU8sTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNwQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQ3RCLE1BQU0sU0FBUyxHQUFHLENBQUMsa0JBQWtCLEVBQUMsb0JBQW9CLEVBQUUsMkJBQTJCLENBQUMsQ0FBQTtZQUN4RixNQUFNLFNBQVMsR0FBRyxDQUFDLGFBQWEsRUFBQyxrQkFBa0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUFBO1lBQzFFLE1BQU0sU0FBUyxHQUFHLENBQUMsZUFBZSxFQUFDLHlCQUF5QixFQUFFLDhCQUE4QixFQUFDLGdCQUFnQixFQUFDLFFBQVEsRUFBQyxjQUFjLEVBQUMseUJBQXlCLEVBQUMsZUFBZSxDQUFDLENBQUE7WUFFaEwsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQzdELENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBRWhELElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDN0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO2lCQUVuQixJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO2dCQUM3QixDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBO2lCQUVqQixJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7Z0JBQy9ILENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7aUJBRTNDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUM7Z0JBQ2pDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7aUJBRVQsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDM0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtpQkFFZixJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUMzQixDQUFDLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUE7aUJBRS9CLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDakQsQ0FBQyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFBO2lCQUUvQixJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDdEUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtpQkFFUCxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO2dCQUNqRyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2lCQUUzQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFDO2dCQUM3RSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2dCQUNmLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7YUFDdEI7aUJBRUksSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO2lCQUV4QyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUN0QixDQUFDLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLENBQUE7aUJBRXpDLElBQUksQ0FBQyxLQUFLLEdBQUc7Z0JBQ2QsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBRWpDLENBQUM7S0FBQTtDQUtKO0FBNUVMLGdDQTRFSyJ9