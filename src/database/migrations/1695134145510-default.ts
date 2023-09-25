import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1695134145510 implements MigrationInterface {
    name = 'Default1695134145510'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "infoadd" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "infoadd"`);
    }

}
