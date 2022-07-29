import { Entity, Column, PrimaryColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Period } from "./enum";
import { ServiceCenter } from "./ServiceCenter";

@Entity('volunteer')
export class Volunteer {
  @PrimaryColumn({ type: 'smallint' })
  volunteer_id: number;

  @Column({ type: 'varchar', length: 50 })
  volunteer_name: string;

  @Column({ type: 'char', length: 11 })
  cpf: string;

  @CreateDateColumn({ type: 'date' })
  birth_date: Date;

  @Column({ type: 'varchar', length: 50 })
  university: string;

  @Column({ type: 'varchar', length: 50 })
  degree: string;

  @Column({ type: 'varchar', length: 50 })
  email: string;

  @Column({ type: 'char', length: 64 })
  password: string;

  @Column({ type: 'char', length: 20 })
  subject: string;

  @Column({ type: 'varchar', length: 500 })
  observation: string;

  @ManyToOne(() => ServiceCenter)
  @JoinColumn({ name: 'service_center_id' })
  service_center_id: ServiceCenter;

  @Column({
    type: 'enum',
    enum: Period,
  })
  period: Period;
}
