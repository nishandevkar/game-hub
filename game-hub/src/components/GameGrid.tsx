import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

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
						<GameCardContainer>
							<GameCardSkeleton key={skeleton}></GameCardSkeleton>
						</GameCardContainer>
					))}
				{games.map((eachGame) => (
					<GameCardContainer>
						<GameCard game={eachGame}></GameCard>
					</GameCardContainer>
				))}
			</SimpleGrid>
		</div>
	);
};

export default GameGrid;
