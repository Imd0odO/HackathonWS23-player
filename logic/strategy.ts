import {Bet, Table} from "../models";

export function decide(table: Table): Bet {
    //TODO: Add Poker Logic Here... :)

    return (((Math.random() * Date.now()) / (table.pot+table.round+42)) % 2 && table.round > 2) ? {bet: table.players[table.activePlayer].stack} : {bet: 0}
}