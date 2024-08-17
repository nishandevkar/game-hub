import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGenres, { Genre } from "../hooks/useGenres";
import useGenre from "../hooks/useGenre";

interface GameHeadingProps {
	gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: GameHeadingProps) => {
	const platform = usePlatform(gameQuery.platformId);
	const genre = useGenre(gameQuery.genreId);

	let headingText = `${platform?.name || ""} ${genre?.name || ""} Games`;
	return (
		<>
			<Heading as="h1" marginY={7} fontSize="3xl">
				{headingText}
			</Heading>
		</>
	);
};

export default GameHeading;
