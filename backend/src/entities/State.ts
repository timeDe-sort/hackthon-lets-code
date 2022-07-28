import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('states')
export class State {
  @PrimaryColumn()
  state_id: string;

  @Column()
  state_name: string;

  @Column()
  uf: string;  

  constructor() {
    if (!this.state_id) {
      this.state_id = uuid();
    }
  }
}