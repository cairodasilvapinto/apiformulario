import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1696594170774 implements MigrationInterface {
    name = 'Default1696594170774'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "questions" ("id" character varying NOT NULL, "question" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" character varying, CONSTRAINT "PK_08a6d4b0f49ff300bf3a0ca60ac" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "cpf" character varying NOT NULL, "profile" character varying NOT NULL, "password" character varying NOT NULL, "alocacao" character varying NOT NULL, "superior_imediato" character varying NOT NULL, "assuidade" character varying NOT NULL, "infoadd" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "answers" ("id" character varying NOT NULL, "answer" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" character varying, "questionId" character varying, CONSTRAINT "PK_9c32cec6c71e06da0254f2226c6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "profiles" ("id" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8e520eb4da7dc01d0e190447c8e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "profiles_users_users" ("profilesId" character varying NOT NULL, "usersId" character varying NOT NULL, CONSTRAINT "PK_0c76f9752eed81e7a1f4edd05c4" PRIMARY KEY ("profilesId", "usersId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_608ceb2700d8b218a1f8ffda19" ON "profiles_users_users" ("profilesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_59da753f161b363eb8bd26ac96" ON "profiles_users_users" ("usersId") `);
        await queryRunner.query(`ALTER TABLE "questions" ADD CONSTRAINT "FK_bc2370231ea3e3d296963f33939" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answers" ADD CONSTRAINT "FK_1bd66b7e0599333e61d2e3e1678" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answers" ADD CONSTRAINT "FK_c38697a57844f52584abdb878d7" FOREIGN KEY ("questionId") REFERENCES "questions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "profiles_users_users" ADD CONSTRAINT "FK_608ceb2700d8b218a1f8ffda19f" FOREIGN KEY ("profilesId") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "profiles_users_users" ADD CONSTRAINT "FK_59da753f161b363eb8bd26ac96f" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profiles_users_users" DROP CONSTRAINT "FK_59da753f161b363eb8bd26ac96f"`);
        await queryRunner.query(`ALTER TABLE "profiles_users_users" DROP CONSTRAINT "FK_608ceb2700d8b218a1f8ffda19f"`);
        await queryRunner.query(`ALTER TABLE "answers" DROP CONSTRAINT "FK_c38697a57844f52584abdb878d7"`);
        await queryRunner.query(`ALTER TABLE "answers" DROP CONSTRAINT "FK_1bd66b7e0599333e61d2e3e1678"`);
        await queryRunner.query(`ALTER TABLE "questions" DROP CONSTRAINT "FK_bc2370231ea3e3d296963f33939"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_59da753f161b363eb8bd26ac96"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_608ceb2700d8b218a1f8ffda19"`);
        await queryRunner.query(`DROP TABLE "profiles_users_users"`);
        await queryRunner.query(`DROP TABLE "profiles"`);
        await queryRunner.query(`DROP TABLE "answers"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "questions"`);
    }

}
