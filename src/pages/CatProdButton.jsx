import React from 'react'

const CatProdButton = ({button, filter}) => {
    return (
        <div className="category-container">
            {
                button.map((cat, i)=>{
                    return (
                        <button className='cat-btn' key={i} onClick={()=> filter(cat)}>{cat}</button>                        
                    ) 
                })
            }
        </div>
    )
}

export default CatProdButton