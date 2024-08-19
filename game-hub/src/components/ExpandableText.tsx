import { Box, Button, Text } from "@chakra-ui/react";
import { ReactNode, useState } from "react";

interface ExpandableTextProps {
	children: string;
}

const ExpandableText = ({ children }: ExpandableTextProps) => {
	const [isExpanded, setIsExpanded] = useState(false);
	if (!children) return null;
	const desc = isExpanded ? children.substring(0, 300) + "..." : children;
	return (
		<Box>
			<Text>{desc}</Text>
			<Button
				marginLeft={1}
				size={"xs"}
				colorScheme="yellow"
				onClick={() => setIsExpanded(!isExpanded)}
			>
				{isExpanded ? "Show More" : "Show Less"}
			</Button>
		</Box>
	);
};

export default ExpandableText;
