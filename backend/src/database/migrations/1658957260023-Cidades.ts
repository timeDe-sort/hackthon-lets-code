import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Cidades1658957260023 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'cidades',
                columns: [
                    {
                        name: 'cidade_id',
                        type: 'smallint',
                        isPrimary: true
                    },
                    {
                        name: 'cidade_nome',
                        type: 'varchar'
                    },
                    {
                        name: 'estado_id',
                        type: 'uuid'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'fk_cidade_estado',
                        columnNames: ['estado_id'],
                        referencedTableName: 'estados',
                        referencedColumnNames: ['estado_id']
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('cidades');
    }

}
