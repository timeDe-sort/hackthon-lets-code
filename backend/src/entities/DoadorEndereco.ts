import { Entity, PrimaryColumn, ManyToMany, Column, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Cidade } from "./Cidade";
import { Doador } from "./Doador";

@Entity('doadores_endereco')
export class DoadorEndereco {
  @PrimaryColumn()
  endereco_id: string;

  @ManyToMany(() => Doador)
  @JoinColumn({ name: 'doador_id' })
  doador_id = Doador;

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
