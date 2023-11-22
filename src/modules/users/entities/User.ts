import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Answer } from "./Answer";
import { Form } from "./Form";

@Entity("users")
export class User {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date;

    @Column()
    cpf: string;

    @Column()
    profile: string;

    @Column()
    password: string;

    @Column()
    alocacao: string;

    @Column()
    superior_imediato: string;

    @Column()
    assuidade: string;

    @Column()
    infoadd: string;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }

    @OneToMany(() => Form, (form) => form.user)
    forms: Form[];
}
