import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const ComplexPaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const handlePaheChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };
  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={pageNumber}
        onClick={() => handlePaheChange(pageNumber)}
        className={`btn btn-xs sm:btn-md border-none join-item ${
          activeClass ? "bg-base-300 border-base-300" : ""
        }`}
      >
        {pageNumber}
      </button>
    );
  };
  const renderPageButtons = () => {
    const pageButton = [];
    pageButton.push(addPageButton({ pageNumber: 1, activeClass: page === 1 }));
    if (page > 2) {
      pageButton.push(
        <button key="dots-1" className="btn btn-xs sm:btn-md join-item">
          ...
        </button>
      );
    }
    if (page !== 1 && page !== pageCount) {
      pageButton.push(addPageButton({ pageNumber: page, activeClass: true }));
    }
    if (page < pageCount - 1) {
      pageButton.push(
        <button key="dots-2" className="btn btn-xs sm:btn-md join-item">
          ...
        </button>
      );
    }
    pageButton.push(
      addPageButton({ pageNumber: pageCount, activeClass: page === pageCount })
    );
    return pageButton;
  };
  if (pageCount < 2) return null;
  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let prePage = page - 1;
            if (prePage < 1) prePage = pageCount;
            handlePaheChange(prePage);
          }}
        >
          Prev
        </button>
        {renderPageButtons()}
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handlePaheChange(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ComplexPaginationContainer;
