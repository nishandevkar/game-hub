import {
	Button,
	HStack,
	Icon,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Show,
	Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";
import { FaGamepad } from "react-icons/fa6";
import { iconMap } from "./PlatformIconList";

const PlatformSelector = () => {
	const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
	const setPlatformId = useGameQueryStore((s) => s.setPlatformId);

	const { data, error } = usePlatforms();
	const selectedPlatform = usePlatform(platformId)!;

	if (error) return null;
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				<HStack>
					<Icon
						as={
							selectedPlatform?.slug
								? iconMap[selectedPlatform?.slug]
								: FaGamepad
						}
					></Icon>
					<Show above="sm">
						<Text>{selectedPlatform?.name || "Platforms"}</Text>
					</Show>
				</HStack>
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
	);
};

export default PlatformSelector;
