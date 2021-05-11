
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Checkout from './components/Checkout/Checkout';
import DonutBuilder from './components/DonutBuilder/DonutBuilder';
import Layout from './components/Layout/Layout';


  const App = () =>{
    return (
      <div className="App">
       <Layout>
         <DonutBuilder/>
         <Switch>
           <Route path="/" component={DonutBuilder}/>
           <Route path="/checkout" component={Checkout}/>
           <Redirect to="/"/>
         </Switch>
       </Layout>
      </div>
    );
  }
 


export default App;
