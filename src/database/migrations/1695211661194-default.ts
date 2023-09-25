import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1695211661194 implements MigrationInterface {
    name = 'Default1695211661194'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "questions" ADD "userId" character varying`);
        await queryRunner.query(`ALTER TABLE "questions" ADD CONSTRAINT "FK_bc2370231ea3e3d296963f33939" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "questions" DROP CONSTRAINT "FK_bc2370231ea3e3d296963f33939"`);
        await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "userId"`);
    }

}
