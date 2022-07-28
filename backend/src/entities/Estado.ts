import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('estados')
export class Estado {
  @PrimaryColumn()
  estado_id: string;

  @Column()
  estado_nome: string;

  @Column()
  uf: string;  

  constructor() {
    if (!this.estado_id) {
      this.estado_id = uuid();
    }
  }
}