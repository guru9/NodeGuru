import { UserEntity } from "../../entities/user"


export interface IUserRepo {

	create(payload: UserEntity): Promise<UserEntity>

	findAll(): Promise<UserEntity[]>

	findOne(query: UserEntity, selectPassword: Boolean): Promise<UserEntity | null>

	findById(id: number | string): Promise<UserEntity | null>

	deleteOne(query: UserEntity): Promise<boolean>

	deleteMany(query: UserEntity): Promise<number>

	updateOne(query: UserEntity): Promise<UserEntity | null>

	updateMany(query: UserEntity): Promise<number>
}