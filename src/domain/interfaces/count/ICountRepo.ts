export interface ICountRepo {
	getCounts(query): Promise<any>
}