import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUsersThunk, changePageAC } from "../../store/reducers";
import { HiMiniArrowSmallLeft, HiMiniArrowSmallRight } from "react-icons/hi2";
import st from "./Pagination.module.css"

const Pagination = ({totalUsersCount, totalPagesCount}) => {
    const dispatch = useDispatch();
    const pagesCount = Math.ceil(totalUsersCount / totalPagesCount);

    const [startPage, setStartPage] = useState(270);
    const [activeIndex, setActiveIndex] = useState(0); 
    const currentPage = startPage + activeIndex;

    const handleClick = (index) => {
        setActiveIndex(index);
        dispatch(changePageAC(startPage + index));
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    
    const ChangeNextPage = () => {
        if (startPage + activeIndex < pagesCount) {
            if (activeIndex < 4) {
                setActiveIndex(prev => prev + 1);
                dispatch(changePageAC(startPage + activeIndex + 1));
            } else if (startPage + 5 <= pagesCount) {
                setStartPage(prev => prev + 1);
                dispatch(changePageAC(startPage + 5));
            }
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const ChangePrevPage = () => {
        if (startPage + activeIndex > 1) {
            if (activeIndex > 0) {
                setActiveIndex(prev => prev - 1);
                dispatch(changePageAC(startPage + activeIndex - 1));
            } else if (startPage > 1) {
                setStartPage(prev => prev - 1);
                dispatch(changePageAC(startPage - 1));
            }
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    useEffect(() => {
        dispatch(getUsersThunk(currentPage));
    }, [currentPage]);


    return (
        <div className={st.buttonsDiv}>
            <button onClick={ChangePrevPage} className={st.arrow}>
                <HiMiniArrowSmallLeft />
            </button>

            {
                [...Array(5)].map((_, i) => {
                    const pageNumber = startPage + i;
                    if (pageNumber > pagesCount) return null;

                    return (
                        <button 
                            key={i} 
                            onClick={() => handleClick(i)} 
                            className={i === activeIndex ? st.activePage : ""}
                        >
                            {pageNumber}
                        </button>
                    );
                })
            }

            <button onClick={ChangeNextPage} className={st.arrow}>
                <HiMiniArrowSmallRight />
            </button>
        </div>
    )
}

export default Pagination