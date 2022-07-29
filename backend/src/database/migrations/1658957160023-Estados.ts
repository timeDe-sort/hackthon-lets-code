import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Estados1658957160023 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'estados',
                columns: [
                    {
                        name: 'estado_id',
                        type: 'smallint',
                        isPrimary: true
                    },
                    {
                        name: 'estado_nome',
                        type: 'varchar,',
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
        await queryRunner.dropTable('estados');
    }

}
