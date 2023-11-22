import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToMany, JoinTable } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Form } from "./Form";

@Entity("answers")
export class Answer {
    @PrimaryColumn()
    id?: string;

    @Column()
    answer: string;

    @CreateDateColumn()
    created_at: Date;

    @ManyToMany(() => Form)
    @JoinTable()
    forms: Form[];

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}
