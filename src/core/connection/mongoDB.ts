import { connect } from "mongoose";
import { getConfig } from "../../config"


export const connectToDB = () => {

	return new Promise<Boolean>(async (resolve, reject) => {
		try {
			const db = await connect(getConfig().MONGODB_URL);

			if (db) {
				console.log(`MongoDB connected to::: ${db.connection.name}`);
				resolve(true)
			} else {
				resolve(false)
			}
		} catch (err) {
			console.error(`DB Connection Error:-  ${err}`)
			reject(false)
		}
	})
}
