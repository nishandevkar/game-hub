import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";

interface EmojiMapProps {
	rating: number;
}
const EmojiMap = ({ rating }: EmojiMapProps) => {
	if (rating < 3) return null;
	const emojiMap: { [key: number]: ImageProps } = {
		3: { src: meh, alt: "", boxSize: "25px" },
		4: { src: thumbsUp, alt: "", boxSize: "25px" },
		5: { src: bullsEye, alt: "", boxSize: "35px" },
	};
	return (
		<div>
			<Image {...emojiMap[rating]} marginTop={1} />
		</div>
	);
};

export default EmojiMap;
