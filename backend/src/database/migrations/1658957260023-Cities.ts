import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Cities1658957260023 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'cities',
                columns: [
                    {
                        name: 'city_id',
                        type: 'smallint',
                        isPrimary: true
                    },
                    {
                        name: 'city_name',
                        type: 'varchar(50)'
                    },
                    {
                        name: 'state_id',
                        type: 'smallint'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'fk_city_state',
                        columnNames: ['state_id'],
                        referencedTableName: 'states',
                        referencedColumnNames: ['state_id']
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('cities');
    }
}
