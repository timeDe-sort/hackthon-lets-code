import { Entity, PrimaryColumn, ManyToMany, JoinColumn, Column, Timestamp } from "typeorm";
import { Donator } from "./Donator";
import { Student } from "./Student";
import { ServiceCenter } from "./ServiceCenter";
import { SupportType } from "./enum";


@Entity('donations')
export class Donation {
  @PrimaryColumn({ type: 'int' })
  donation_id: number;

  @ManyToMany(() => ServiceCenter)
  service_center_id: ServiceCenter;
  @JoinColumn({ name: 'service_center_id' })

  @ManyToMany(() => Donator)
  @JoinColumn({ name: 'donator_id' })
  donator_id: Donator;

  @ManyToMany(() => Student)
  @JoinColumn({ name: 'student_id' })
  student_id: Student;

  @Column({
    type: 'enum',
    enum: SupportType,
  })
  support_type: SupportType

  @Column({ type: 'timestamp' })
  created_at: Timestamp
}
