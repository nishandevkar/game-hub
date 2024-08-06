import { Box, Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import React, { Fragment } from "react";
import { GameQuery } from "../App";
import InfiniteScroll from "react-infinite-scroll-component";

interface GameGridProps {
	gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
	const {
		error,
		data,
		isLoading,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = useGames(gameQuery);
	const skeletons = [1, 2, 3, 4, 5, 6];
	if (error) return <Text>{error.message}</Text>;

	const fetchedGamesCount =
		data?.pages.reduce((total, page) => total + page.results.length, 0) ||
		0;
	return (
		<Box padding={"20px"}>
			<InfiniteScroll
				dataLength={fetchedGamesCount}
				hasMore={!!hasNextPage}
				next={fetchNextPage}
				loader={<Spinner />}
			>
				<SimpleGrid
					columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
					spacing={6}
				>
					{isLoading &&
						skeletons.map((skeleton) => (
							<GameCardContainer key={skeleton}>
								<GameCardSkeleton></GameCardSkeleton>
							</GameCardContainer>
						))}
					{data?.pages.map((page, index) => (
						<React.Fragment key={index}>
							{page.results.map((game) => (
								<GameCardContainer key={game.id}>
									<GameCard game={game}></GameCard>
								</GameCardContainer>
							))}
						</React.Fragment>
					))}
				</SimpleGrid>
			</InfiniteScroll>
			{/* {hasNextPage && (
				<Button onClick={() => fetchNextPage()} marginY={6}>
					{isFetchingNextPage ? "Loading..." : "Load More"}
				</Button>
			)} */}
		</Box>
	);
};

export default GameGrid;
