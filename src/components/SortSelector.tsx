import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSortSelect: (sortSelect: string) => void;
  sortSelect: string;
}

const SortSelector = ({ onSortSelect, sortSelect }: Props) => {
  const sortSelectors = [
    { value: "", label: "Relevence" },
    { value: "-added", label: "Data added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const currentSortSelector = sortSelectors.find(
    (sortSelector) => sortSelector?.value == sortSelect
  );
  return (
    <Menu>
      <MenuButton marginX={2} as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortSelector?.label || "Relvence"}
      </MenuButton>
      <MenuList>
        {sortSelectors.map((sortSelector) => (
          <MenuItem
            key={sortSelector.value}
            value={sortSelector.value}
            onClick={() => onSortSelect(sortSelector?.value)}
          >
            {sortSelector.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
