import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
	const { error, data, isLoading, fetchNextPage, hasNextPage } = useGames();
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
