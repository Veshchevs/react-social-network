import React, {useState} from 'react';
import cl from './Paginator.module.css';


const Paginator = (props) => {

    let pageCount = Math.ceil(props.totalItemsCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pageCount / props.portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    const rightPortionPageNumber = portionNumber * props.portionSize


    return (
        <div className={cl.paginator}>
            {portionNumber > 1 &&
            <button className={cl.button} onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}> 1...</button>}


            {pages.filter(pageNumber => pageNumber >= leftPortionPageNumber && pageNumber <= rightPortionPageNumber)
                .map(pageNumber => {
                    return (
                        <span className={props.currentPage === pageNumber && cl.selectedPage}
                              onClick={() => {
                                  props.setCurrentPage(pageNumber)
                              }}>  {pageNumber}</span>
                    )
                })}
            {portionCount > portionNumber &&
            <button className={cl.button} onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>...{pageCount}</button>}
        </div>
    )
}

export default Paginator