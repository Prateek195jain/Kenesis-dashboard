import { FilterXIcon } from "lucide-react";
import { useState } from "react";

const FilterSortBar = () => {
  const [sortBy, setSortBy] = useState("Sort By: Reference");
  const [filterBy, setFilterBy] = useState("Filter By");

  return (
    <div className="flex flex-wrap gap-4 mb-6 items-center justify-between">
      <div className="flex flex-col">
        <select
          value={filterBy}
          onChange={(e) => setFilterBy(e.target.value)}
          className="px-4 py-2 rounded-md bg-gray-600 text-gray-300 focus:outline-none"
        >
          <FilterXIcon />
          <option value="Filter">Filter </option>

          <option value="Today">Today</option>
          <option value="This Week">This Week</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      <div className="flex flex-col">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 rounded-md bg-gray-600 text-gray-300 focus:outline-none"
        >
          <option value="Sort By">Sort By: Reference</option>
          <option value="Amount">Amount</option>
          <option value="Date">Date</option>
          <option value="Name">Name</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSortBar;
