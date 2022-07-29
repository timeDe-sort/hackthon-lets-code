import { Entity, PrimaryColumn, ManyToMany, Column, ManyToOne, JoinColumn } from "typeorm";
import { City } from "./City";
import { ServiceCenter } from "./ServiceCenter";

@Entity('service_centers_address')
export class ServiceCenterAddress {
  @PrimaryColumn({ type: 'int' })
  address_id: number;

  @ManyToMany(() => ServiceCenter)
  @JoinColumn({ name: 'service_center_id' })
  service_center_id: ServiceCenter;

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
