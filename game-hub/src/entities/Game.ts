import { Platform } from "./Platform";

export interface Game {
	id: number;
	description_raw: string;
	name: string;
	slug: string;
	rating: number;
	rating_top: number;
	background_image: string;
	parent_platforms: { platform: Platform; }[];
	metacritic: number;
}
