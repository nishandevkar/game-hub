import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";

interface PlatformSelectorProps {
	selectedPlatformId: number | undefined;
	onSelectPlatform: (platformId: number) => void;
}
const PlatformSelector = ({
	selectedPlatformId,
	onSelectPlatform,
}: PlatformSelectorProps) => {
	const { data, error } = usePlatforms();
	const selectedPlatform = usePlatform(selectedPlatformId);
	if (error) return null;
	return (
		<div>
			<Menu>
				<MenuButton as={Button} rightIcon={<BsChevronDown />}>
					{selectedPlatform?.name || "Platforms"}
					{/* {"Platforms"} */}
				</MenuButton>
				<MenuList>
					{data?.results?.map((currentPlatform) => (
						<MenuItem
							key={currentPlatform.id}
							onClick={() => onSelectPlatform(currentPlatform.id)}
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
