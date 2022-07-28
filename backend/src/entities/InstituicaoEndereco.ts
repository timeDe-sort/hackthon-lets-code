import { Entity, PrimaryColumn, ManyToMany, Column, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Cidade } from "./Cidade";
import { Instituicao } from "./Instituicao";

@Entity('instituicoes_endereco')
export class InstituicaoEndereco {
  @PrimaryColumn()
  endereco_id: string;

  @ManyToMany(() => Instituicao)
  @JoinColumn({ name: 'instituicao_id' })
  instituicao_id = Instituicao;

  @Column()
  rua: string;

  @Column()
  numero: string

  @Column()
  complemento: string

  @ManyToOne(() => Cidade)
  @JoinColumn({ name: 'cidade_id' })
  cidade_id = Cidade;
  
  constructor() {
    if (!this.endereco_id) {
      this.endereco_id = uuid();
    }
  }
}
