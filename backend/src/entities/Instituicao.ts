import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('instituicoes')
export class Instituicao {
  @PrimaryColumn()
  instituicao_id: string;

  @Column()
  instituicao_nome: string;

  @Column()
  cnpj: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  constructor() {
    if (!this.instituicao_id) {
      this.instituicao_id = uuid();
    }
  }
}