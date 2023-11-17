import express, { Express, Request, Response } from 'express';
import {decide} from "./logic/strategy";
import {Bet, Table} from "./models";

const app: Express = express();
const port = 8000;

app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.send('Poker Typescript Player');
});

app.post('/', async (req: Request, res: Response) => {
    let request = await fetch("http://home.anxietyprime.de:8080", {body: req.body})
    let bet: Bet = await request.json()
    res.json(bet);
})

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});