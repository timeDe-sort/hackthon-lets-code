import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class TiposApoio1658957423363 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tipos_apoio',
                columns: [
                    {
                        name: 'tipo_apoio_id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'nome',
                        type: 'varchar',
                    }
                ]
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tipos_apoio');
    }

}
