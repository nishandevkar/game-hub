import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface GameCardProps {
	game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
	return (
		<div>
			<Card borderRadius={10} overflow="hidden">
				<CardBody>
					<Heading fontSize="2xl">{game.name}</Heading>
					<PlatformIconList
						platforms={game.parent_platforms.map(
							(eachPlatformObject) => eachPlatformObject.platform
						)}
					></PlatformIconList>
				</CardBody>
				<Image src={game.background_image}></Image>
			</Card>
		</div>
	);
};

export default GameCard;
