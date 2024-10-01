import { IsNotEmpty, IsString } from "class-validator";

export class getCountDto {
	@IsNotEmpty()
	@IsString()
	sections!: string;
}