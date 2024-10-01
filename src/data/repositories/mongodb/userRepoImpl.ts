import { injectable } from 'inversify'
import User from '../../models/user.model'
import { IUserRepo } from '../../../domain/interfaces/user/IUserRepo'
import { UserEntity } from '../../../domain/entities/user'

@injectable()
export default class UserRepoImpl implements IUserRepo {

	findOne(query: UserEntity, selectPassword: Boolean): Promise<UserEntity | null> {
		throw new Error('Method not implemented.')
	}
	findById(id: number | string): Promise<UserEntity | null> {
		throw new Error('Method not implemented.')
	}
	deleteOne(query: UserEntity): Promise<boolean> {
		throw new Error('Method not implemented.')
	}
	deleteMany(query: UserEntity): Promise<number> {
		throw new Error('Method not implemented.')
	}
	updateOne(query: UserEntity): Promise<UserEntity | null> {
		throw new Error('Method not implemented.')
	}
	updateMany(query: UserEntity): Promise<number> {
		throw new Error('Method not implemented.')
	}
	// async findPaging(
	// 	query: Query,
	// 	offset: number,
	// 	limit: number,
	// 	sort?: {}
	// ): Promise<UserEntity[]> {
	// 	let queryObj = { ...Mapper.toQuery(query) }
	// 	const sortObj = sort || { _id: -1 }

	// 	const docs = await User.find(queryObj)
	// 		.skip(offset)
	// 		.limit(limit)
	// 		.sort(sortObj)

	// 	const entities = docs.map((doc) => Mapper.toEntity(doc))

	// 	return entities
	// }

	// async count(query: Query): Promise<number> {
	// 	let queryObj = { ...Mapper.toQuery(query) }

	// 	const count = await User.countDocuments(queryObj)
	// 	return count
	// }

	// async isExists(
	// 	email?: string,
	// 	phoneNumber?: string,
	// 	id?: string
	// ): Promise<boolean> {
	// 	const doc = await User.findOne({
	// 		...(email && { email }),
	// 		...(phoneNumber && { phoneNumber }),
	// 		...(id && { _id: { $ne: id } }),
	// 	})

	// 	return doc ? true : false
	// }

	// async updateOne(query: Query): Promise<UserEntity | null> {
	// 	const { _id, ...values } = Mapper.toQuery(query)
	// 	// null props of updates means delete ==> put in $unset
	// 	const updates = {}
	// 	const deleteUpdates = {}

	// 	// remove null values and add them to delete
	// 	// for (const [key, value] of Object.entries(values)) {
	// 	// 	if (value === null) {
	// 	// 		deleteUpdates[key] = 1
	// 	// 	} else {
	// 	// 		updates[key] = value
	// 	// 	}
	// 	// }

	// 	const update = { $set: { ...updates }, $unset: { ...deleteUpdates } }

	// 	const updatedDoc = await User.findByIdAndUpdate(_id, update, { new: true })

	// 	return updatedDoc ? Mapper.toEntity(updatedDoc) : null
	// }

	// async updateMany(query: Query): Promise<number> {
	// 	const { _id, ...updates } = Mapper.toQuery(query)
	// 	const update = { $set: { ...updates } }
	// 	const result = await User.updateMany({ _id }, update)

	// 	return result.matchedCount
	// }

	// async deleteOne(query: Query): Promise<boolean> {
	// 	const result = await User.deleteOne({
	// 		...Mapper.toQuery(query),
	// 	})

	// 	return result.deletedCount === 1
	// }

	// async deleteMany(query: Query): Promise<number> {
	// 	const result = await User.deleteMany({
	// 		...Mapper.toQuery(query),
	// 	})

	// 	return result.deletedCount
	// }

	// async findOne(query: Query, select: Boolean): Promise<UserEntity | null> {
	// 	let doc = null

	// 	if (select)
	// 		doc = await User.findOne({ ...Mapper.toQuery(query) }).select('+password')
	// 	else doc = await User.findOne({ ...Mapper.toQuery(query) })

	// 	return doc ? Mapper.toEntity(doc) : null
	// }

	// async findById(id: string): Promise<UserEntity | null> {
	// 	const doc = await User.findById(id)
	// 	return doc ? Mapper.toEntity(doc) : null
	// }

	async findAll(): Promise<UserEntity[]> {
		const docs = await User.find()
		return docs
	}

	async create(payload: UserEntity): Promise<UserEntity> {
		const doc = await User.create(payload)
		return doc
	}

	// async findAll(): Promise<UserEntity[]> {
	// 	// let queryObj = { ...Mapper.toQuery(query) }

	// 	const docs = await User.find()

	// 	const entities = docs.map((doc) => Mapper.toEntity(doc))


	// 	return entities
	// }
}