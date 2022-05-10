import React from 'react';
import "./Books.css"



const Books = ({item, handleDelete}) => {
    

  return (
    <div className='mainbook'>
        <h1>{item?.title}</h1>
        <button onClick={() => handleDelete(item.id)} className = "deletebutton">Delete Book</button>
    </div>
  )
}

export default Books