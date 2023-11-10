import { useState } from "react";

const Pagination = ({ rows, rowsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = Math.floor((rows.length + rowsPerPage - 1) / rowsPerPage);

  const currentPageStartIndex = (currentPage - 1) * rowsPerPage;
  const currentPageEndIndex = currentPageStartIndex + rowsPerPage - 1;

  const currentRows = rows.slice(
    currentPageStartIndex,
    currentPageEndIndex + 1
  );

  const handleNextClick = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      {currentRows?.map((item) => {
        return (
          <li>
            {item.node.name} - {item.node.capital}
          </li>
        );
      })}
      <br></br>
      {currentPage > 1 && currentPage <= totalPage ? (
        <button onClick={handlePrevClick}>Prev</button>
      ) : null}
      &nbsp;&nbsp;
      {currentPage >= 1 && currentPage < totalPage ? (
        <button onClick={handleNextClick}>Next</button>
      ) : null}
      <br />
      <p>Current Page : {currentPage}</p>
    </>
  );
};
export default Pagination;
