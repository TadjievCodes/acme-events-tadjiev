import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/layout/Navigation'
import Home from './components/pages/Home'
import './scss/main.scss';

 

function App() {
  return (
    <div className="App">
      <Navigation />
         <div className="contentArea">
       <Home/>
      </div>
    </div>
  );
}

export default App;
