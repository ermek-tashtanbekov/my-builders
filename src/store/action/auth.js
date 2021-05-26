import { AUTH_SUCCESS, AUTH_FAIL, AUTH_START, AUTH_LOGOUT } from "./types";
import axios from "axios";

export const start = () => ({
  type: AUTH_START
});

export const success = ({ idToken, localId }) => ({
  type: AUTH_SUCCESS, id: localId, token: idToken
});

export const fail = (error) => ({
  type: AUTH_FAIL, error
});

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("id");
  localStorage.removeItem("expirationDate");

  return ({
    type: AUTH_LOGOUT
  });
}

export const restore = () => {
  return (dispatch) => {
    const idToken = localStorage.getItem("idToken");
    const localId = localStorage.getItem("localId");
  
    if (idToken && localId) {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate > new Date()) {
        dispatch(success({ idToken, localId }));
        dispatch(timeout((expirationDate.getTime() - new Date().getTime()) / 1000));
      }
      else {
        dispatch(logout());
      }
    }
    else {
      dispatch(logout());
    }
  }
}

export const timeout = (seconds) => {
  return (dispatch) => setTimeout(() => dispatch(logout()), seconds * 1000);
}

const key = "AIzaSyCgDsrAohOnvSmbytJy76Y3o0GXBFfblrA";
const signInUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + key;
const signUpUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + key;
export const auth = (method, email, password) => {
  return (dispatch) => axios
    .post(method === "signin" ? signInUrl : signUpUrl, { email, password, returnSecureToken: true })
    .then(({ data }) => {
      const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000);
      localStorage.setItem("expirationDate", expirationDate);
      localStorage.setItem("idToken", data.idToken);
      localStorage.setItem("localId", data.localId);

      dispatch(success(data));
      dispatch(timeout(+data.expiresIn));
    })
    .catch(error => dispatch(fail(error)));
}