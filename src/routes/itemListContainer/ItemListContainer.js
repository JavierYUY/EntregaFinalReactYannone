import React, { useEffect, useState } from "react";
import {getFirestore, collection, getDocs, where, query} from 'firebase/firestore';
import ItemList from './ItemList';
import { useParams } from "react-router";

const ItemListContainer = () => {
    let {id} = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        
        if(id === undefined){
            const itemsCollection = collection(db, 'Items');
            getDocs(itemsCollection)
            .then((snapshot) => {
                const array = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setItems(array);
            })
        }else{
            const q = query(collection(db, 'Items'), where("Categoria", "==", id));
            getDocs(q)
            .then((snapshot) => {
                const array = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setItems(array);
            })
        }
    },[id]);

    return (
        <div>
            {!items ? 
                'Cargando---' : 
                <ItemList items={items} key={items.id} />
            }
        </div>
    )
}

export default ItemListContainer;
