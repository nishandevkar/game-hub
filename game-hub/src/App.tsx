import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";

function App() {
	return (
		<>
			<Grid
				templateAreas={{
					base: `"nav" "main"`,
					lg: `"nav nav" "aside main"`,
				}}
			>
				<GridItem area="nav">
					<Navbar></Navbar>
				</GridItem>
				<GridItem area="main">
					<GameGrid></GameGrid>
				</GridItem>
				<Show above="lg">
					<GridItem area="aside">Aside</GridItem>
				</Show>
			</Grid>
		</>
	);
}

export default App;
