import {Bet, Table} from "../models";

export function decide(table: Table): Bet {
//TODO: Add Poker Logic Here... :)

    if ((Date.now() / 1000) % 2) {
        return {bet: table.players[table.activePlayer].stack}
    }
    return {bet: 0}
}