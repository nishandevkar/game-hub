import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../entities/Trailer"
import APIClient, { FetchResponse } from "../services/api-client"


const useTrailer = (id: number) => {
    const apiClient = new APIClient<Trailer>(`/games/${id}/movies`);
    const trailerResponse = useQuery({
		queryKey: ["trailers",id],
		queryFn: apiClient.getAll,
	});
    return trailerResponse;
}

export default useTrailer