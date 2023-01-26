import { ILocationResponse } from './location';

export interface IUserResponse {
	id: string;
	title: 'mr' | 'ms' | 'mrs' | 'miss' | 'dr' | '';
	firstName: string;
	lastName: string;
	picture: string;
	gender: 'male' | 'female' | 'other' | '';
	email: string;
	dateOfBirth: string;
	registerDate: string;
	phone: string;
	location: ILocationResponse;
}
