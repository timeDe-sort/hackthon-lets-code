import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('donator')
export class Donator {
  @PrimaryColumn()
  donator_id: string;

  @Column()
  donator_name: string;

  @Column()
  document: string;

  @Column()
  email: string;

  @Column()
  password: string;
  
  constructor() {
    if (!this.donator_id) {
      this.donator_id = uuid();
    }
  }
}
