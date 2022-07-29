import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('service_centers')
export class ServiceCenter {
  @PrimaryColumn({ type: 'int' })
  service_center_id: number;

  @Column({ type: 'varchar', length: 50 })
  service_center_name: string;

  @Column({ type: 'char', length: 14 })
  cnpj: string;

  @Column({type: 'varchar', length: 50})
  email: string;

  @Column({type: 'char', length: 64})
  password: string;
}