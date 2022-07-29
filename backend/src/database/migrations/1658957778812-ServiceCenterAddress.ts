import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class ServiceCentersAddress1658957778812 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'service_centers_address',
                columns: [
                    {
                        name: 'address_id',
                        type: 'int',
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: 'service_center_id',
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
                        name: 'fk_service_center_address',
                        columnNames: ['service_center_id'],
                        referencedTableName: 'service_centers',
                        referencedColumnNames: ['service_center_id']
                    },
                    {
                        name: 'fk_city_address',
                        columnNames: ['city_id'],
                        referencedTableName: 'cities',
                        referencedColumnNames: ['city_id']
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('service_centers_address');
    }
}