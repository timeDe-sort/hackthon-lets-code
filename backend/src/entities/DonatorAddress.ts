import { Entity, PrimaryColumn, ManyToMany, Column, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { City } from "./City";
import { Donator } from "./Donator";

@Entity('donators_address')
export class DonatorAddress {
  @PrimaryColumn()
  address_id: string;

  @ManyToMany(() => Donator)
  @JoinColumn({ name: 'donator_id' })
  donator_id: Donator;

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
