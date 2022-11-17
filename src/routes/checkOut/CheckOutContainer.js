import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';

import ItemCheckOut from './ItemCheckOut';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const defaultForm = { name: '', email: '', message: '' };

const CheckOutContainer = () => {
    const { cart } = useCartContext();
    const [id, setId] = useState();
    const [form, setForm] = useState(defaultForm);

    const changeHandler = (ev) => {
        setForm({ ...form, [ev.target.name]: ev.target.value });
    };

    const submitHandler = (ev) => {
        ev.preventDefault();
        const db = getFirestore();
        const contactFormCollection = collection(db, 'FormularioContacto');
        addDoc(contactFormCollection, form).then((snapshot) => {
            setId(snapshot.id);
        });
    };
    
    return(
        <div>
            <h2>CHECK OUT</h2>
            <div>
                {
                !cart ? 
                    (<div>Cargando...</div>) : 
                    (cart.map(item => <ItemCheckOut key={item.id} info={item} />))
                }
            </div>
            <div>
                {
                    id ? (
                        <div>
                            Gracias por realizar la compra, se ha guardado con id {id}
                        </div>
                    ) : (
                        <form onSubmit={submitHandler}>
                            <div>
                                <label htmlFor="name">Nombre</label>
                                <input
                                name="name"
                                id="name"
                                value={form.name}
                                onChange={changeHandler}
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                type="email"
                                name="email"
                                id="email"
                                value={form.email}
                                onChange={changeHandler}
                                />
                            </div>
                            <div>
                                <label htmlFor="message">Mensaje</label>
                                <textarea
                                name="message"
                                id="message"
                                value={form.message}
                                onChange={changeHandler}
                                ></textarea>
                            </div>
                            <button>Enviar</button>
                        </form>
                    )
                }
            </div>
        </div>
    )
}

export default CheckOutContainer;