import server from './src/app';
import { getConfig } from './src/config';
import { connectToDB } from './src/core/connection/mongoDB';


server.listen(getConfig().PORT, async () => {

	const isConnected = await connectToDB()

	if (!isConnected) {
		console.error('Process terminated! cannot connect to database.')
		process.exit(0)
	}

	console.log(`Server is running on port: ${getConfig().PORT}`)
})