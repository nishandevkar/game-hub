import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/GAMEHUB.png";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
	return (
		<div>
			<HStack justifyContent="space-between" padding="1rem">
				<Image src={logo} boxSize="60px" />
				<ColorModeSwitch />
			</HStack>
		</div>
	);
};

export default Navbar;
