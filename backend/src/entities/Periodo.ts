import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('periodos')
export class Periodo {
  @PrimaryColumn()
  period_id: string;

  @Column()
  name: string;

  constructor() {
    if (!this.period_id) {
      this.period_id = uuid();
    }
  }
}