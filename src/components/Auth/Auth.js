// import React, { useState } from "react";
// import axios from "../../axios";
// import { start, auth } from "../../store/actions/auth";
// import withAxios from "../withAxios";
// import classes from "./Auth.module.css";
// import Button from "../UI/Button/Button";
// import { useDispatch, useSelector } from "react-redux";
// import { Redirect, useLocation } from "react-router-dom";

import classes from "./Auth.module.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button/Button";
import { auth, start } from "../../store/action/auth";
import withAxios from "../withAxios";
import { Redirect, useLocation } from "react-router";
import axios from "axios";
import Loading from "../../Loading/Loading";

export default withAxios(() => {
  const dispatch = useDispatch();
  const { loading, error, token } = useSelector(state => state.auth);
  const location = useLocation();

  const formSubmitted = (event) => {
    start(dispatch);

    const data = new FormData(event.target);
    const method = event.nativeEvent.submitter.innerText === "Sign in"
      ? "signin" : "signup";
    auth(dispatch, method, data.get('email'), data.get('password'));

    event.preventDefault();
  }

  let formOutput = <Loading />;
  if (!loading) {
    formOutput = (
      <form onSubmit={formSubmitted} className={classes.form}>
        <h1 className={classes.h1}>Welcome</h1>
        <input type="email" placeholder="E-mail" name="email" required />
        <input type="password" placeholder="Password" name="password" required minLength="6" />
        <div className={classes.Button}>
          <Button green>Sign in</Button>
          <Button>Sign up</Button>
        </div>

      </form>
    );
  }

  let errorOutput = null;
  if (error) {
    errorOutput = <h4 className={classes.error}>{error.message}</h4>;
  }

  const [, redirect] = location.search.split('?');
  let redirectOutput = null;
  if (token !== null) {
    redirectOutput = <Redirect to={"/" + redirect ? redirect : ""} />;
  }

  return (
    <div className={classes.Auth}>
      {errorOutput}
      {formOutput}
      {redirectOutput}
    </div>
  );
}, axios);


















//   const formSubmitted = (event) => {
//     start(dispatch);

//     const data = new FormData(event.target);
//     auth(dispatch, method, data.get('email'), data.get('password'));

//     event.preventDefault();
//   }

//   let formOutput = <Loading/>;
//   if (!loading) {
//     formOutput = (
//       <form onSubmit={formSubmitted} className={classes.form}>
//         <h1>Welcome</h1>
//         <input type="email" placeholder="E-mail" name="email" required  className={classes.inputone}/>
//         <input type="password" placeholder="Password" name="password" required minLength="6" />
//         <div className={classes.Button}>
//         <Button click={() => setMethod('signin')} green>Sign in</Button>
//         <Button click={() => setMethod('signup')} red>Sign up</Button>
//         </div>

//       </form>
//     );
//   }

//   let errorOutput = null;
//   if (error) {
//     errorOutput = <h4 className={classes.error}>{error.message}</h4>;
//   }

//   const [,redirect] = location.search.split('?');
//   let redirectOutput = null;
//   if (token !== null) {
//     redirectOutput = <Redirect to={"/" + redirect ? redirect : ""} />;
//   }

//   return (
//     <div className={classes.Auth}>
//       {errorOutput}
//       {formOutput}
//       {redirectOutput}
//     </div>
//   );
// }, axios);