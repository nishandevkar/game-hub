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
	onSelectGenre: (genreId: number) => void;
	selectedGenreId?: number;
}
const GenreList = ({ onSelectGenre, selectedGenreId }: GenreListProps) => {
	const { data, isLoading, error } = useGenres();
	if (error) return null;
	return (
		<div>
			<Heading fontSize={"2xl"} marginBottom={3}>
				Genres
			</Heading>
			{isLoading && <Spinner></Spinner>}
			<List>
				{data?.results.map((eachGenre: Genre) => (
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
									selectedGenreId === eachGenre.id
										? "bold"
										: "normal"
								}
								onClick={() => {
									onSelectGenre(eachGenre.id);
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
