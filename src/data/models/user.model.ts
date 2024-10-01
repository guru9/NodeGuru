import { Schema, model } from 'mongoose'
import { IUser } from '../interfaces/IUser'


const schema = new Schema<IUser>(
	{
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		email: { type: String, required: true },
		password: { type: String, required: false, select: false },
		// phoneNumber: { type: String, required: false },
		verified: { type: Boolean, default: false },
		otpCode: String,
		otpExpire: Date,
		books: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
	},
	{ timestamps: true }
)

// create indexes
// schema.index({ phoneNumber: 1 }, { unique: true })

const User = model<IUser>('User', schema)

export default User
