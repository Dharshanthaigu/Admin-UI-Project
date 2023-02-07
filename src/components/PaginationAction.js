const PaginationAction = ({no_of_Pages, currentPage , setCurrentPage,setCheckedUsers}) =>{

    const PageNo= [...Array(no_of_Pages + 1).keys()].slice(1)

    const handleClicknextPage = () =>{
        if(currentPage !== no_of_Pages)
            setCurrentPage(currentPage + 1)
            setCheckedUsers([])

    }

    const handleClickpreviousPage = () =>{
        if(currentPage !== 1)
            setCurrentPage(currentPage - 1)
            setCheckedUsers([])
    }

    const  handleClickFirstPage = () =>{
        if(currentPage !== 1)
        setCurrentPage(1)
        setCheckedUsers([])
    }

    const  handleClickLastPage = () =>{
        if(currentPage !== no_of_Pages)
        setCurrentPage(no_of_Pages)
        setCheckedUsers([])
    }

    return(
        <div className="page">
            <ul className="page-btn" >
                
                    <button  onClick={handleClickFirstPage}>
                        {"<<"}
                    </button>
                
                
                    <button  onClick={handleClickpreviousPage}>
                        {"<"}
                    </button>
                
                {PageNo.map(pgNo =>{
                    return(
                    <div key={pgNo}>
                        <button id={pgNo} onClick={(e) =>setCurrentPage(e.target.id)}>{pgNo}</button>
                    </div>
                    )
                })}
                
                    <button onClick={handleClicknextPage}>
                        {">"}
                    </button>
                
                
                    <button onClick={handleClickLastPage}>
                        {">>"}
                    </button>
                
            </ul>
        </div>
    )
}

export default PaginationAction