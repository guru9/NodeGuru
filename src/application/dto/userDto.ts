﻿import { IsArray, IsEmail, IsNotEmpty, IsString } from "class-validator"

export class CreateUserDto {
	@IsNotEmpty()
	@IsString()
	firstName: string

	@IsNotEmpty()
	@IsString()
	lastName: string

	@IsNotEmpty()
	@IsString()
	@IsEmail()
	email: string

	@IsArray()
	books: []
}