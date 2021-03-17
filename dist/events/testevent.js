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
class testevent {
    constructor() {
        this._command = "testevent";
    }
    name() {
        return "testevent";
    }
    help() {
        return "testevent";
    }
    runEvent(msg, Bot) {
        return __awaiter(this, void 0, void 0, function* () {
            function randint(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);
            }
        });
    }
}
exports.default = testevent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2V2ZW50cy90ZXN0ZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHQSxNQUFxQixTQUFTO0lBQTlCO1FBSXFCLGFBQVEsR0FBRyxXQUFXLENBQUE7SUF3QnZDLENBQUM7SUF0QkQsSUFBSTtRQUNBLE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJO1FBQ0EsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQUdLLFFBQVEsQ0FBQyxHQUFvQixFQUFFLEdBQW1COztZQUNwRCxTQUFTLE9BQU8sQ0FBQyxHQUFXLEVBQUMsR0FBVztnQkFFeEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxDQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUMsQ0FBQyxDQUFDLEdBQUMsR0FBRyxDQUFDLENBQUM7WUFDekQsQ0FBQztRQUlPLENBQUM7S0FBQTtDQUtKO0FBNUJMLDRCQTRCSyJ9