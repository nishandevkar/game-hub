import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface PlatformSelectorProps {
	selectedPlatform: Platform | null;
	onSelectPlatform: (platform: Platform) => void;
}
const PlatformSelector = ({
	selectedPlatform,
	onSelectPlatform,
}: PlatformSelectorProps) => {
	const { data, error } = usePlatforms();
	if (error) return null;
	return (
		<div>
			<Menu>
				<MenuButton as={Button} rightIcon={<BsChevronDown />}>
					{selectedPlatform?.name || "Platforms"}
				</MenuButton>
				<MenuList>
					{data.map((currentPlatform) => (
						<MenuItem
							key={currentPlatform.id}
							onClick={() => onSelectPlatform(currentPlatform)}
						>
							{currentPlatform.name}
						</MenuItem>
					))}
				</MenuList>
			</Menu>
		</div>
	);
};

export default PlatformSelector;
