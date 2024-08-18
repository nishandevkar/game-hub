import { Grid, GridItem, HStack, Show, Box } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
	return (
		<div>
			<Grid
				templateAreas={{
					base: ` "main"`,
					lg: ` "aside main"`,
				}}
				templateColumns={{
					base: "1fr",
					lg: "200px 1fr",
				}}
			>
				<GridItem area="main">
					<Box paddingX={5}>
						<GameHeading></GameHeading>
						<HStack marginBottom={5}>
							<PlatformSelector></PlatformSelector>
							<SortSelector></SortSelector>
						</HStack>
					</Box>

					<GameGrid></GameGrid>
				</GridItem>
				<Show above="lg">
					<GridItem area="aside" paddingX={5}>
						<GenreList></GenreList>
					</GridItem>
				</Show>
			</Grid>
		</div>
	);
};

export default HomePage;
