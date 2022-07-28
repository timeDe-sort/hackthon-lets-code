import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Periodos1658957535832 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'periodos',
                columns: [
                    {
                        name: 'periodo_id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'nome',
                        type: 'varchar'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('periodos');
    }

}