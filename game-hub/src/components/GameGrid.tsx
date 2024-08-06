import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

import { GameQuery } from "../App";

interface GameGridProps {
	gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
	const { error, data, isLoading } = useGames(gameQuery);
	const skeletons = [1, 2, 3, 4, 5, 6];
	if (error) return <Text>{error.message}</Text>;
	return (
		<SimpleGrid
			columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
			spacing={6}
			padding="20px"
		>
			{isLoading &&
				skeletons.map((skeleton) => (
					<GameCardContainer key={skeleton}>
						<GameCardSkeleton></GameCardSkeleton>
					</GameCardContainer>
				))}
			{data?.results.map((eachGame) => (
				<GameCardContainer key={eachGame.id}>
					<GameCard game={eachGame}></GameCard>
				</GameCardContainer>
			))}
		</SimpleGrid>
	);
};

export default GameGrid;
