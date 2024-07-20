import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/GAMEHUB.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface NavbarProps {
	onSearch: (search: string) => void;
}
const Navbar = ({ onSearch }: NavbarProps) => {
	return (
		<div>
			<HStack padding="1rem">
				<Image src={logo} boxSize="60px" />
				<SearchInput onSearch={onSearch}></SearchInput>
				<ColorModeSwitch />
			</HStack>
		</div>
	);
};

export default Navbar;
