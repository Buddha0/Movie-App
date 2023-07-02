import { useState } from "react"

export default function Pagination({setPages}) {

    const pageArr = []
    const totalPages = 20
    {
        for (let i = 1; i <= totalPages; i++) {
            pageArr.push(i)
        }
    }

    return (
        <>
            <div className="pagination-section">
                <div className="pagination">
                    {pageArr.map((num) => {
                        return <span className="pagination-btn" key={num}
                         onClick={()=>setPages(num)}>{num}</span>
                    })}
                </div>
            </div>

        </>
    )
}