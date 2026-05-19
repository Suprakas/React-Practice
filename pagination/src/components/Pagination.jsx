import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Pagination({
  goToPrevPage,
  goToNextPage,
  handlePageChange,
  currentPage,
  noOfPages,
}) {
  return (
    <div className="pagination-container">
      <button
        disabled={currentPage === 0}
        className="page-number"
        onClick={goToPrevPage}
      >
        <FaChevronLeft />
      </button>

      {[...Array(noOfPages).keys()].map((n) => (
        <button
          key={n}
          className={`page-number ${n === currentPage ? "active" : ""}`}
          onClick={() => handlePageChange(n)}
        >
          {n + 1}
        </button>
      ))}

      <button
        disabled={currentPage === noOfPages - 1}
        className="page-number"
        onClick={goToNextPage}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
