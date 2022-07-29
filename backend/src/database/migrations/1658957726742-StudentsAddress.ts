import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class StudentsAddress1658957726742 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'students_address',
                columns: [
                    {
                        name: 'address_id',
                        type: 'int',
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: 'student_id',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'street',
                        type: 'varchar(50)',
                        isNullable: false
                    },
                    {
                        name: 'number',
                        type: 'smallint',
                        isNullable: false
                    },
                    {
                        name: 'address_complement',
                        type: 'varchar(30)',
                        isNullable: true
                    },
                    {
                        name: 'city_id',
                        type: 'smallint',
                        isNullable: false
                    }
                ],
                foreignKeys: [
                    {
                        name: 'fk_student_address',
                        columnNames: ['student_id'],
                        referencedTableName: 'students',
                        referencedColumnNames: ['student_id']
                    },
                    {
                        name: 'fk_city_address',
                        columnNames: ['city_id'],
                        referencedTableName: 'cities',
                        referencedColumnNames: ['city_id']
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('students_address');
    }
}
