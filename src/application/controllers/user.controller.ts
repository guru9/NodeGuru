import { inject, injectable } from "inversify";
import { Types } from "../../di/types";
import { IUserRepo } from "../../domain/interfaces/user/IUserRepo";
import { Request, Response } from 'express'
import { CreateUserDto } from "../dto";
import { validate } from "class-validator";


@injectable()
export default class UserController {
	constructor(
		@inject(Types.IUserRepo)
		private userRepository: IUserRepo,
	) { }

	findAllUsers = async (req: Request, res: Response) => {
		try {
			const users = await this.userRepository.findAll()
			res.status(200).json({
				success: true,
				data: users
			})

		} catch (error) {
			console.log(error);
		}
	}

	createNewUser = async (req: Request, res: Response) => {
		// const payload = req.body
		try {
			const reqPayload = Object.assign(new CreateUserDto(), req.body)
			const errors = await validate(reqPayload)

			if (errors.length > 0) {
				return res.status(400).json({
					success: false,
					message: errors.map(err => Object.values(err.constraints)).flat().join()
				});
			}


			const user = await this.userRepository.create(reqPayload)

			if (!user) {
				return res.send(500).json({
					success: false,
					message: `Something went wrong`
				})
			}

			res.status(200).json({
				success: true,
				data: user
			})

		} catch (error) {
			console.log(error);
		}
	}
}
