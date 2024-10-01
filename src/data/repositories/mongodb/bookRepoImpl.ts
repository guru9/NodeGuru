import { injectable } from "inversify";
import { BookEntity } from "../../../domain/entities/book";
import { IBookRepo } from "../../../domain/interfaces/book/IBookRepo";
import Book from "../../models/book.model";


@injectable()
export default class BookRepoImpl implements IBookRepo {

	async findAll(): Promise<BookEntity[]> {
		const docs = await Book.find()
		const entries = docs.map(doc => doc)
		return entries
	}


	async findById(id: string): Promise<BookEntity> {
		const query = { _id: id };
		const docs = await Book.findOne(query);
		return docs
	}


	async create(payload: BookEntity): Promise<BookEntity> {
		const docs = await Book.create(payload)
		return docs
	}


	async update(query: BookEntity): Promise<BookEntity> {

		const updateDoc = {
			$set: {
				...query
			},
		};
		const filter = { _id: query._id };
		const options = { returnOriginal: false };

		const docs = await Book.findOneAndUpdate(filter, updateDoc, options)
		return docs
	}


	async deleteById(id: string): Promise<void> {
		const query = { _id: id };
		await Book.deleteOne(query);
	}
}



//==========================33333333333333

//================11-11-11-11-11-11-11-11-11-11-11 with mongodb