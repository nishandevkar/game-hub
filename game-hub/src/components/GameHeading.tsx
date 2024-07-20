import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface GameHeadingProps {
	gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: GameHeadingProps) => {
	let headingText = `${gameQuery?.platform?.name || ""} ${
		gameQuery?.genre?.name || ""
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
