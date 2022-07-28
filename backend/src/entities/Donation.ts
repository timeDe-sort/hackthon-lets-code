import { Entity, PrimaryColumn, ManyToMany, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Donator } from "./Donator";
import { Student } from "./Student";
import { ServiceCenter } from "./ServiceCenter";
import { SupportType } from "./SupportType";

@Entity('donations')
export class Donation {
  @PrimaryColumn()
  donation_id: string;

  @ManyToMany(() => ServiceCenter)
  service_center_id: ServiceCenter;
  @JoinColumn({ name: 'service_center_id' })

  @ManyToMany(() => Donator)
  @JoinColumn({ name: 'donator_id' })
  donator_id: Donator;

  @ManyToMany(() => Student)
  @JoinColumn({ name: 'student_id' })
  student_id: Student;

  @ManyToMany(() => SupportType)
  @JoinColumn({ name: 'support_type_id' })
  support_type_id: SupportType;
  
  constructor() {
    if (!this.donation_id) {
      this.donation_id = uuid();
    }
  }
}
