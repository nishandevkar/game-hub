import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import Game from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import MetacriticScore from "./MetacriticScore";
import getCroppedImageUrl from "../services/image-url";
import EmojiMap from "./EmojiMap";
import { Link } from "react-router-dom";

interface GameCardProps {
	game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
	return (
		<div>
			<Card>
				<Image src={getCroppedImageUrl(game.background_image)}></Image>
				<CardBody>
					<HStack justifyContent="space-between" paddingBottom={3}>
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
					<Heading fontSize="2xl">
						<Link to={`/games/${game.slug}`}>{game.name}</Link>
						<EmojiMap rating={game.rating_top}></EmojiMap>
					</Heading>
				</CardBody>
			</Card>
		</div>
	);
};

export default GameCard;
