import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { State } from "./State";

@Entity('cities')
export class City {
  @PrimaryGeneratedColumn({ type: 'smallint' })
  city_id: number;

  @Column({ type: 'varchar', length: 50 })
  city_name: string;

  @ManyToOne(() => State)
  @JoinColumn({ name: 'state_id' })
  state_id: State;
}
