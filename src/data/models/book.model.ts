import { model, Schema } from "mongoose"
import { IBook } from "../interfaces/IBook"

const BookSchema: Schema = new Schema<IBook>(
	{
		title: { type: String, required: true },
		author: { type: String, required: true },
		publishedDate: { type: String, required: true }
	},
	{ timestamps: true }
)

const Book = model<IBook>("Book", BookSchema)

export default Book







//=====================1000000000000000000000