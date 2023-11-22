import { Column, Entity, ManyToOne, JoinTable, ManyToMany, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"
import { Answer } from "./Answer"
import { Question } from "./Question"

@Entity()
export class Form {
    // add primary key
    @PrimaryGeneratedColumn()
    id: number;

    // add ManyToOne relationship to User
    @ManyToOne(() => User, user => user.forms)
    user: User

    // add ManyToMany relationship to Column through FormColumn join table
    @ManyToMany(() => Column)
    @JoinTable({ name: 'FormColumn' })
    columns: Column[]

    // add OneToMany relationship to FormColumn
    @OneToMany(() => Column, column => column.form)
    formColumns: Column[]

    // add ManyToMany relationship to Answer through FormAnswer join table
    @ManyToMany(() => Answer)
    @JoinTable()
    answers: Answer[]

    // add ManyToMany relationship to Question through FormQuestion join table
    @ManyToMany(() => Question)
    @JoinTable()
    questions: Question[]
}
