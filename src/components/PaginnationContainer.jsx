import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
const PaginnationContainer = () => {
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
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              onClick={() => handlePaheChange(pageNumber)}
              className={`btn btn-xs sm:btn-md border-none join-item ${
                pageNumber === page ? "bg-base-300 border-base-300" : ""
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
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

export default PaginnationContainer;
