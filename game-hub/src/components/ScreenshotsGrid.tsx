import { SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenshot from "../hooks/useScreenshot";

interface ScreenshotsGridProps {
	id: number;
}

const ScreenshotsGrid = ({ id }: ScreenshotsGridProps) => {
	const { data: screenshots, isLoading, error } = useScreenshot(id);
	if (isLoading) return <Spinner></Spinner>;
	return (
		<SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
			{screenshots?.results.map((image) => (
				<img src={image.image}></img>
			))}
		</SimpleGrid>
	);
};

export default ScreenshotsGrid;
