import { Heading, Spinner } from "@chakra-ui/react";
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
			<Heading>{data.name}</Heading>
			<ExpandableText>{data.description_raw}</ExpandableText>
			<GameAttributesGrid game={data}></GameAttributesGrid>
			<GameTrailer gameId={data.id}></GameTrailer>
			<ScreenshotsGrid id={data.id}></ScreenshotsGrid>
		</>
	);
};

export default GamesDetailsPage;
