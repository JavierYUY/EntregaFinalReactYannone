import { useState } from 'react';
import './components/ItemCss.css';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const defaultForm = { name: '', email: '', message: '' };

const ItemCheckOut = ({info}) => {
    const [form, setForm] = useState(defaultForm);
    const [id, setId] = useState();

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
            <div className="Item" >
                <h2>{info.Titulo}</h2>
                <div>
                    <img src={info.Imagen} alt={info.Titulo} />
                </div>
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

export default ItemCheckOut;