import classes from './Item.module.css'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'
import AuthContext from '../store/auth-context'
import React, { useContext, useCallback } from 'react'
const Item = ({ item }) => {
    const ctx = useContext(AuthContext);
    const Increase = () => {
        ctx.setItemList( (prevState) => {
            // item id
            const NewList = prevState.map( (itemfromList) => {
                return {
                    ...itemfromList,
                    quantity: item.id === itemfromList.id ? itemfromList.quantity + 1 : itemfromList.quantity
                }
            })
            return NewList;
        })
        ctx.setItemCount( (prevState) => prevState + 1);
    }
    const Decrease = useCallback(() => {
        ctx.setItemList( (prevState) => {
            const newList = prevState.map( (itemfromList) => {
                if(item.id === itemfromList.id && itemfromList.quantity >= 1) ctx.setItemCount( (prevState) => prevState - 1);
                return {
                    ...itemfromList,
                    quantity: item.id === itemfromList.id && itemfromList.quantity >= 1 ? itemfromList.quantity - 1 : itemfromList.quantity
                }
            })
            return newList;
        })
    }, [])
    // useCallback is to store functions that won't change, so that can be reused in case of re-rendering a component
    // useMemo is a similar hook to store objects like lists and so on that need not be re evaluated each time a component is re-rendered
    return (
        <div id={item.id} className={classes.container}>
            <div>
                <div>{item.name}</div>
                <div className={classes.price}>{item.price}</div>
            </div>
            <div className={classes.quantity}>
                <div className={classes.numeric}>x{item.quantity}</div>
                <div className={classes.arrows}>
                    <button className={classes.arrow} onClick={Increase}><AiOutlinePlus /></button>
                    <button className={classes.arrow} onClick={Decrease}><AiOutlineMinus /></button>
                </div>
            </div>
        </div>
    )
}
export default React.memo(Item);
// React.memo() tells react to revaluate Item component if the props passed to it change
// helps avoid useless computation each time Item's parents re render.