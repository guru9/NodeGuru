import { Router } from "express";

const router = Router()


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

