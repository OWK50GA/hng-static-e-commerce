const Pagination = ({totalPosts, postsPerPage, setCurrentPage, currentPage}) => {

    let pages = []

    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pages.push(i)
    }

    return ( 
        <div className="w-fit m-auto mt-3 flex gap-2">
            {
                pages.map((page, index) => {
                    return (
                        <button 
                            key={index}
                            className={currentPage == page? "px-3 py-2 bg-blue-600 rounded-sm text-white"
                                : 
                                "px-3 py-2 border border-black rounded-sm"}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </button>
                    )
                })
            }
        </div>
     );
}
 
export default Pagination;