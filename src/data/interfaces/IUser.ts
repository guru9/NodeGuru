import { IBook } from "./IBook"

export interface IUser {
	_id: string
	firstName: string
	lastName: string
	email: string
	password: string
	// phoneNumber: string
	verified: boolean
	otpCode: string
	otpExpire: Date,
	books: IBook
}