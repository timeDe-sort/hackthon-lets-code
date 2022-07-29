import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Estudantes1658957579341 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'students',
                columns: [
                    {
                        name: 'student_id',
                        type: 'int',
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: 'name',
                        type: 'varchar(50)',
                        isNullable: false
                    },
                    {
                        name: 'birth_date',
                        type: 'date',
                        isNullable: false
                    },
                    {
                        name: 'service_center_id',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'school_year',
                        type: 'enum',
                        enum: [
                            '1º ano (fundamental)', '2º ano (fundamental)', '3º ano (fundamental)', 
                            '4º ano (fundamental)', '5º ano (fundamental)', '6º ano (fundamental)', 
                            '7º ano (fundamental)', '8º ano (fundamental)', '9º ano (fundamental)',
                            '1º ano (ensino médio)', '2º ano (ensino médio)', '3º ano (ensino médio)',
                        ],
                    },
                    {
                        name: 'period',
                        type: 'enum',
                        enum: ['Matutino', 'Vespertino', 'Noturno', 'Integral'], 
                        isNullable: false
                    },
                    {
                        name: 'mother_name',
                        type: 'varchar(50)',
                        isNullable: false
                    },
                    {
                        name: 'family_code',
                        type: 'char(8)',
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
                        name: 'fk_student_service_center',
                        columnNames: ['service_center_id'],
                        referencedTableName: 'service_centers',
                        referencedColumnNames: ['service_center_id'],
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('estudantes');
    }

}