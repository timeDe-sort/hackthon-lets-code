import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('series')
export class Serie {
  @PrimaryColumn()
  serie_id: string;

  @Column()
  serie_nome: string;

  constructor() {
    if (!this.serie_id) {
      this.serie_id = uuid();
    }
  }
}