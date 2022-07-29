import { Entity, PrimaryColumn, ManyToMany, Column, ManyToOne, JoinColumn } from "typeorm";
import { City } from "./City";
import { Student } from "./Student";

@Entity('students_address')
export class StudentAddress {
  @PrimaryColumn({ type: 'int' })
  address_id: number;

  @ManyToMany(() => Student)
  @JoinColumn({ name: 'student_id' })
  student_id: Student;
  
  @Column({ type: 'varchar', length: 50 })
  street: string;

  @Column({ type: 'smallint' })
  number: string

  @Column({ type: 'varchar', length: 30 })
  address_complement: string

  @ManyToOne(() => City)
  @JoinColumn({ name: 'city_id' })
  city_id: City;
}
