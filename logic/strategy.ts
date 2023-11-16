import {Bet, Table} from "../models";

export function decide(table: Table): Bet {
//TODO: Add Poker Logic Here... :)
    let bet = 0
    if (table.round > 5){
        if(Math.random() < 0.42){
            bet = table.players[table.activePlayer].stack
        }
    }

    return {bet: bet}
}