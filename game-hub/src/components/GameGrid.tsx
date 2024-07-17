import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface GameGridProps {
	selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: GameGridProps) => {
	const { error, data, isLoading } = useGames(selectedGenre);
	const skeletons = [1, 2, 3, 4, 5, 6];
	return (
		<div>
			{error && <Text>{error}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
				spacing={3}
				padding="20px"
			>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardContainer key={skeleton}>
							<GameCardSkeleton></GameCardSkeleton>
						</GameCardContainer>
					))}
				{data.map((eachGame) => (
					<GameCardContainer key={eachGame.id}>
						<GameCard game={eachGame}></GameCard>
					</GameCardContainer>
				))}
			</SimpleGrid>
		</div>
	);
};

export default GameGrid;
