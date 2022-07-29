import { Entity, PrimaryColumn, ManyToMany, Column, ManyToOne, JoinColumn } from "typeorm";
import { City } from "./City";
import { Volunteer } from "./Volunteer";

@Entity('volunteers_address')
export class VolunteerAddress {
  @PrimaryColumn({ type: 'int' })
  address_id: number;

  @ManyToMany(() => Volunteer)
  @JoinColumn({ name: 'volunteer_id' })
  volunteer_id: Volunteer;

  @Column({ type: 'varchar', length: 50 })
  street: string;

  @Column({ type: 'smallint' })
  number: string

  @Column({ type: 'varchar', length: 30 })
  complement: string

  @ManyToOne(() => City)
  @JoinColumn({ name: 'city_id' })
  city_id: City;
}
