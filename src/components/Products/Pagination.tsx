/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const styleNoTextSelect: React.CSSProperties = {
  touchAction: "manipulation",
  WebkitTouchCallout: "none",
  userSelect: "none",
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxDisplayedPages = 5;

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

      if (startPage > 1) {
        pageNumbers.unshift(leftEllipsis);
      }

      if (endPage < totalPages) {
        pageNumbers.push(rightEllipsis);
      }
    }

    return pageNumbers;
  };

  return (
    <div>
      <nav aria-label="...">
        <ul style={styleNoTextSelect} className="pagination">
          <li
            style={styleNoTextSelect}
            className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
          >
            <a
              style={styleNoTextSelect}
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </a>
          </li>
          {renderPageNumbers()}
          <li
            style={styleNoTextSelect}
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <a
              style={styleNoTextSelect}
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
