import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";

const Modal = ({ show, cancel, children }) => {
    return (
      <div className={classes.Modal}>
        <Backdrop show={show} click={cancel}  />
        <div className={classes.content}>
          {children}
        </div>
      </div>
    );
  }
  
  export default Modal