import 'reflect-metadata'
import { Container } from 'inversify'
import { Types } from './types'
import { IUserRepo } from '../domain/interfaces/user/IUserRepo'
import UserRepoImpl from '../data/repositories/mongodb/userRepoImpl'
import UserController from '../application/controllers/user.controller'
import BookController from '../application/controllers/book.controller'
import { IBookRepo } from '../domain/interfaces/book/IBookRepo'
import BookRepoImpl from '../data/repositories/mongodb/bookRepoImpl'
import { ICountRepo } from '../domain/interfaces/count/ICountRepo'
import CountRepoImpl from '../data/repositories/mongodb/countRepoImpl'
import CountController from '../application/controllers/count.controller'

export const container = new Container({ defaultScope: 'Singleton' })


// repository interfaces
container.bind<IUserRepo>(Types.IUserRepo).to(UserRepoImpl)
container.bind<IBookRepo>(Types.IBookRepo).to(BookRepoImpl)
container.bind<ICountRepo>(Types.ICountRepo).to(CountRepoImpl)


// controllers
container.bind<UserController>(Types.UserController).to(UserController)
container.bind<BookController>(Types.BookController).to(BookController)
container.bind<CountController>(Types.CountController).to(CountController)




//=========================6666666666666666666