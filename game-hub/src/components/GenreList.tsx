import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
	const { data, isLoading, error } = useGenres();
	if (error) return null;
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
