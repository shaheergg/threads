import React from "react";

function useFilter({ data, filterBy, filterValue }) {
  const [filteredData, setFilteredData] = React.useState(data);

  React.useEffect(() => {
    if (filterValue === "") {
      setFilteredData(data);
    } else {
      const newData = data?.filter((item) =>
        item[filterBy]?.toLowerCase().includes(filterValue.toLowerCase())
      );
      setFilteredData(newData);
    }
  }, [data, filterBy, filterValue]);

  return { filteredData };
}

export default useFilter;
