import {
	Button,
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
	Text,
} from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface GenreListProps {
	onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectGenre }: GenreListProps) => {
	const { data, isLoading, error } = useGenres();
	if (error) return null;
	return (
		<div>
			{isLoading && <Spinner></Spinner>}
			<List>
				{data.map((eachGenre: Genre) => (
					<ListItem paddingY={2} key={eachGenre.id}>
						<HStack>
							<Image
								src={getCroppedImageUrl(
									eachGenre.image_background
								)}
								boxSize="32px"
								borderRadius={8}
							/>
							<Button
								fontSize="lg"
								onClick={() => {
									onSelectGenre(eachGenre);
								}}
								variant="link"
							>
								{eachGenre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</div>
	);
};

export default GenreList;
