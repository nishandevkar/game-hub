import useTrailer from "../hooks/useTrailer";
interface GameTrailerProps {
	gameId: number;
}
const GameTrailer = ({ gameId }: GameTrailerProps) => {
	const { data: trailer, isLoading } = useTrailer(gameId);
	if (isLoading) return null;
	// if (error) return error;

	const firstTrailer = trailer?.results[0];
	return firstTrailer ? (
		<video
			src={firstTrailer?.data[480]}
			poster={firstTrailer?.preview}
			controls
		></video>
	) : null;
};

export default GameTrailer;
