import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Estado } from "./Estado";

@Entity('cidades')
export class Cidade {
  @PrimaryColumn()
  cidade_id: string;

  @Column()
  cidade_nome: string;

  @ManyToOne(() => Estado)
  @JoinColumn({ name: 'estado_id' })
  estado_id = Estado;

  constructor() {
    if (!this.cidade_id) {
      this.cidade_id = uuid();
    }
  }
}