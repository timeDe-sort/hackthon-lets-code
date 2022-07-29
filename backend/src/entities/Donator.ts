import { type } from "os";
import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('donator')
export class Donator {
  @PrimaryColumn({ type: 'int' })
  donator_id: number;

  @Column({ type: 'varchar', length: 50 })
  donator_name: string;

  @Column({ type: 'varchar', length: 14 })
  document: string;

  @Column({ type: 'varchar', length: 50 })
  email: string;

  @Column({ type: 'char', length: 64 })
  password: string;
}
