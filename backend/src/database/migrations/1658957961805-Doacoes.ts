import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Doacoes1658957961805 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'doacoes',
                columns: [
                    {
                        name: 'doacao_id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'tipo_apoio_id',
                        type: 'uuid'
                    },
                    {
                        name: 'doador_id',
                        type: 'uuid'
                    },
                    {
                        name: 'estudante_id',
                        type: 'uuid'
                    },
                    {
                        name: 'instituicao_id',
                        type: 'uuid'
                    },
                    {
                        name: 'data_doacao',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'fk_doacao_tipo',
                        columnNames: ['tipo_apoio_id'],
                        referencedTableName: 'tipos_apoio',
                        referencedColumnNames: ['tipo_apoio_id']
                    },
                    {
                        name: 'fk_doacao_doador',
                        columnNames: ['doador_id'],
                        referencedTableName: 'doadores',
                        referencedColumnNames: ['doador_id']
                    },
                    {
                        name: 'fk_doacao_estudante',
                        columnNames: ['estudante_id'],
                        referencedTableName: 'estudantes',
                        referencedColumnNames: ['estudante_id']
                    },
                    {
                        name: 'fk_doacao_instituicao',
                        columnNames: ['instituicao_id'],
                        referencedTableName: 'instituicoes',
                        referencedColumnNames: ['instituicao_id']
                    },
                ]
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('doacoes');
    }

}
