import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { Estado } from "./Estado";

@Entity('cidades')
export class Cidade {
  @PrimaryColumn({ type: "smallint" })
  cidade_id: number;

  @Column()
  cidade_nome: string;

  @ManyToOne(() => Estado)
  @JoinColumn({ name: 'estado_id' })
  estado_id = Estado;
}