export interface ILocationService {
	getCurrentLocation(): Promise<string>
	isRealCity(city: string): Promise<boolean>
};
