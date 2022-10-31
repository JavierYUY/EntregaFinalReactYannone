import Item from './Item';

const ItemList = (param) => {
    const {items} = param;
    
    return(
        items.map(item => <Item key={item.id} info={item} />)
    )
}

export default ItemList;