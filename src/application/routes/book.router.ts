import { Router } from "express";
import { container } from "../../di/container";
import { Types } from "../../di/types";
import BookController from "../controllers/book.controller";


const controller: BookController = container.get<BookController>(Types.BookController)


export const bookRouter = Router()


bookRouter.route('/').get(controller.findAllBooks)

bookRouter.route('/').post(controller.createNewBook)

bookRouter.route('/').put(controller.updateBook)

bookRouter.route('/:id').get(controller.findBook)

bookRouter.route('/:id').delete(controller.deleteBook)



//=====================7777777777777777777