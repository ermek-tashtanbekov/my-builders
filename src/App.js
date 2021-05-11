
import './App.css';
import DonutBuilder from './components/DonutBuilder/DonutBuilder';
import Layout from './components/Layout/Layout';


  const App = () =>{
    return (
      <div className="App">
       <Layout>
         <DonutBuilder/>
       </Layout>
      </div>
    );
  }
 


export default App;
