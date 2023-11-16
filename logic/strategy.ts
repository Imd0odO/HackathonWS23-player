import {Bet, Table} from "../models";

export function decide(table: Table): Bet {
    //TODO: Add Poker Logic Here... :)

    let our_bet;

    if (table.round < 5) {
        if (table.players.length == 2) {
            if (table.activePlayer != 0) {

                let average_bet = table.pot / table.activePlayer

                let high_bet = false
                let max_bet = 0;
                let min_bet = 100000000;
                table.players.forEach(player => {
                    max_bet = max_bet < player.bet ? player.bet : max_bet
                    min_bet = min_bet > player.bet ? player.bet : min_bet
                    if (Math.log(player.bet) > 1.1 * Math.log(average_bet) || player.bet > 1.2 * player.stack) {
                        high_bet = true
                    }
                })
                if (!high_bet) {
                    our_bet = (max_bet + 0.25 * table.players[table.activePlayer].stack > table.players[table.activePlayer].stack) ? (table.players[table.activePlayer].stack) : (max_bet + 0.25 * table.players[table.activePlayer].stack)
                } else {
                    if (min_bet > 35) {
                        our_bet = min_bet
                    } else {
                        our_bet = 0
                    }
                }
            } else {
                our_bet = table.minimumBet
            }
        } else {
            our_bet = 0.75 * table.players[table.activePlayer].stack
        }
    }
    else {
        our_bet = 0
    }

    return {bet: our_bet};
}