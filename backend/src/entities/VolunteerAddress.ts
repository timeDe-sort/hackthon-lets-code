import { Entity, PrimaryColumn, ManyToMany, Column, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { City } from "./City";
import { Volunteer } from "./Volunteer";

@Entity('volunteers_address')
export class VolunteerAddress {
  @PrimaryColumn()
  address_id: string;

  @ManyToMany(() => Volunteer)
  @JoinColumn({ name: 'volunteer_id' })
  volunteer_id: Volunteer;

  @Column()
  street: string;

  @Column()
  number: string

  @Column()
  complement: string

  @ManyToOne(() => City)
  @JoinColumn({ name: 'city_id' })
  city_id: City;
  
  constructor() {
    if (!this.address_id) {
      this.address_id = uuid();
    }
  }
}
