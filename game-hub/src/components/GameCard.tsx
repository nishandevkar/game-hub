import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface GameCardProps {
	game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
	return (
		<div>
			<Card borderRadius={10} overflow="hidden">
				<CardBody>
					<Heading fontSize="2xl">{game.name}</Heading>
				</CardBody>
				<Image src={game.background_image}></Image>
			</Card>
		</div>
	);
};

export default GameCard;
