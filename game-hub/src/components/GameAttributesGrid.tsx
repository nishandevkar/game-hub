import { SimpleGrid, List, ListItem, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import GameAttribute from "./GameAttribute";
import MetacriticScore from "./MetacriticScore";

interface GameAttributesGridProps {
	game: Game;
}

const GameAttributesGrid = ({ game }: GameAttributesGridProps) => {
	return (
		<SimpleGrid columns={2} as="dl">
			<GameAttribute attributeName="Platforms">
				<List>
					{game.parent_platforms.map(({ platform }) => (
						<ListItem key={platform.id}>{platform.name}</ListItem>
					))}
				</List>
			</GameAttribute>
			<GameAttribute attributeName="MetaScore">
				<MetacriticScore score={game.metacritic}></MetacriticScore>
			</GameAttribute>
			<GameAttribute attributeName="Genres">
				{game.genres.map((genre) => (
					<Text key={genre.id}>{genre.name}</Text>
				))}
			</GameAttribute>
			<GameAttribute attributeName="Publishers">
				{game.publishers.map((publisher) => (
					<Text key={publisher.id}>{publisher.name}</Text>
				))}
			</GameAttribute>
		</SimpleGrid>
	);
};

export default GameAttributesGrid;
