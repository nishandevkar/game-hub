import { Box, Heading, List, ListItem, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import { Platform } from "../entities/Platform";
import { ReactNode } from "react";

interface GameAttributeProps {
	attributeName: string;
	children: ReactNode;
}
const GameAttribute = ({ attributeName, children }: GameAttributeProps) => {
	return (
		<Box padding={4}>
			<Heading as="dd" fontWeight={"bold"} color={"gray"} fontSize={"md"}>
				{attributeName}
			</Heading>
			<dt>{children}</dt>
		</Box>
	);
};

export default GameAttribute;
