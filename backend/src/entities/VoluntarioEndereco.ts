import { Entity, PrimaryColumn, ManyToMany, Column, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Cidade } from "./Cidade";
import { Voluntario } from "./Voluntario";

@Entity('voluntarios_endereco')
export class VoluntarioEndereco {
  @PrimaryColumn()
  endereco_id: string;

  @ManyToMany(() => Voluntario)
  @JoinColumn({ name: 'voluntario_id' })
  voluntario_id = Voluntario;

  @Column()
  rua: string;

  @Column()
  numero: string

  @Column()
  complemento: string

  @ManyToOne(() => Cidade)
  @JoinColumn({ name: 'cidade_id' })
  cidade_id = Cidade;
  
  constructor() {
    if (!this.endereco_id) {
      this.endereco_id = uuid();
    }
  }
}
