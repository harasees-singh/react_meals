import classes from './Modal.module.css'
import Card from './Card';
import AuthContext from '../store/auth-context';
import { useContext, useEffect } from 'react'
import Item from '../components/Item';
const Modal = ({ setDisplay }) => {
    const ctx = useContext(AuthContext)
    const { itemCount } = ctx;

    useEffect(() => {
        if(itemCount === 0) setDisplay(false);
    }, [itemCount])

    return (
        <>
            <div
                onClick={() => { setDisplay(false) }}
                className={classes.backdrop}
            >
            </div>
            <div className={classes.container}>
                <header>Cart</header>
                {ctx.itemList.map((item, index) => {
                    return (
                        item.quantity > 0 && <Item item={item} key={Math.random().toString()} />
                    )
                })}
                <footer>
                    <button onClick={() => { setDisplay(false) }} className={classes.button}>
                        Cancel
                    </button>
                    <button className={classes.button}>
                        Order
                    </button>
                </footer>
            </div>
        </>
    )
}
export default Modal;