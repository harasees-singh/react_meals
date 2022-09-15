import classes from './Cart.module.css'
import Modal from '../UI/Modal';
import { useState, useContext, useEffect } from 'react'
import AuthContext from '../store/auth-context';

// import './SignUpForm.css'
const Cart = () => {


    const ctx = useContext(AuthContext);
    const { itemCount } = ctx;
    const [display, setDisplay] = useState(false);
    const handleClick = () => {
        let ok = false;
        ctx.itemList.forEach((item) => { ok = ok || item.quantity })
        setDisplay(ok);
    }

    return (
        <>
            <div onClick={handleClick} className={`${classes.container} ${ctx.itemCount && classes.active}`}>
                <div>Cart</div>
                <label>{ctx.itemCount}</label>
            </div>
            {display ? <Modal setDisplay={setDisplay} /> : <></>}
        </>
    )
}
export default Cart;