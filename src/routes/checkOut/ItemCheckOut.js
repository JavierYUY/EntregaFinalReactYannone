import './components/ItemCss.css';

const ItemCheckOut = ({info}) => {
    
    return(
        <div>
            <div className="Item" >
                <h2>{info.Titulo}</h2>
                <div>
                    <img src={info.Imagen} alt={info.Titulo} />
                </div>
                <div>
                    <p>Valor: {info.valor * info.cantidad}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemCheckOut;