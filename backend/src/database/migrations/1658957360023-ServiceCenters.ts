import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class ServiceCenters1658957360023 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'service_centers',
                columns: [
                    {
                        name: 'service_center_id',
                        type: 'int',
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: 'service_center_name',
                        type: 'varchar(50)',
                        isNullable: false
                    },
                    {
                        name: 'cnpj',
                        type: 'char(14)',
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: 'email',
                        type: 'varchar(50)',
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: 'password',
                        type: 'char(64)',
                        isNullable: false
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('service_centers');
    }
}
