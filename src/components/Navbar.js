import classes from './Navbar.module.css'
import Cart from './Cart';
const Navbar = () => {
    return(
        <div className={classes.container}>
            <label className={classes.label}>ReactMeals</label>
            <Cart />
        </div>
    )
}
export default Navbar;