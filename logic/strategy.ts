import {Bet, Table} from "../models";

export function decide(table: Table): Bet {
    //TODO: Add Poker Logic Here... :)
    return {bet: table.players[table.activePlayer].stack};
}