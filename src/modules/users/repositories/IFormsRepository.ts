interface IFormsRepository {
    create(data: FormData): Promise<Form>;
    findById(id: string): Promise<Form | null>;
    findAll(): Promise<Form[]>;
    update(id: string, data: FormData): Promise<Form | null>;
    delete(id: string): Promise<boolean>;
}

export { IFormsRepository };
