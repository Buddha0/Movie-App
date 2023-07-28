
import React from 'react';


const Pagination = ({ setPage, currentPage,pages }) => {

 
  const totalPages = [];
  const pageSize = 4; // Number of pages to display at a time

  for (let i = 1; i <= pages; i++) {
    totalPages.push(i);
  }

  function handleClick(page) {
    setPage(page);
  }

  function handleNext() {
    if (currentPage === pages) {
      return;
    }

    setPage(currentPage + 1);
  }

  function handlePrevious() {
    if (currentPage === 1) {
      return;
    }

    setPage(currentPage - 1);
  }

  const getPageRange = () => {
    // Calculate the range of pages to display
    const halfPageSize = Math.floor(pageSize / 2);
    let startPage = Math.max(currentPage - halfPageSize, 1);
    let endPage = Math.min(startPage + pageSize - 1, pages);

    if (endPage - startPage + 1 < pageSize) {
      startPage = Math.max(endPage - pageSize + 1, 1);
    }

    return { startPage, endPage };
  };

  const { startPage, endPage } = getPageRange();

  return (
    <>
      <div className='pagination-container'>
        <button className='btn' onClick={()=>setPage(1)}>First</button>
        <button className='btn btn-previous' onClick={handlePrevious}>
          Prev
        </button>
        {totalPages.slice(startPage - 1, endPage).map((page) => (
          <a
            href='#'
            key={page}
            onClick={() => handleClick(page)}
            className={currentPage === page ? 'pageNumbers pageNumbersActive' : 'pageNumbers'}
          >
            {page}
          </a>
        ))}
        <button className='btn btn-next' onClick={handleNext}>
          Next
        </button>
        <button className='btn' onClick={()=>setPage(pages)}>Last</button>
      </div>
    </>
  );
};

export default Pagination;



