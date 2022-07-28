import { Entity, PrimaryColumn, ManyToMany, Column, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { City } from "./City";
import { Student } from "./Student";

@Entity('students_address')
export class StudentAddress {
  @PrimaryColumn()
  address_id: string;

  @ManyToMany(() => Student)
  @JoinColumn({ name: 'student_id' })
  student_id: Student;

  @Column()
  street: string;

  @Column()
  number: string

  @Column()
  address_complement: string

  @ManyToOne(() => City)
  @JoinColumn({ name: 'city_id' })
  city_id: City;
  
  constructor() {
    if (!this.address_id) {
      this.address_id = uuid();
    }
  }
}
