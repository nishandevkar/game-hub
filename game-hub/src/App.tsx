import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

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
				<GridItem area="main" bgColor={"blue"}>
					Main
				</GridItem>
				<Show above="lg">
					<GridItem area="aside" bgColor={"green"}>
						Aside
					</GridItem>
				</Show>
			</Grid>
		</>
	);
}

export default App;
