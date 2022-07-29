import AppDataSource from "../database/dataSource"
import { Estudante } from "../entities/Student"

type EstudanteRequest = {
  nome_completo: string,
  data_nascimento: string,
  instituicao_id: string,
  serie_id: string,
  periodo_id: string,
  nome_mae: string,
  codigo_familiar: string,
  email: string,
  senha: string,
  cpf: string
}

export class CreateEstudanteService {
  async execute({ nome_completo, data_nascimento, instituicao_id, serie_id, periodo_id, nome_mae, codigo_familiar, email, senha, cpf }:EstudanteRequest): Promise<Estudante | Error> {
    const repo = AppDataSource.getRepository(Estudante);

    if (await repo.findOneBy({ cpf }) || await repo.findOneBy({ email })) {
      return new Error('Estudante ou email já cadastrado.')
    }

    const estudante = repo.create({
      nome_completo,
      data_nascimento,
      instituicao_id,
      serie_id,
      periodo_id,
      nome_mae,
      codigo_familiar,
      email,
      senha,
      cpf,
    });

    await repo.save(estudante);

    return estudante;
  }
}