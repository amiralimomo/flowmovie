
import ReactPaginate from 'react-paginate';
import "./pagination.css";
export const PaginationPage = (props) => {
const handlePageClick=(e)=>{
    console.log("handel selected",e.selected)
}


    return (


        < nav className="pagitation pt-4 pb-4 " >
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={props.pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                initialPage={1}
                className='pagitation'
            />
        </nav >
    )

}