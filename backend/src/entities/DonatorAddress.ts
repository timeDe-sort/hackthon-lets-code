import { Entity, PrimaryColumn, ManyToMany, Column, ManyToOne, JoinColumn } from "typeorm";
import { City } from "./City";
import { Donator } from "./Donator";

@Entity('donators_address')
export class DonatorAddress {
  @PrimaryColumn({ type: 'int' })
  address_id: number;

  @ManyToMany(() => Donator)
  @JoinColumn({ name: 'donator_id' })
  donator_id: Donator;

  @Column({ type: 'varchar', length: 50 })
  street: string;

  @Column({ type: 'smallint' })
  number: number;

  @Column({ type: 'varchar', length: 30 })
  address_complement: string;

  @ManyToOne(() => City)
  @JoinColumn({ name: 'city_id' })
  city_id: City;
}
