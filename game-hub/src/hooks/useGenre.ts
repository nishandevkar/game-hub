import useGenres from "./useGenres";

const useGenre = (id?:number) => {
    const { data: genres } = useGenres();
	return genres.results.find(
		(eachGenre) => eachGenre?.id === id
	);
}

export default useGenre;