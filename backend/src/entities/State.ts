import { Entity, Column, PrimaryColumn } from "typeorm";
@Entity('states')
export class State {
  @PrimaryColumn({ type: 'smallint' })
  state_id: number;

  @Column({ type: 'varchar', length: 20 })
  state_name: string;

  @Column({ type: 'char', length: 2 })
  uf: string;  
}