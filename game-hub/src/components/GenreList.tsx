import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
	const { data } = useGenres();
	return (
		<div>
			<List>
				{data.map((eachGenre: Genre) => (
					<ListItem paddingY={2}>
						<HStack>
							<Image
								src={getCroppedImageUrl(
									eachGenre.image_background
								)}
								boxSize="32px"
								borderRadius={8}
							/>
							<Text fontSize="lg">{eachGenre.name}</Text>
						</HStack>
					</ListItem>
				))}
			</List>
		</div>
	);
};

export default GenreList;
