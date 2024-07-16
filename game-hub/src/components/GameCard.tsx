import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import MetacriticScore from "./MetacriticScore";

interface GameCardProps {
	game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
	return (
		<div>
			<Card borderRadius={10} overflow="hidden">
				<CardBody>
					<Heading fontSize="2xl">{game.name}</Heading>
					<HStack justifyContent="space-between">
						<PlatformIconList
							platforms={game.parent_platforms.map(
								(eachPlatformObject) =>
									eachPlatformObject.platform
							)}
						></PlatformIconList>
						<MetacriticScore
							score={game.metacritic}
						></MetacriticScore>
					</HStack>
				</CardBody>
				<Image src={game.background_image}></Image>
			</Card>
		</div>
	);
};

export default GameCard;
