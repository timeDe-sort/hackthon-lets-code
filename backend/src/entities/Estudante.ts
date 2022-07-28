import { Entity, Column, PrimaryColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Instituicao } from "./Instituicao";
import { Periodo } from "./Periodo";
import { Serie } from "./Series";

@Entity('estudantes')
export class Estudante {
  @PrimaryColumn()
  estudante_id: string;

  @Column()
  nome_completo: string;

  @Column()
  cpf: string;

  @CreateDateColumn()
  data_nascimento: Date;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  nome_mae: string;

  @Column()
  codigo_familiar: string;

  @ManyToOne(() => Instituicao)
  @JoinColumn({ name: 'instituicao_id' })
  instituicao_id: Instituicao;

  @ManyToOne(() => Periodo)
  @JoinColumn({ name: 'periodo_id' })
  periodo_id = Periodo;

  @ManyToOne(() => Serie)
  @JoinColumn({ name: 'serie_id' })
  serie_id = Serie;
  
  constructor() {
    if (!this.estudante_id) {
      this.estudante_id = uuid();
    }
  }
}
