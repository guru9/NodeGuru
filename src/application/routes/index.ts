import { Router } from "express";
import { userRouter } from "./user.router";
import { bookRouter } from "./book.router";
import { counterRouter } from "./count.router";


const router = Router()

/* 
for all routes
 */
router.use('/users', userRouter)
router.use('/books', bookRouter)
router.use('/counts', counterRouter)


/* 
400- for url,method,payload not found
*/
router.all('*', (req, res, next) => {
	res.status(405).json({
		success: false,
		message: `The request not found for url-${req.originalUrl} & type-${req.method}`,
	})
})


export default router





//========================8888888888888888

