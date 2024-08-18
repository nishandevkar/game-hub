import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
	const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
	const platformId = useGameQueryStore((s) => s.gameQuery.platformId);

	const platform = usePlatform(platformId);
	const genre = useGenre(genreId);

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
