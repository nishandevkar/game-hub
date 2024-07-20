import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
	return (
		<div>
			<Menu>
				<MenuButton as={Button} rightIcon={<BsChevronDown />}>
					Order by:
				</MenuButton>
				<MenuList>
					<MenuItem>Name</MenuItem>
					<MenuItem>Relevance</MenuItem>
					<MenuItem>Rating</MenuItem>
				</MenuList>
			</Menu>
		</div>
	);
};

export default SortSelector;
