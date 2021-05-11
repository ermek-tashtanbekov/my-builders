import classes from "./Toolbar.module.css";
import Logo from "../Logo/Logo"
import Nav from "../Nav/Nav"
import OpenDrawer from "../Drower/OpenDrawer/OpenDrawer";

const Toolbar = ({openDrawer}) => {
    return (
        <div className={classes.Toolbar}>
            <Logo />
            <nav>
                <Nav />
            </nav>
 <OpenDrawer  click={openDrawer}/>
        </div>
    );
}

export default Toolbar;