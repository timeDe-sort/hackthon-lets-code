import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('school_year')
export class SchoolYear {
  @PrimaryColumn()
  school_year_id: string;

  @Column()
  school_year_name: string;

  constructor() {
    if (!this.school_year_id) {
      this.school_year_id = uuid();
    }
  }
}