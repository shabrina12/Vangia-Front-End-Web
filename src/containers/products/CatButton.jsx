import React from 'react'

const CategoryButton = ({button, filter}) => {
    return (
        <div className="category-container">
            {
                button.map((cat, i)=>{
                    return (
                        <button key={i} onClick={()=> filter(cat)}>{cat}</button>                        
                    ) 
                })
            }
        </div>
    )
}

export default CategoryButton