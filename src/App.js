import Navigation from './components/layout/Navigation'
import Home from './components/pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navigation />
         <div className="content">
       <Home/>
      </div>
    </div>
  );
}

export default App;
