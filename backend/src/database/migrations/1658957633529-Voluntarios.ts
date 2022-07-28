import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Voluntarios1658957633529 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'voluntarios',
                columns: [
                    {
                        name: 'voluntario_id',
                        type: 'uuid',
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: 'voluntario_nome',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'data_nascimento',
                        type: 'date',
                        isNullable: false
                    },
                    {
                        name: 'universidade',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'curso',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'instituicao_id',
                        type: 'uuid',
                        isNullable: false
                    },
                    {
                        name: 'periodo_id',
                        type: 'uuid',
                        isNullable: false
                    },
                    {
                        name: 'disciplina',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'observacoes',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: 'senha',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'cpf',
                        type: 'char',
                        isNullable: false,
                        isUnique: true
                    }
                ],
                foreignKeys: [
                    {
                        name: 'fk_voluntario_instituicao',
                        columnNames: ['instituicao_id'],
                        referencedTableName: 'instituicoes',
                        referencedColumnNames: ['instituicao_id'],
                    },
                    {
                        name: 'fk_voluntario_periodo',
                        columnNames: ['periodo_id'],
                        referencedTableName: 'periodos',
                        referencedColumnNames: ['periodo_id']
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('voluntarios');
    }

}