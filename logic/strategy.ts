import {Bet, Table} from "../models";
import {response} from "express";

export function decide(table: Table): Bet {
    //TODO: Add Poker Logic Here... :)

    return {bet: table.players[table.activePlayer].stack}
}