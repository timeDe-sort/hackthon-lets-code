import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class InstituicoesEndereco1658957778812 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'instituicoes_endereco',
                columns: [
                    {
                        name: 'endereco_id',
                        type: 'uuid',
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: 'instituicao_id',
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
                        name: 'fk_instituicao_endereco',
                        columnNames: ['instituicao_id'],
                        referencedTableName: 'instituicoes',
                        referencedColumnNames: ['instituicao_id']
                    },
                    {
                        name: 'fk_cidade_endereco',
                        columnNames: ['cidade_id'],
                        referencedTableName: 'cidades',
                        referencedColumnNames: ['cidade_id']
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('instituicoes_endereco');
    }
}