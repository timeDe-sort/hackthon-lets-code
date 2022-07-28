import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class VoluntariosEndereco1658957847739 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'voluntarios_endereco',
                columns: [
                    {
                        name: 'endereco_id',
                        type: 'uuid',
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: 'voluntario_id',
                        type: 'uuid',
                        isNullable: false
                    },
                    {
                        name: 'rua',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'numero',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'complemento',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'cidade_id',
                        type: 'uuid',
                        isNullable: false
                    },
                ],
                foreignKeys: [
                    {
                        name: 'fk_voluntario_endereco',
                        columnNames: ['voluntario_id'],
                        referencedTableName: 'voluntarios',
                        referencedColumnNames: ['voluntario_id']
                    },
                    {
                        name: 'fk_cidade_endereco',
                        columnNames: ['cidade_id'],
                        referencedTableName: 'cidades',
                        referencedColumnNames: ['cidade_id']
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('estudante_endereco');
    }
}
