
import './App.css';
import DonutBuilder from './components/DonutBuilder/DonutBuilder';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
     <Layout>
       <DonutBuilder/>
     </Layout>
    </div>
  );
}

export default App;
