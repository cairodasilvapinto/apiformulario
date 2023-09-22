import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1688578428378 implements MigrationInterface {
    name = 'Default1688578428378'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "cpf" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
