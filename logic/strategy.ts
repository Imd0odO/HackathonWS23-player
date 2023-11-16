import {Bet, Table} from "../models";

export function decide(table: Table): Bet {
    //TODO: Add Poker Logic Here... :)

    let max_bet = table.minimumBet;

    if (table.players.length > 2) {
        if (table.activePlayer != 0) {

            let average_bet = table.pot / table.activePlayer

            table.players.forEach(player => {
                if (Math.log(player.bet) < 1.2*Math.log(average_bet)) {
                    max_bet = table.players[table.activePlayer].stack
                }
            })
        }
    }
    else {
        max_bet = 0.75 * table.players[table.activePlayer].stack
    }

    return {bet: max_bet};
}