import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Series1658957491298 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'series',
                columns: [
                    {
                        name: 'serie_id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'serie_nome',
                        type: 'varchar'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('series');
    }

}
