// .Create a React component that makes GraphQL queries to retrieve a list of items (e.g., a list of books, movies, or products) from a GraphQL API. Implement pagination for large datasets and display the data in a user-friendly way.
import { useQuery } from "@apollo/client";

import { useEffect, useState } from "react";
import { GET_ALL_FILMS_1 } from "./Question9.3";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
const columns = [
  {
    field: "cursor",
    headerName: "Cursor",
    width: 150,
    editable: true,
  },
];

function FetchData1() {
  const { data, loading, error } = useQuery(GET_ALL_FILMS_1, {
    variables: {
      after: "1",
      before: "10",
    },
  });

  const [showData, setshowData] = useState([]);
//   const[rows,setRows]=useState([]);
  useEffect(() => {
    setshowData(data?.allFilms.edges);
  }, [data]);

  


  console.log(data?.allFilms.edges, loading, error);

  const rows = showData?.map((item) => item.cursor)
  console.log(rows)
  return (
    <>
      {/* <p>GraphQL GET:</p>
  {!loading && showData?.map((item) => <li>{item.cursor}</li>)} */}
  

      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows.length}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 3,
              },
            },
          }}
          pageSizeOptions={[3]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
}

export default FetchData1;
