import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameAttributeProps {
	attributeName: string;
	children: ReactNode;
}
const GameAttribute = ({ attributeName, children }: GameAttributeProps) => {
	return (
		<Box marginY={8}>
			<Heading as="dd" fontWeight={"bold"} color={"gray"} fontSize={"md"}>
				{attributeName}
			</Heading>
			<dt>{children}</dt>
		</Box>
	);
};

export default GameAttribute;
