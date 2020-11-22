import { Router } from 'express';
import { v4 as uuid } from 'uuid';

const inimigosNaturaisRouter = Router();

const inimigos = [
    {
        id: uuid(),
        nome: "Calosoma Granulatum",
        responsavelLancamento: "João Silva",
        ultimaAlteracao: new Date()
    },
    {
        id: uuid(),
        nome: "Callida Sp.",
        responsavelLancamento: "João Silva",
        ultimaAlteracao: new Date()
    }
]

inimigosNaturaisRouter.post('/', (request, response) => {
    const { nome } = request.body;

    const inimigo = {
        id: uuid(),
        nome,
        responsavelLancamento: "João Silva",
        ultimaAlteracao: new Date()
    }

    inimigos.push(inimigo);

    return response.json(inimigo)
})

inimigosNaturaisRouter.get('/', (request, response) => {
    return response.json(inimigos)
})

inimigosNaturaisRouter.put('/:index', (request, response) => {
    const { index } = request.params;
    const { nome } = request.body;

    const inimigo = {
        id: inimigos[index].id,
        nome,
        responsavelLancamento: inimigos[index].responsavelLancamento,
        ultimaAlteracao: new Date()
    }

    inimigos[index] = inimigo;

    return response.json(inimigo)
})

inimigosNaturaisRouter.delete('/:index', (request, response) => {
    const { index } = request.params;

    inimigos.splice(index, 1)

    return response.json({inimigos})
})

inimigosNaturaisRouter.get('/:index', (request, response) => {
    const { index } = request.params;

    return response.json(inimigos[index])
})


export default inimigosNaturaisRouter;