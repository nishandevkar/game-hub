import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";


export interface Genre{
	id: number;
	name: string;
	image_background: string;
}

const useGenres = () => {
	const genreResponse = useQuery<FetchResponse<Genre>, Error>({
		queryKey: ['genres'],
		queryFn: () => apiClient.get('/genres').then(res => res.data),
		staleTime: 24 * 60 * 60 * 1000,
		initialData: {count: genres.length, results: genres},
	})
	return {data: genreResponse.data, isLoading: false, error: null}
}
// const useGenres = () => ({data: genres, isLoading: false, error: null})

export default useGenres