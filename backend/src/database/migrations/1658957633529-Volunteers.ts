import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Volunteers1658957633529 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'volunteers',
                columns: [
                    {
                        name: 'volunteer_id',
                        type: 'int',
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: 'volunteer_name',
                        type: 'varchar(50)',
                        isNullable: false
                    },
                    {
                        name: 'birth_date',
                        type: 'date',
                        isNullable: false
                    },
                    {
                        name: 'university',
                        type: 'varchar(50)',
                        isNullable: true
                    },
                    {
                        name: 'degree',
                        type: 'varchar(50)',
                        isNullable: true
                    },
                    {
                        name: 'service_center_id',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'period',
                        type: 'enum',
                        enum: ['Matutino', 'Vespertino', 'Noturno', 'Integral'], 
                        isNullable: false
                    },
                    {
                        name: 'subject',
                        type: 'varchar(20)',
                        isNullable: false
                    },
                    {
                        name: 'observation',
                        type: 'varchar(500)',
                        isNullable: false
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
                    {
                        name: 'cpf',
                        type: 'char(11)',
                        isNullable: false,
                        isUnique: true
                    }
                ],
                foreignKeys: [
                    {
                        name: 'fk_volunteer_service_center',
                        columnNames: ['service_center_id'],
                        referencedTableName: 'service_centers',
                        referencedColumnNames: ['service_center_id'],
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('voluntarios');
    }

}