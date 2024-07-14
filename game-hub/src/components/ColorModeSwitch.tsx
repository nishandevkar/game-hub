import { Switch, Text, HStack, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<div>
			<HStack>
				<Switch
					isChecked={colorMode === "dark"}
					colorScheme="red"
					onChange={toggleColorMode}
				/>
				<Text>Dark Mode</Text>
			</HStack>
		</div>
	);
};

export default ColorModeSwitch;
