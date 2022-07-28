import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('service_centers')
export class ServiceCenter {
  @PrimaryColumn()
  service_center_id: string;

  @Column()
  service_center_name: string;

  @Column()
  cnpj: string;

  @Column()
  email: string;

  @Column()
  password: string;

  constructor() {
    if (!this.service_center_id) {
      this.service_center_id = uuid();
    }
  }
}