import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Estudantes1658957579341 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'estudantes',
                columns: [
                    {
                        name: 'estudante_id',
                        type: 'uuid',
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: 'nome_completo',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'data_nascimento',
                        type: 'date',
                        isNullable: false
                    },
                    {
                        name: 'instituicao_id',
                        type: 'uuid',
                        isNullable: false
                    },
                    {
                        name: 'serie_id',
                        type: 'uuid',
                        isNullable: false
                    },
                    {
                        name: 'periodo_id',
                        type: 'uuid',
                        isNullable: false
                    },
                    {
                        name: 'nome_mae',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'codigo_familiar',
                        type: 'char(8)',
                        isNullable: false
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'senha',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'cpf',
                        type: 'char(11)',
                        isNullable: false
                    }
                ],
                foreignKeys: [
                    {
                        name: 'fk_estudante_instituicao',
                        columnNames: ['instituicao_id'],
                        referencedTableName: 'instituicoes',
                        referencedColumnNames: ['instituicao_id'],
                    },
                    {
                        name: 'fk_estudante_serie',
                        columnNames: ['serie_id'],
                        referencedTableName: 'series',
                        referencedColumnNames: ['serie_id'],
                    },
                    {
                        name: 'fk_estudante_periodo',
                        columnNames: ['periodo_id'],
                        referencedTableName: 'periodos',
                        referencedColumnNames: ['periodo_id']
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('estudantes');
    }

}