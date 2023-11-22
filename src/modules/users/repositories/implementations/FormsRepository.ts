import { Form } from "../../entities/Form";
import { IFormsRepository } from "../IFormsRepository";

class FormsRepository implements IFormsRepository {
    private forms: Form[];

    constructor() {
        this.forms = [];
    }

    async create(form: Form): Promise<void> {
        this.forms.push(form);
    }

    async findById(id: string): Promise<Form | undefined> {
        const form = this.forms.find((form) => form.id === id);
        return form;
    }

    async findAll(): Promise<Form[]> {
        return this.forms;
    }

    async update(form: Form): Promise<void> {
        const index = this.forms.findIndex((f) => f.id === form.id);
        this.forms[index] = form;
    }

    async delete(id: string): Promise<void> {
        const index = this.forms.findIndex((form) => form.id === id);
        this.forms.splice(index, 1);
    }
}

export { FormsRepository };
