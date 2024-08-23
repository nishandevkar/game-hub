import {
	Button,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Show,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
	const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
	const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
	const sortByCategories = [
		{ value: "", label: "Relevance" },
		{ value: "-added", label: "Date Added" },
		{ value: "rating", label: "Average Rating" },
		{ value: "name", label: "Name" },
		{ value: "-released", label: "Released" },
		{ value: "-metacritic", label: "Popularity" },
	];

	const currentSortOrderCategory = sortByCategories.find(
		(order) => order.value === sortOrder
	);
	return (
		<div>
			<Menu>
				<MenuButton as={Button} rightIcon={<BsChevronDown />}>
					<Show above="sm">Order by: </Show>
					{currentSortOrderCategory?.label || "Relevance"}
				</MenuButton>
				<MenuList>
					{sortByCategories.map((eachOrder) => (
						<MenuItem
							key={eachOrder.value}
							value={eachOrder.value}
							onClick={() => setSortOrder(eachOrder.value)}
						>
							{eachOrder.label}
						</MenuItem>
					))}
				</MenuList>
			</Menu>
		</div>
	);
};

export default SortSelector;
