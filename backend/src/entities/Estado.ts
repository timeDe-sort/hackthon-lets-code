import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('estados')
export class Estado {
  @PrimaryColumn({ type: "smallint" })
  estado_id: number;

  @Column()
  estado_nome: string;

  @Column()
  uf: string;  
}