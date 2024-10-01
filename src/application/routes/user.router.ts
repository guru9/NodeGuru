import { Router } from "express"
import UserController from "../controllers/user.controller"
import { container } from "../../di/container"
import { Types } from "../../di/types"


const controller: UserController = container.get<UserController>(Types.UserController)


export const userRouter = Router()


userRouter
	.route('/')
	.get(controller.findAllUsers)

userRouter
	.route('/')
	.post(controller.createNewUser)



