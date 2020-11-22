import { Router } from 'express';
import { v4 as uuid } from 'uuid';

const pragasRouter = Router();

const pragas = [
    {
        id: uuid(),
        nome: "Lagarta Da Soja",
        nomeCientifico: "Anticarsia sp.",
        tamanho: ">=1,5cm",
        responsavelLancamento: "João Silva",
        ultimaAlteracao: new Date()
    },
    {
        id: uuid(),
        nome: "Lagarta Da Soja",
        nomeCientifico: "Anticarsia sp.",
        tamanho: "< 1,5cm",
        responsavelLancamento: "João Silva",
        ultimaAlteracao: new Date()
    },
    {
        id: uuid(),
        nome: "Lagartas com Nomuraea",
        nomeCientifico: "Doença Branca",
        tamanho: ">=1,5cm",
        responsavelLancamento: "João Silva",
        ultimaAlteracao: new Date()
    }
]

pragasRouter.post('/', (request, response) => {
    const { nome, nomeCientifico, tamanho } = request.body;

    const praga = {
        id: uuid(),
        nome,
        nomeCientifico,
        tamanho,
        responsavelLancamento: "João Silva",
        ultimaAlteracao: new Date()
    }

    pragas.push(praga);

    return response.json(praga)
})

pragasRouter.get('/', (request, response) => {
    return response.json(pragas)
})

pragasRouter.put('/:index', (request, response) => {
    const { index }  = request.params;
    const { nome, nomeCientifico, tamanho } = request.body;

    const praga = {
        id: pragas[index].id,
        nome,
        nomeCientifico,
        tamanho,
        responsavelLancamento: pragas[index].responsavelLancamento,
        ultimaAlteracao: new Date()
    }

    pragas[index] = praga;

    return response.json(praga)
})

pragasRouter.delete('/:index', (request, response) => {
    const { index } = request.params;

    pragas.splice(index, 1)

    return response.json({pragas})
})

pragasRouter.get('/:index', (request, response) => {
    const { index } = request.params;

    return response.json(pragas[index])
})


export default pragasRouter;