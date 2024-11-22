import express, { Router } from 'express'

const router = Router();

router.get('/', (_, res) => {
    res.send("Ola mundo!");
})

router.get('/user', (_, res) => {
    res.send("Ola mundo!!!");
})

const server = express();

server.use(router);

server.listen(8080, () => {
    console.log("App rodando na porta 8080, dotenv")
})