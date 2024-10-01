export class UserEntity {


	constructor(
		public readonly _id: string,
		public firstName: string,
		public lastName: string,
		public email: string,
		// public phoneNumber: string,
		public verified: boolean,
		public otpCode?: string | undefined,
		public otpExpire?: Date | undefined,
		public password?: string | undefined,
	) {
		this._id = _id
		this.firstName = firstName
		this.lastName = lastName
		this.email = email
		// this.phoneNumber = phoneNumber
		this.verified = verified
		this.otpCode = otpCode
		this.otpExpire = otpExpire
		this.password = password
	}
}
