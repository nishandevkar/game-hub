import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "./ExpandableText";

const GamesDetailsPage = () => {
	// throw new Error("error error");
	const { slug } = useParams();
	const { data, isLoading, error } = useGame(slug!);

	if (isLoading) return <Spinner />;
	if (error || !data) throw error;
	return (
		<>
			<Heading>{data.name}</Heading>
			<ExpandableText>{data.description_raw}</ExpandableText>
		</>
	);
};

export default GamesDetailsPage;
