import classes from "./Drawer.module.css";
import Logo from "../Logo/Logo"
import Nav from "../Nav/Nav"
import Backdrop from "../UI/Backdrop/Backdrop";

const Drawer = () => {
    return (
        <div className={classes.Drawer}>
            <Backdrop/>
            <div className={classes.content}>
                <Logo />
                <Nav />
            </div>
        </div>
    );
}

export default Drawer
    ;