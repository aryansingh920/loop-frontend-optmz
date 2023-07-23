import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxDisplayedPages = 5; // Number of page numbers to display on the pagination bar

    // If the total pages are less than or equal to the maxDisplayedPages, show all pages
    if (totalPages <= maxDisplayedPages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <li
            key={i}
            className={`page-item ${currentPage === i ? "active" : ""}`}
          >
            <a className="page-link" onClick={() => handlePageChange(i)}>
              {i}
            </a>
          </li>
        );
      }
    } else {
      // Display pagination with ellipsis

      const leftEllipsis =
        currentPage > 2 && totalPages > maxDisplayedPages ? (
          <li key="leftEllipsis" className="page-item disabled">
            <span className="page-link">...</span>
          </li>
        ) : null;

      const rightEllipsis =
        currentPage < totalPages - 1 ? (
          <li key="rightEllipsis" className="page-item disabled">
            <span className="page-link">...</span>
          </li>
        ) : null;

      let startPage = Math.max(
        currentPage - Math.floor(maxDisplayedPages / 2),
        1
      );
      let endPage = startPage + maxDisplayedPages - 1;

      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(endPage - maxDisplayedPages + 1, 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <li
            key={i}
            className={`page-item ${currentPage === i ? "active" : ""}`}
          >
            <a className="page-link" onClick={() => handlePageChange(i)}>
              {i}
            </a>
          </li>
        );
      }

      // Add left ellipsis if needed
      if (startPage > 1) {
        pageNumbers.unshift(leftEllipsis);
      }

      // Add right ellipsis if needed
      if (endPage < totalPages) {
        pageNumbers.push(rightEllipsis);
      }
    }

    return pageNumbers;
  };

  return (
    <div>
      <nav aria-label="...">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <a
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </a>
          </li>
          {renderPageNumbers()}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <a
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
