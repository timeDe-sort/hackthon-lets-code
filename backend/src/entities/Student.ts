import { Entity, Column, PrimaryColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { ServiceCenter } from "./ServiceCenter";
import { Period } from "./Period";
import { SchoolYear } from "./SchoolYear";

@Entity('students')
export class Student {
  @PrimaryColumn()
  student_id: string;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @CreateDateColumn()
  birth_date: Date;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  mother_name: string;

  @Column()
  family_code: string;

  @ManyToOne(() => ServiceCenter)
  @JoinColumn({ name: 'service_center_id' })
  service_center: ServiceCenter;

  @Column()
  service_center_id: string;

  @ManyToOne(() => Period)
  @JoinColumn({ name: 'period_id' })
  period: Period;

  @Column()
  period_id: string;

  @ManyToOne(() => SchoolYear)
  @JoinColumn({ name: 'school_year_id' })
  school_year: SchoolYear;

  @Column()
  school_year_id: string;
  
  constructor() {
    if (!this.student_id) {
      this.student_id = uuid();
    }
  }
}
