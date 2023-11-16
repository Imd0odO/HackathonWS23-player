import {Bet, Table} from "../models";

export function decide(table: Table): Bet {
//TODO: Add Poker Logic Here... :)

    if (table.activePlayer && table.round > 3){
        let max_ratio = 0
        table.players.slice(table.activePlayer - 1).map(player => player.bet / player.stack).forEach(bet_ratio => max_ratio = bet_ratio > max_ratio? bet_ratio : max_ratio )

        if (max_ratio < 0.5){
            return {bet: table.players[table.activePlayer].stack}
        }
        return {bet: 42 * 0.69}
    }
    return {bet: 0}
}