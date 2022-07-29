import { Entity, Column, PrimaryColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { ServiceCenter } from "./ServiceCenter";
import { SchoolYear } from "./enum";
import { Period } from "./enum";

@Entity('students')
export class Student {
  @PrimaryColumn({ type: 'int' })
  student_id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'char', length: 11 })
  cpf: string;

  @CreateDateColumn({ type: 'date' })
  birth_date: Date;

  @Column({ type: 'varchar', length: 50 })
  email: string;

  @Column({ type: 'char', length: 64 })
  password: string;

  @Column({ type: 'varchar', length: 50 })
  mother_name: string;

  @Column({ type: 'char', length: 8 })
  family_code: string;

  @ManyToOne(() => ServiceCenter)
  @JoinColumn({ name: 'service_center_id' })
  service_center_id: ServiceCenter;

  @Column({
    type: 'enum',
    enum: Period,
  })
  period: Period;

  @Column({
    type: 'enum',
    enum: SchoolYear,
  })
  school_year: SchoolYear;
}
