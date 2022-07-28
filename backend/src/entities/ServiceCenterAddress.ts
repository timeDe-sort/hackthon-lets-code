import { Entity, PrimaryColumn, ManyToMany, Column, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { City } from "./City";
import { ServiceCenter } from "./ServiceCenter";

@Entity('service_centers_address')
export class ServiceCenterAddress {
  @PrimaryColumn()
  address_id: string;

  @ManyToMany(() => ServiceCenter)
  @JoinColumn({ name: 'service_center_id' })
  service_center_id: ServiceCenter;

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
