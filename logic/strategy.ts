import {Bet, Table} from "../models";

export function decide(table: Table): Bet {
//TODO: Add Poker Logic Here... :)
    let bet = 0
    if (table.round > 10){
        bet = table.players[table.activePlayer].stack
    }

    return {bet: bet}
}