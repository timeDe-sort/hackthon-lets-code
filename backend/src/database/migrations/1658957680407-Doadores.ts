import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Doadores1658957680407 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'doadores',
                columns: [
                    {
                        name: 'doador_id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'doador_nome',
                        type: 'varchar'
                    },
                    {
                        name: 'documento',
                        type: 'varchar',
                        isUnique: true
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true
                    },
                    {
                        name: 'senha',
                        type: 'varchar'
                    }
                ]
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('doadores');
    }

}
