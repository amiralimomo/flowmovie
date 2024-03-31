
import ReactPaginate from 'react-paginate';
export const PaginationPage = (props) => {

const handlePageClick=()=>{
    console.log("handel")
}


    return (


        < nav className="pagitation pt-4 pb-4 " >
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={6}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </nav >
    )

}