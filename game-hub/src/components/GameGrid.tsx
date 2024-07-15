import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
	const { error, games } = useGames();
	return (
		<div>
			{error && <Text>{error}</Text>}
			<ul>
				{games.map((eachGame) => (
					<li key={eachGame.id}>{eachGame.name}</li>
				))}
			</ul>
		</div>
	);
};

export default GameGrid;
