import React, { useState } from "react";


export const MenuItem = ({ item: { title, items = []} }) => {
  let defaultShowSub = false;
  const [showSub, setSub] = useState(defaultShowSub); 
  console.log(showSub)
  const onclickHandler = () => {
    setSub(defaultShowSub => !defaultShowSub)
  }

  return (
      <li>
      <div onClick={onclickHandler} className='menu-item-title'>{title}</div>
      
      
      if(defaultShowSub){
        <ul className='submenu'>
        { items.map( item => 
        <MenuItem key={item.title} item={item} /> 
        )}
        </ul>
      }
       
      
    </li>
  ) 
}