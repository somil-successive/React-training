// .Fetch a large dataset from an API and implement pagination. Display a limited number of items per page and provide navigation controls to load more pages of data.

// import React, { useEffect, useState } from "react";
// import Typography from "@mui/material/Typography";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";

// export function PaginationControlled() {
//   const [page, setPage] = React.useState(1);
//   const handleChange = (number) => {
//     setPage(number);
//   };

//   return (
//     <Stack spacing={2}>
//       <Typography>Page: {page}</Typography>
//       <Pagination count={10} page={page} onChange={handleChange} />
//     </Stack>
//   );
// }

// function Question4() {
//   const [data, setData] = useState([]);
//   const [isButtonClicked, setIsButtonClicked] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setData(data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         alert("Invalid api:", error);
//       });
//   }, [isButtonClicked]);

//   const handleClick = () => {
//     setIsButtonClicked(true);
//   };

//   return (
//     <div>
//       <h3>Error Handling :</h3>
//       <button onClick={handleClick}>Fetch Data</button>

//       {isButtonClicked ? (
//         isLoading ? (
//           "Loading..."
//         ) : (
//           <ul>
//             {data.map((user) => (
//               <li key={user.id}>{user.username}</li>
//             ))}
//           </ul>
//         )
//       ) : (
//         <p>Click Button!</p>
//       )}

//       <PaginationControlled />
//     </div>
//   );
// }

// export default Question4;
