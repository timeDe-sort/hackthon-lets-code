import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Donations1658957961805 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'donations',
                columns: [
                    {
                        name: 'donation_id',
                        type: 'int',
                        isPrimary: true
                    },
                    {
                        name: 'support_type',
                        type: 'enum',
                        enum: ['Financeiro', 'Material']
                    },
                    {
                        name: 'donator_id',
                        type: 'int'
                    },
                    {
                        name: 'student_id',
                        type: 'int'
                    },
                    {
                        name: 'service_center_id',
                        type: 'int'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'fk_donation_donator',
                        columnNames: ['donator_id'],
                        referencedTableName: 'donators',
                        referencedColumnNames: ['donator_id']
                    },
                    {
                        name: 'fk_donator_student',
                        columnNames: ['student_id'],
                        referencedTableName: 'students',
                        referencedColumnNames: ['student_id']
                    },
                    {
                        name: 'fk_donation_service_center',
                        columnNames: ['service_center_id'],
                        referencedTableName: 'service_centers',
                        referencedColumnNames: ['service_center_id']
                    },
                ]
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('donations');
    }

}
