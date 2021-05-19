
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Auth from './components/Auth/Auth';
import Checkout from './components/Checkout/Checkout';
import DonutBuilder from './components/DonutBuilder/DonutBuilder';
import Layout from './components/Layout/Layout';
import Logout from './components/Logout/Logout';
import Orders from './components/Orders/Orders';
import { restore } from './store/action/auth';




  const App = () =>{
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.token !== null);
  
    useEffect(() => restore(dispatch), [dispatch]);
  
    let routesOutput = (
      <Switch>
        <Route path="/" exact component={DonutBuilder} />
        <Route path="/auth" component={Auth} />
        <Redirect to="/" />
      </Switch>
    );

    if (isAuthenticated) {
      routesOutput = (
        <Switch>
          <Route path="/" exact component={DonutBuilder} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/auth" component={Auth} />
          <Route path="/logout" component={Logout} />
          <Redirect to="/" />
        </Switch>
      );
    }
    return (
      <div className="App">
       <Layout>
       {routesOutput}
       </Layout>
      </div>
    );
  }
 


export default App;















// import { Redirect, Route, Switch } from 'react-router';
// import './App.css';
// import Auth from './components/Auth/Auth';
// import Checkout from './components/Checkout/Checkout';
// import DonutBuilder from './components/DonutBuilder/DonutBuilder';
// import Layout from './components/Layout/Layout';
// import Logout from './components/Logout/Logout';
// import Orders from './components/Orders/Orders';
// import Loading from './Loading/Loading';



//   const App = () =>{
//     return (
//       <div className="App">
//        <Layout>
//          {/* <DonutBuilder/> */}
//          <Switch>
//            <Route path="/" component={DonutBuilder} exact/>
//            <Route path="/checkout" component={Checkout}/>
//            <Route path="/orders" component={Orders}/>
//            <Route path="/auth" component={Auth} />
//            <Route path="/logout" component={Logout} />
//            <Route path="/s" component={Loading}/>
//            <Redirect to="/"/>
//          </Switch>
//        </Layout>
//       </div>
//     );
//   }
 


// export default App;
