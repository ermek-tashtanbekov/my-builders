import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/action/auth";




export default function Logout({ history }) {
  const dispatch = useDispatch();

  useEffect(() => {
    logout(dispatch);
    history.replace("/");
  }, [dispatch, history]);

  return null;
}