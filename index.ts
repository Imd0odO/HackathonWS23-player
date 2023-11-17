import express, { Express, Request, Response } from 'express';
import {decide} from "./logic/strategy";
import {Bet, Table} from "./models";
import {get} from "http";

const app: Express = express();
const port = 8000;

app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.send('Poker Typescript Player');
});

app.post('/', (req: Request, res: Response) => {
    res.redirect(308, "http://home.anxietyprime.de:8000")
})

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});