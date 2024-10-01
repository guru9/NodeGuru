import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateBookDto {
	@IsNotEmpty()
	@IsString()
	title!: string

	@IsNotEmpty()
	@IsString()
	author!: string

	@IsNotEmpty()
	@IsString()
	publishedDate!: String
}


export class UpdateBookDto {
	@IsNotEmpty()
	@IsString()
	_id!: string;

	@IsNotEmpty()
	@IsString()
	title!: string

	@IsNotEmpty()
	@IsString()
	author!: string

	@IsNotEmpty()
	@IsString()
	publishedDate!: String
}