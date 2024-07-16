import {
	FaPlaystation,
	FaWindows,
	FaXbox,
	FaApple,
	FaLinux,
	FaAndroid,
	FaWallet,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface PlatformIconListProps {
	platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		nintendo: SiNintendo,
		mac: FaApple,
		linux: FaLinux,
		android: FaAndroid,
		ios: MdPhoneIphone,
		web: BsGlobe,
		xbox: FaXbox,
	};
	return (
		<>
			<HStack marginY={1}>
				{platforms.map((eachPlatform) => (
					<Icon as={iconMap[eachPlatform.slug]} color="gray.500" />
				))}
			</HStack>
		</>
	);
};

export default PlatformIconList;
