import {React} from 'react';

const Pagination = ({firstPage, previousPage, currentPage, nextPage, lastPage, totalPages}) => {
    
    return (
        <div className="pagination-buttons"> 
            
            {currentPage > 1 ? 
            <div className="previous-buttons">
            <button onClick={() => firstPage()}>FIRST
            </button>
            <button onClick={() => previousPage()}>PREVIOUS
            </button>
            </div>
            : ''}

            <button className="active-page-button">{currentPage}</button>

            {currentPage < totalPages ?
            <div className="next-buttons">
            <button onClick={() => nextPage()}>NEXT
            </button>
            <button onClick={() => lastPage()}>LAST
            </button>
            </div>: 
            '' }
            
           
        </div>
    )
}

export default Pagination;