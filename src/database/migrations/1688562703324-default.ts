import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1688562703324 implements MigrationInterface {
    name = 'Default1688562703324'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "profiles" ("id" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8e520eb4da7dc01d0e190447c8e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "profiles"`);
    }

}
