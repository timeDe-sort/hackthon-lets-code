import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('periodos')
export class Periodo {
  @PrimaryColumn()
  periodo_id: string;

  @Column()
  nome: string;

  constructor() {
    if (!this.periodo_id) {
      this.periodo_id = uuid();
    }
  }
}