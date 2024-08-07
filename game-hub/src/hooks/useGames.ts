import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
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
	const gameResponse = useInfiniteQuery<FetchResponse<Game>,Error>({
	queryKey:['games', gameQuery],
	queryFn: ({pageParam = 1}) => apiClient.getAll({params: 
			{
				genres: gameQuery.genreId,
				parent_platforms: gameQuery.platformId,
				ordering: gameQuery.sortOrder,
				search: gameQuery.searchText,
				page: pageParam
			}}),
	staleTime: 2 * 60 * 60 * 1000,
	getNextPageParam: (lastPage, allPages) => {
		return lastPage.next ? allPages.length + 1 : undefined;
	}
})
	return gameResponse	
}
export default useGames