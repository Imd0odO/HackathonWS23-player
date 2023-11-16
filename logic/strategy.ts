import {Bet, Table} from "../models";

export function decide(table: Table): Bet {
//TODO: Add Poker Logic Here... :)

    if (((Math.random() * Date.now()) / (table.pot+table.round+42)) % 2) {
        return {bet: table.players[table.activePlayer].stack}
    }
    return {bet: 0}
}