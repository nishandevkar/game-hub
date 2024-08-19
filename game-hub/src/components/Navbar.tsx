import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/GAMEHUB.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link, Navigate, useRoutes } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<HStack padding="1rem">
				<Link to={"/"}>
					<Image src={logo} boxSize="80px" objectFit={"cover"} />
				</Link>
				<SearchInput></SearchInput>
				<ColorModeSwitch />
			</HStack>
		</div>
	);
};

export default Navbar;
