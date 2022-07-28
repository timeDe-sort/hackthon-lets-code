import { Entity, PrimaryColumn, ManyToMany, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Doador } from "./Doador";
import { Estudante } from "./Estudante";
import { Instituicao } from "./Instituicao";
import { TipoApoio } from "./TiposApoio";

@Entity('doacoes')
export class Doacao {
  @PrimaryColumn()
  doacao_id: string;

  @ManyToMany(() => Instituicao)
  instituicao_id: Instituicao;
  @JoinColumn({ name: 'instituicao_id' })

  @ManyToMany(() => Doador)
  @JoinColumn({ name: 'doador_id' })
  doador_id = Doador;

  @ManyToMany(() => Estudante)
  @JoinColumn({ name: 'estudante_id' })
  estudante_id = Estudante;

  @ManyToMany(() => TipoApoio)
  @JoinColumn({ name: 'tipo_apoio_id' })
  tipo_apoio_id = TipoApoio;
  
  constructor() {
    if (!this.doacao_id) {
      this.doacao_id = uuid();
    }
  }
}
