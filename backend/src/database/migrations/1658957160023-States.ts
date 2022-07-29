import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class States1658957160023 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'states',
                columns: [
                    {
                        name: 'state_id',
                        type: 'smallint',
                        isPrimary: true
                    },
                    {
                        name: 'state_name',
                        type: 'varchar(20)',
                        isUnique: true
                    },
                    {
                        name: 'uf',
                        type: 'char(2)',
                        isUnique: true
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('states');
    }

}
