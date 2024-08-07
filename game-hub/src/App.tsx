import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
	genreId: number | undefined;
	platformId: number | undefined;
	sortOrder: string;
	searchText: string;
}
function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
	return (
		<>
			<Grid
				templateAreas={{
					base: `"nav" "main"`,
					lg: `"nav nav" "aside main"`,
				}}
				templateColumns={{
					base: "1fr",
					lg: "200px 1fr",
				}}
			>
				<GridItem area="nav">
					<Navbar
						onSearch={(search) =>
							setGameQuery({ ...gameQuery, searchText: search })
						}
					></Navbar>
				</GridItem>
				<GridItem area="main">
					<Box paddingX={5}>
						<GameHeading gameQuery={gameQuery}></GameHeading>
						<HStack marginBottom={5}>
							<PlatformSelector
								selectedPlatform={gameQuery.platformId}
								onSelectPlatform={(selectedPlatformId) =>
									setGameQuery({
										...gameQuery,
										platformId: selectedPlatformId,
									})
								}
							></PlatformSelector>
							<SortSelector
								sortOrderCategory={gameQuery.sortOrder}
								onSelectSortOrder={(sortOrder) =>
									setGameQuery({ ...gameQuery, sortOrder })
								}
							></SortSelector>
						</HStack>
					</Box>

					<GameGrid gameQuery={gameQuery}></GameGrid>
				</GridItem>
				<Show above="lg">
					<GridItem area="aside" paddingX={5}>
						<GenreList
							selectedGenreId={gameQuery.genreId}
							onSelectGenre={(selectedGenreId) => {
								setGameQuery({
									...gameQuery,
									genreId: selectedGenreId,
								});
							}}
						></GenreList>
					</GridItem>
				</Show>
			</Grid>
		</>
	);
}

export default App;
