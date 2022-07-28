import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('support_type')
export class SupportType {
  @PrimaryColumn()
  support_type_id: string;

  @Column()
  name: string;

  constructor() {
    if (!this.support_type_id) {
      this.support_type_id = uuid();
    }
  }
}