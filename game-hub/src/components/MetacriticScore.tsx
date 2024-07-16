import { Badge } from "@chakra-ui/react";

interface MetacriticScoreProps {
	score: number;
}
const MetacriticScore = ({ score }: MetacriticScoreProps) => {
	let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
	return (
		<Badge paddingX={1} borderRadius={4} fontSize={14} colorScheme={color}>
			{score}
		</Badge>
	);
};

export default MetacriticScore;
