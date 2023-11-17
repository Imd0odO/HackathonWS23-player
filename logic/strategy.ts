import {Bet, Table} from "../models";
import {response} from "express";
import * as http from "http";

export function decide(table: Table): Bet {
    //TODO: Add Poker Logic Here... :)



    return {bet: table.players[table.activePlayer].stack}
}