import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { State } from "./State";

@Entity('cities')
export class City {
  @PrimaryColumn()
  city_id: string;

  @Column()
  city_name: string;

  @ManyToOne(() => State)
  @JoinColumn({ name: 'state_id' })
  state_id: State;

  constructor() {
    if (!this.city_id) {
      this.city_id = uuid();
    }
  }
}