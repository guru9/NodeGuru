import { injectable } from "inversify";
import { ICountRepo } from "../../../domain/interfaces/count/ICountRepo";
import Book from "../../models/book.model";
import User from "../../models/user.model";

@injectable()
export default class CountRepoImpl implements ICountRepo {

	async getCounts(query: any) {

		const promiseList = query.map(async item => {

			if (item == 'book') {
				const count = await Book.countDocuments()
				return { 'books': count }

			} else if (item == 'user') {
				const count = await User.estimatedDocumentCount()
				return { 'users': count }
			}
		})

		const countRes = await Promise.all(promiseList)

		const doc = Object.assign({}, ...countRes)
		return doc
	}

}