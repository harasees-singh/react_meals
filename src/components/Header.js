import classes from './Header.module.css'
import Card from '../UI/Card'
const Header = () => {
    return (
        <Card className={classes.container}>
            we at react meals make sure that our food inspires 
            others to achieve their dreams. We believe in building a community of free thinkers
            who aren't afraid of thinking out of the box and want to bring new ideas to the table
            everyday. We respect where you came from and hope you never forget what went down
            to help you sit in peace today.
        </Card>
    )
}
export default Header