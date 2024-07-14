import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/GAMEHUB.png";

const Navbar = () => {
	return (
		<div>
			<HStack>
				<Image src={logo} boxSize="60px" />
				<Text>GameHub</Text>
			</HStack>
		</div>
	);
};

export default Navbar;
