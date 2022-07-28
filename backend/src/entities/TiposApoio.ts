import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('tipos_apoio')
export class TipoApoio {
  @PrimaryColumn()
  tipo_apoio_id: string;

  @Column()
  nome: string;

  constructor() {
    if (!this.tipo_apoio_id) {
      this.tipo_apoio_id = uuid();
    }
  }
}