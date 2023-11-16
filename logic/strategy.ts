import {Bet, Table} from "../models";

export function decide(table: Table): Bet {
    //TODO: Add Poker Logic Here... :)

    let max_bet = table.minimumBet;

    if (table.players.length > 2) {
        if (table.activePlayer != 0) {
            let bets = table.players.map(player => player.bet)
            bets.slice(table.activePlayer)

            let normalized_sum = 0;

            bets.forEach(bet => normalized_sum += Math.log(bet))

            let normalized = normalized_sum / table.activePlayer

            let highBet = false;
            bets.forEach(bet => {
                if (Math.log(bet) > 1.2*normalized) {
                    highBet = true
                }
            })
            if (!highBet){
                max_bet = table.players[table.activePlayer].stack
            }
        }
    }
    else {
        max_bet = 0.75 * table.players[table.activePlayer].stack
    }

    return {bet: max_bet};
}