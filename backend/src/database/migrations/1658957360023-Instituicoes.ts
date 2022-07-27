import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Instituicoes1658957360023 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'instituicoes',
                columns: [
                    {
                        name: 'instituicao_id',
                        type: 'uuid',
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: 'instituicao_nome',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'cnpj',
                        type: 'char(14)',
                        isNullable: false
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'senha',
                        type: 'varchar',
                        isNullable: false
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('instituicoes');
    }
}
