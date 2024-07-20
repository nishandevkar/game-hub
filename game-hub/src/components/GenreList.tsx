import {
	Button,
	HStack,
	Heading,
	Image,
	List,
	ListItem,
	Spinner,
} from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface GenreListProps {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
	const { data, isLoading, error } = useGenres();
	if (error) return null;
	return (
		<div>
			<Heading fontSize={"2xl"} marginBottom={3}>
				Genres
			</Heading>
			{isLoading && <Spinner></Spinner>}
			<List>
				{data.map((eachGenre: Genre) => (
					<ListItem paddingY={2} key={eachGenre.id}>
						<HStack>
							<Image
								src={getCroppedImageUrl(
									eachGenre.image_background
								)}
								objectFit={"cover"}
								boxSize="32px"
								borderRadius={8}
							/>
							<Button
								fontSize="lg"
								whiteSpace={"normal"}
								textAlign={"left"}
								fontWeight={
									selectedGenre?.id === eachGenre.id
										? "bold"
										: "normal"
								}
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
