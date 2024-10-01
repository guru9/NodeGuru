import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import { IBookRepo } from "../../domain/interfaces/book/IBookRepo";
import { Types } from "../../di/types";
import { CreateBookDto, UpdateBookDto } from "../dto";
import { validate } from "class-validator";


@injectable()
export default class BookController {
	constructor(
		@inject(Types.IBookRepo)
		private bookRepository: IBookRepo
	) { }

	findBook = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const book = await this.bookRepository.findById(req.params.id)

			res.status(200).json({
				success: true,
				data: book
			})

		} catch (error) {
			next(error)
		}

	}


	findAllBooks = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const books = await this.bookRepository.findAll()

			res.status(200).json({
				success: true,
				data: books
			})

		} catch (error) {
			next(error)
		}

	}


	createNewBook = async (req: Request, res: Response) => {
		try {
			const reqPayload = Object.assign(new CreateBookDto(), req.body);

			const errors = await validate(reqPayload);

			if (errors.length > 0) {
				return res.status(400).json({
					success: false,
					message: errors.map(err => Object.values(err.constraints)).flat().join()
				});
			}

			const book = await this.bookRepository.create(reqPayload)

			if (!book) {
				return res.status(500).json({
					success: false,
					message: `Internal Server Error`
				})
			}

			res.status(200).json({
				success: true,
				message: 'Book created successfully.',
				data: book
			})

		} catch (error) {
			const filteredErrors: any = Object.values(error.errors)

			const resMsg = filteredErrors && filteredErrors.length ? filteredErrors.map(i => i.message).join('') : error

			return res.status(500).json({
				success: false,
				message: resMsg
			})
		}
	}


	updateBook = async (req: Request, res: Response) => {
		try {
			const reqPayload = Object.assign(new UpdateBookDto(), req.body);

			const errors = await validate(reqPayload);

			if (errors.length > 0) {
				return res.status(400).json({
					success: false,
					message: errors.map(err => Object.values(err.constraints)).flat().join()
				});
			}

			const book = await this.bookRepository.update(reqPayload)

			if (!book) {
				return res.status(500).json({
					success: false,
					message: `Internal Server Error`
				})
			}

			res.status(200).json({
				success: true,
				message: 'Book updated successfully.',
				data: book
			})

		} catch (error) {
			const filteredErrors: any = Object.values(error.errors)

			const resMsg = filteredErrors && filteredErrors.length ? filteredErrors.map(i => i.message).join('') : error

			return res.status(500).json({
				success: false,
				message: resMsg
			})
		}
	}


	deleteBook = async (req: Request, res: Response, next: NextFunction) => {
		try {
			await this.bookRepository.deleteById(req.params.id)

			res.status(200).json({
				success: true,
				message: 'Book deleted successfully.',
				data: null
			})

		} catch (error) {
			next(error)
		}
	}
}



//=====================4444444444444

//================11-11-11-11-11-11-11-11-11-11-11  with mongo repo method and data