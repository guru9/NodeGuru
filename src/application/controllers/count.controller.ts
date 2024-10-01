import { NextFunction, Request, Response } from "express"
import { inject, injectable } from "inversify"
import { ICountRepo } from "../../domain/interfaces/count/ICountRepo"
import { Types } from "../../di/types"
import { getCountDto } from "../dto"
import { validate } from "class-validator"

@injectable()
export default class CountController {
	constructor(
		@inject(Types.ICountRepo)
		private countRepository: ICountRepo
	) { }

	getCounts = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const reqPayload = Object.assign(new getCountDto(), req.body);

			const errors = await validate(reqPayload);

			if (errors.length > 0) {
				return res.status(400).json({
					success: false,
					message: errors.map(err => Object.values(err.constraints)).flat().join()
				});
			}
			const payload = reqPayload.sections.replaceAll(' ', '').split(',')

			const count = await this.countRepository.getCounts(payload)


			if (!Object.keys(count).length) {
				return res.status(500).json({
					success: false,
					message: `Please correct the sections`
				})
			}

			res.status(200).json({
				success: true,
				data: count
			})

		} catch (error) {
			next(error)
		}

	}
}