import { NavLink } from "react-router-dom";
import classes from "./NavItem.module.css"

const NavItem = ({url, children , active}) => {
    return ( 
        <li className={classes.NavItem}>
            {/* <a href={url} className={active ? classes.active : null}>{children}</a> */}
            <NavLink to={url} activeClassName={classes.active} exact>{children}</NavLink>
        </li>
     );
}
 
export default NavItem;