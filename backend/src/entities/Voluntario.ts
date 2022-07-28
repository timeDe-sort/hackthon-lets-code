import { Entity, Column, PrimaryColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Instituicao } from "./Instituicao";
import { Periodo } from "./Periodo";
import { Serie } from "./Series";

@Entity('voluntarios')
export class Voluntario {
  @PrimaryColumn()
  voluntario_id: string;

  @Column()
  voluntario_nome: string;

  @Column()
  cpf: string;

  @CreateDateColumn()
  data_nascimento: Date;

  @Column()
  universidade: string;

  @Column()
  curso: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  disciplina: string;

  @Column()
  observacoes: string;

  @ManyToOne(() => Instituicao)
  @JoinColumn({ name: 'instituicao_id' })
  instituicao_id: Instituicao;

  @ManyToOne(() => Periodo)
  @JoinColumn({ name: 'periodo_id' })
  periodo_id = Periodo;

  constructor() {
    if (!this.voluntario_id) {
      this.voluntario_id = uuid();
    }
  }
}
