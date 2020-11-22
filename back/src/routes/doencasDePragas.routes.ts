import { Router } from 'express';
import { v4 as uuid } from 'uuid';

const doencasDePragasRouter = Router();

const doencas = [
    {
        id: uuid(),
        nome: "Lagartas com Nomuraea (Doença Branca)",
        responsavelLancamento: "João Silva",
        ultimaAlteracao: new Date()
    },
    {
        id: uuid(),
        nome: "Lagartas com Boculovírus (Doença Preta)",
        responsavelLancamento: "João Silva",
        ultimaAlteracao: new Date()
    }
]

doencasDePragasRouter.post('/', (request, response) => {
    const { nome } = request.body;

    const doenca = {
        id: uuid(),
        nome,
        responsavelLancamento: "João Silva",
        ultimaAlteracao: new Date()
    }

    doencas.push(doenca);

    return response.json(doenca)
})

doencasDePragasRouter.get('/', (request, response) => {
    return response.json(doencas)
})

doencasDePragasRouter.put('/:index', (request, response) => {
    const { index } = request.params;
    const { nome } = request.body;

    const doenca = {
        id: doencas[index].id,
        nome,
        responsavelLancamento: doencas[index].responsavelLancamento,
        ultimaAlteracao: new Date()
    }

    doencas[index] = doenca;

    return response.json(doenca)
})

doencasDePragasRouter.delete('/:index', (request, response) => {
    const { index } = request.params;

    doencas.splice(index, 1)

    return response.json({doencas})
})

doencasDePragasRouter.get('/:index', (request, response) => {
    const { index } = request.params;

    return response.json(doencas[index])
})


export default doencasDePragasRouter;