import {Bet, Table} from "../models";

export function decide(table: Table): Bet {
//TODO: Add Poker Logic Here... :)
    return {bet: 0.42 * table.players[table.activePlayer].stack}
}