import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class DonatorsAddress1658957907529 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'donators_address',
                columns: [
                    {
                        name: 'address_id',
                        type: 'int',
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: 'donator_id',
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
                        name: 'fk_donator_address',
                        columnNames: ['donator_id'],
                        referencedTableName: 'donators',
                        referencedColumnNames: ['donator_id']
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
        await queryRunner.dropTable('doadores_endereco');
    }
}