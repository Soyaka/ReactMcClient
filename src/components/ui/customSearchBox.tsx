import React from "react";
import { withSearch } from "@elastic/react-search-ui";
import { SearchState, SearchDriverActions } from "@elastic/search-ui";
import { SearchContextState } from "node_modules/@elastic/react-search-ui/lib/esm/withSearch";

interface CustomSearchBoxProps extends SearchState, SearchDriverActions {}

const CustomSearchBox: React.FC<CustomSearchBoxProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value, { shouldClearFilters: true });
  };

  return (
    <div className="custom-search-box">
      <input
        type="text"
        value={searchTerm || ""}
        onChange={handleSearchChange}
        placeholder="Search..."
        className="custom-input"
      />
      {/* Add any additional search UI components or actions as needed */}
    </div>
  );
};

export default withSearch(CustomSearchBox);
