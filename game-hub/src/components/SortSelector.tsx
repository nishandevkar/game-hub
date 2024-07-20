import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
interface SortSelectorProps {
	onSelectSortOrder: (order: string) => void;
	sortOrderCategory: string;
}
const SortSelector = ({
	onSelectSortOrder,
	sortOrderCategory,
}: SortSelectorProps) => {
	const sortByCategories = [
		{ value: "", label: "Relevance" },
		{ value: "-added", label: "Date Added" },
		{ value: "rating", label: "Average Rating" },
		{ value: "name", label: "Name" },
		{ value: "-released", label: "Released" },
		{ value: "-metacritic", label: "Popularity" },
	];

	const currentSortOrderCategory = sortByCategories.find(
		(order) => order.value === sortOrderCategory
	);
	return (
		<div>
			<Menu>
				<MenuButton as={Button} rightIcon={<BsChevronDown />}>
					Order by: {currentSortOrderCategory?.label || "Relevance"}
				</MenuButton>
				<MenuList>
					{sortByCategories.map((eachOrder) => (
						<MenuItem
							key={eachOrder.value}
							value={eachOrder.value}
							onClick={() => onSelectSortOrder(eachOrder.value)}
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
