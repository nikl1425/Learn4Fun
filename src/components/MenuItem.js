


export const MenuItem = ({ item: { title, items = [], href } }) => {
  return (
      <li>
      <div className='menu-item-title'>{title}</div>
      
      { items.length && (
        <ul className='submenu'>
          { items.map( item => <MenuItem key={item.title} item={item} /> ) }
        </ul>
      )}
    </li>
  ) 
}