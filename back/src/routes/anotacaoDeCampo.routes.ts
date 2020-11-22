import { Router } from 'express';
import { v4 as uuid } from 'uuid';

const anotacaoDeCampoRouter = Router();

let anotacoes: any = [];

anotacaoDeCampoRouter.post('/', (request, response) => {
    const body = request.body;

    const anotacao = {
        id: uuid(),
        ...body,
        responsavelLancamento: "João Silva",
        ultimaAlteracao: new Date()
    }

    anotacoes.push(anotacao);

    return response.json(anotacao)
})

anotacaoDeCampoRouter.get('/', (request, response) => {
    return response.json(anotacoes) 
})

anotacaoDeCampoRouter.put('/:index', (request, response) => {
    const { index } = request.params;
    const body = request.body;

    const anotacao = {
        id: anotacoes[index].id,
        ...body,
        responsavelLancamento: anotacoes[index].responsavelLancamento,
        ultimaAlteracao: new Date()
    }

    anotacoes[index] = anotacao;

    return response.json(anotacao)
})

anotacaoDeCampoRouter.delete('/:index', (request, response) => {
    const { index } = request.params;

    anotacoes.splice(index, 1)

    return response.json({anotacoes})
})

anotacaoDeCampoRouter.get('/:index', (request, response) => {
    const { index } = request.params;

    return response.json(anotacoes[index])
})


export default anotacaoDeCampoRouter;