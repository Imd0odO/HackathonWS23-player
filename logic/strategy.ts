import {Bet, Table} from "../models";
import request from "http";

export function decide(table: Table): Bet {
    //TODO: Add Poker Logic Here... :)

    return {bet: ((Date.now() * Math.random()) / (table.minimumBet+table.pot+table.activePlayer+table.round+table.currentDealer+table.minimumRaise+table.smallBlind)) % 2}
}