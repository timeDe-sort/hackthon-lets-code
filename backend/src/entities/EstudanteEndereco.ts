import { Entity, PrimaryColumn, ManyToMany, Column, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Cidade } from "./Cidade";
import { Estudante } from "./Estudante";

@Entity('estudantes_endereco')
export class EstudanteEndereco {
  @PrimaryColumn()
  endereco_id: string;

  @ManyToMany(() => Estudante)
  @JoinColumn({ name: 'estudante_id' })
  estudante_id = Estudante;

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
