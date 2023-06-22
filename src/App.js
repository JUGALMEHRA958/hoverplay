import logo from './logo.svg';
import './App.css';
import Dropdown from './components/Dropdown';

function App() {

  return (
    <div className="App">
<Dropdown items={['Yes', 'Maybe', 'Probably not']} />
    </div>
  );
}

export default App;
