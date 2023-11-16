import {Bet, Table} from "../models";

export function decide(table: Table): Bet {
    //TODO: Add Poker Logic Here... :)
    let max_bet = 0;
    table.players.forEach(player => {
        max_bet = (player.bet > max_bet && player.stack != player.bet ? player.bet : max_bet);
    })

    return {bet: max_bet};
}