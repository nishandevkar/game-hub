import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";

const GamesDetailsPage = () => {
	// throw new Error("error error");
	const { slug } = useParams();
	const { data, isLoading, error } = useGame(slug!);
	if (isLoading) return <Spinner />;
	if (error || !data) throw error;
	return (
		<>
			<Heading>{data.name}</Heading>
			<Text>{data.description_raw}</Text>
		</>
	);
};

export default GamesDetailsPage;
