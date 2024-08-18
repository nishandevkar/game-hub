import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/GAMEHUB.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Outlet } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<HStack padding="1rem">
				<Image src={logo} boxSize="60px" />
				<SearchInput></SearchInput>
				<ColorModeSwitch />
			</HStack>
		</div>
	);
};

export default Navbar;
