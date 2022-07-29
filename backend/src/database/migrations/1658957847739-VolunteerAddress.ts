import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class VolunteerAddress1658957847739 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'volunteers_address',
                columns: [
                    {
                        name: 'address_id',
                        type: 'int',
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: 'volunteer_id',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'street',
                        type: 'varchar(50)',
                        isNullable: false
                    },
                    {
                        name: 'number',
                        type: 'smallint',
                        isNullable: false
                    },
                    {
                        name: 'address_complement',
                        type: 'varchar(30)',
                        isNullable: true
                    },
                    {
                        name: 'city_id',
                        type: 'smallint',
                        isNullable: false
                    },
                ],
                foreignKeys: [
                    {
                        name: 'fk_volunteer_address',
                        columnNames: ['volunteer_id'],
                        referencedTableName: 'volunteers',
                        referencedColumnNames: ['volunteer_id']
                    },
                    {
                        name: 'fk_city_address',
                        columnNames: ['city_id'],
                        referencedTableName: 'cities',
                        referencedColumnNames: ['city_id']
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('volunteers_address');
    }
}
