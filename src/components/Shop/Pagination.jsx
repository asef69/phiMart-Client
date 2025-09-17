import React from 'react';

const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
    return (
        <div className='flex justify-center my-8'>
            {Array.from({ length: totalPages }, (_, index) => (
                <button key={index} className={`btn btn-sm mx-1 ${currentPage === index + 1 ? 'bg-secondary text-white' : 'bg-gray-200'}`} onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
            ))}
            
        </div>
    );
};

export default Pagination;