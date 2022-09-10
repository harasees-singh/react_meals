import classes from './List.module.css'
import Card from '../UI/Card';
import Item from './Item';
import AuthContext from '../store/auth-context';
import { useContext } from 'react';
const List = () => {
    const ctx = useContext(AuthContext);
    // console.log(ctx);
    // console.log(ctx.itemCount);
    return (
        <Card className={classes.container}>
            {ctx.itemList.map( (item, index) => {
                return <Item item={item} key={index} />
            })}
        </Card>
    )
}
export default List;