import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
export interface Game {
	id: number;
	name: string;
	rating: number;
	rating_top: number;
    background_image: string;
    parent_platforms: {platform:Platform}[];
	metacritic: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) => {
	const gameResponse = useQuery<FetchResponse<Game>,Error>({
	queryKey:['games', gameQuery],
	queryFn: () => apiClient.getAll({params: 
			{
				genres: gameQuery.genre?.id,
				parent_platforms: gameQuery.platform?.id,
				ordering: gameQuery.sortOrder,
				search: gameQuery.searchText
			}}),
	staleTime: 2 * 60 * 60 * 1000,
})
	return gameResponse	
}
export default useGames