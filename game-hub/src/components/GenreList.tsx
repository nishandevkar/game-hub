import useGenres from "../hooks/useGenres";

const GenreList = () => {
	const { genres } = useGenres();
	return (
		<div>
			<ul>
				{genres.map((eachGenre) => (
					<li>{eachGenre.name}</li>
				))}
			</ul>
		</div>
	);
};

export default GenreList;
