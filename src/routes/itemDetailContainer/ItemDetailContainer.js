import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [itemP, setItem] = useState();
    
    useEffect(() => {
        const db = getFirestore();
        const itemId = doc(db, 'Items', id);

        getDoc(itemId).then((snapshot) => {
            if(snapshot.exists()){
                setItem(snapshot.data());
            }
        });
    }, [id]);

    return(
        <div>
            {!itemP ? 
                (<div>Cargando...</div>) : 
                (<ItemDetail key={id} item={itemP} />)
            }
        </div>
    );
}

export default ItemDetailContainer;