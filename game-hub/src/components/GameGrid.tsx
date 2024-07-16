import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
	const { error, games, isLoading } = useGames();
	const skeletons = [1, 2, 3, 4, 5, 6];
	return (
		<div>
			{error && <Text>{error}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
				spacing={10}
				padding="20px"
			>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardSkeleton key={skeleton}></GameCardSkeleton>
					))}
				{games.map((eachGame) => (
					<GameCard game={eachGame}></GameCard>
				))}
			</SimpleGrid>
		</div>
	);
};

export default GameGrid;
