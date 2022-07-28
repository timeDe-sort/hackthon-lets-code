import { Entity, Column, PrimaryColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { ServiceCenter } from "./ServiceCenter";
import { Period } from "./Period";

@Entity('volunteer')
export class Volunteer {
  @PrimaryColumn()
  volunteer_id: string;

  @Column()
  volunteer_nome: string;

  @Column()
  cpf: string;

  @CreateDateColumn()
  birth_date: Date;

  @Column()
  university: string;

  @Column()
  degree: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  subject: string;

  @Column()
  observation: string;

  @ManyToOne(() => ServiceCenter)
  @JoinColumn({ name: 'service_center_id' })
  service_center_id: ServiceCenter;

  @ManyToOne(() => Period)
  @JoinColumn({ name: 'period_id' })
  period_id: Period;

  constructor() {
    if (!this.volunteer_id) {
      this.volunteer_id = uuid();
    }
  }
}
