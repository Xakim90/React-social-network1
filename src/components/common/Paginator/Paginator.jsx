import React, {useState} from 'react';
import styles from './Paginator.module.css';
import cn from "classnames";

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize); // bu yerda pagesCount-jami stranitsa soni = Math.ceil-matematik bo'lish
    // props.totalUsersCount = jami foydalanuvchilar soni
    // props.pageSize = stranitsa hajmi
    // ya'ni maksimal foydalanuvchilar sonini stranitsa hajmiga bo'linmoqda. Masalan props.totalUsersCount= 120 pageSize=5 120/5=24 ta stranitsa.
    let pages = [];
    // stranitsa
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={styles.paginator}>
        {portionNumber > 1 &&
        <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}> Prev </button>}
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span className={cn({
                    [styles.selectedPage]: currentPage === p
                }, styles.pageNumber)}
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }}> {p}</span>

            })}
        {portionCount > portionNumber &&
        <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}> Next </button>}
    </div>
};
export default Paginator