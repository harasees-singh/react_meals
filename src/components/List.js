import classes from './List.module.css'
import Card from '../UI/Card';
import Item from './Item';
import AuthContext from '../store/auth-context';
import { useContext, useEffect } from 'react';
import useHttp from '../hooks/use-http';
// import makeOrderObject from '../utils/makeOrderObject';
const List = () => {
    const ctx = useContext(AuthContext);

    const [isLoading, error, orderHandler] = useHttp('GET', 'https://react-a83be-default-rtdb.firebaseio.com/Items.json', ctx.setItemList);
    
    useEffect(() => {
        orderHandler({});
    }, [])

    return (
        <Card className={classes.container}>
            {isLoading ? <p>Loading...</p> : ctx.itemList.map((item, index) => {
                return <Item item={item} key={index} />
            })}
        </Card>
    )
}
export default List;