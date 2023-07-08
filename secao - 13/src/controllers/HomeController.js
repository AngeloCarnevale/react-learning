import Aluno from '../models/Aluno'

class HomeControler {
    async index(req, res) {
        const aluno = await Aluno.create({
            nome: 'Maria',
            sobrenome: 'Miranda',
            email: 'maria@email.com',
            idade: 32,
            peso: 50,
            altura: 1.65,
        })
        res.json(aluno)
    }
}

export default new HomeControler()