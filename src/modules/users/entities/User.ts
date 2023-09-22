import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("users")
class User {
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

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { User };
