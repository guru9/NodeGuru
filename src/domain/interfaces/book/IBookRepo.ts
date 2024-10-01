import { BookEntity } from "../../entities/book";


export interface IBookRepo {

	findAll(): Promise<BookEntity[]>;

	findById(id: string): Promise<BookEntity>;

	create(payload: BookEntity): Promise<BookEntity>;

	update(query: BookEntity): Promise<BookEntity>;

	deleteById(id: string): Promise<void>;
}


//=======================================2