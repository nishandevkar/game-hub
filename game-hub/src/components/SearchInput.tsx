import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface SearchInputProps {
	onSearch: (search: string) => void;
}
const SearchInput = ({ onSearch }: SearchInputProps) => {
	const ref = useRef<HTMLInputElement>(null);
	return (
		<>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					if (ref.current) onSearch(ref.current.value);
				}}
			>
				<InputGroup>
					<InputLeftElement
						children={<BsSearch />}
					></InputLeftElement>
					<Input
						ref={ref}
						borderRadius={10}
						placeholder="Search games..."
						variant="filled"
					></Input>
				</InputGroup>
			</form>
		</>
	);
};

export default SearchInput;
