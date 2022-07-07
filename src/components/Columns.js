import React, { Fragment } from 'react'

function Columns() {
    const items= [{id:1,title:"title 1"},{id:2,title:"title 2"}]
  return (
   /* 
    {items.map(item =>(<Fragment key={item.id}>
        <h1>Title</h1>
        <p>{item.title}</p>
    </Fragment>))} 
    */

   <>
   <td>Name</td>
    <td>ThuNDeR</td>
   </>
    
    )
}

export default Columns