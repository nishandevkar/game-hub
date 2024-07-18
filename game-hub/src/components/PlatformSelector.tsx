import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
	const { data, error } = usePlatforms();
	if (error) return null;
	return (
		<div>
			<Menu>
				<MenuButton as={Button} rightIcon={<BsChevronDown />}>
					Platforms
					<MenuList>
						{data.map((eachPlatform) => (
							<MenuItem key={eachPlatform.id}>
								{eachPlatform.name}
							</MenuItem>
						))}
					</MenuList>
				</MenuButton>
			</Menu>
		</div>
	);
};

export default PlatformSelector;
