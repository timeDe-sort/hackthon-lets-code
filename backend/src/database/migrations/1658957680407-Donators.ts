import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Donators1658957680407 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'donators',
                columns: [
                    {
                        name: 'donator_id',
                        type: 'int',
                        isPrimary: true
                    },
                    {
                        name: 'donator_name',
                        type: 'varchar(50)'
                    },
                    {
                        name: 'document',
                        type: 'varchar(14)',
                        isUnique: true
                    },
                    {
                        name: 'email',
                        type: 'varchar(50)',
                        isUnique: true
                    },
                    {
                        name: 'password',
                        type: 'char(64)'
                    }
                ]
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('donators');
    }

}
