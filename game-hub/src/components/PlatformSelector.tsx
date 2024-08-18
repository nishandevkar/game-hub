import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
	const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
	const setPlatformId = useGameQueryStore((s) => s.setPlatformId);

	const { data, error } = usePlatforms();
	const selectedPlatform = usePlatform(platformId);
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
							onClick={() => setPlatformId(currentPlatform.id)}
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
