import classes from "./OpenDrawer.module.css";

const OpenDrawer = ({click}) => {
    return ( 
        <div className={classes.OpenDrawer} onClick={click}>
            <div></div>
            <div></div>
            <div></div>
        </div>
     );
}
 
export default OpenDrawer;