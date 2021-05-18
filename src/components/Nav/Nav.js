import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";

const Nav = () => {
  return (
   
      <ul className={classes.Nav}>
        <NavItem url="/" exact>Builder</NavItem>
        <NavItem url="/orders">Orders</NavItem>
        <NavItem url="/s">Spiner</NavItem>
      </ul>
   
  );
}

export default Nav;