import { Router } from "express";
import CountController from "../controllers/count.controller";
import { Types } from "../../di/types";
import { container } from "../../di/container";


const controller: CountController = container.get<CountController>(Types.CountController)


export const counterRouter = Router()

counterRouter.route('/').get(controller.getCounts)