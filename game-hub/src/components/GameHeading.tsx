import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import useGenres, { Genre } from "../hooks/useGenres";

interface GameHeadingProps {
	gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: GameHeadingProps) => {
	const { data: platforms } = usePlatforms();
	const { data: genres } = useGenres();
	let platformName = platforms.results.find(
		(eachPlatform) => eachPlatform?.id === gameQuery?.platformId
	);
	let genreName = genres.results.find(
		(eachGenre) => eachGenre?.id === gameQuery?.genreId
	);

	let headingText = `${platformName?.name || ""} ${
		genreName?.name || ""
	} Games`;
	return (
		<>
			<Heading as="h1" marginY={7} fontSize="3xl">
				{headingText}
			</Heading>
		</>
	);
};

export default GameHeading;
