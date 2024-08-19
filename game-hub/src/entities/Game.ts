import Genre  from "./Genre";
import Platform  from "./Platform";
import  Publisher  from "./Publisher";

export default interface Game {
	id: number;
	description_raw: string;
	name: string;
	slug: string;
	rating: number;
	rating_top: number;
	background_image: string;
	parent_platforms: { platform: Platform; }[];
	metacritic: number;
	genres: Genre[];
	publishers: Publisher[]
}
