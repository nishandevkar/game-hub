import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "./ExpandableText";
import GameAttributesGrid from "./GameAttributesGrid";
import GameTrailer from "./GameTrailer";
import ScreenshotsGrid from "./ScreenshotsGrid";

const GamesDetailsPage = () => {
	const { slug } = useParams();
	const { data, isLoading, error } = useGame(slug!);

	if (isLoading) return <Spinner />;
	if (error || !data) throw error;
	return (
		<>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} padding={5}>
				<Box>
					<Heading>{data.name}</Heading>
					<ExpandableText>{data.description_raw}</ExpandableText>
					<GameAttributesGrid game={data}></GameAttributesGrid>
				</Box>
				<Box>
					<GameTrailer gameId={data.id}></GameTrailer>
					<ScreenshotsGrid id={data.id}></ScreenshotsGrid>
				</Box>
			</SimpleGrid>
		</>
	);
};

export default GamesDetailsPage;
