import { Genre } from "../hooks/useGenres";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
	const { data } = useGenres();
	return (
		<div>
			<ul>
				{data.map((eachGenre: Genre) => (
					<li>{eachGenre.name}</li>
				))}
			</ul>
		</div>
	);
};

export default GenreList;
