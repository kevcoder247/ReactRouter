import Header from './components/Header'
import Main from './components/Main'
import stockData from './components/stock-data'
import './App.css';
// import{withRouter} from 'react-router';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Main stocksData={stockData}/>
      
    </div>
  );
}

export default App;
