import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
	return (
		<div>
			<HStack padding="1rem">
				<Link to={"/"}>
					<Image src={logo} boxSize="40px" objectFit={"cover"} />
				</Link>
				<SearchInput></SearchInput>
				<ColorModeSwitch />
			</HStack>
		</div>
	);
};

export default Navbar;
