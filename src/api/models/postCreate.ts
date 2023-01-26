export interface IPostCreate {
	text: string;
	image: string;
	likes?: number;
	tags: string[];
	owner: string;
}
