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
class getbanlist {
    constructor() {
        this._command = "top";
    }
    name() {
        return "top";
    }
    help() {
        return "top";
    }
    cooldown() {
        return 2;
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msg, Bot) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.default = getbanlist;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0bGVhZGVyYm9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvZ2V0bGVhZGVyYm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFLQSxNQUFxQixVQUFVO0lBQS9CO1FBRXFCLGFBQVEsR0FBRyxLQUFLLENBQUE7SUEyQnJDLENBQUM7SUF6QkcsSUFBSTtRQUNBLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxJQUFJO1FBQ0EsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELFFBQVE7UUFDSixPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFDRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLEdBQW9CLEVBQUUsR0FBbUI7O1FBUzlFLENBQUM7S0FBQTtDQUNBO0FBN0JELDZCQTZCQyJ9