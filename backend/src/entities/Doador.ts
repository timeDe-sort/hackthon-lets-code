import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('doador')
export class Doador {
  @PrimaryColumn()
  doador_id: string;

  @Column()
  doador_nome: string;

  @Column()
  documento: string;

  @Column()
  email: string;

  @Column()
  senha: string;
  
  constructor() {
    if (!this.doador_id) {
      this.doador_id = uuid();
    }
  }
}
