import logo from './logo.svg';
import './App.css';
import BearsList from './BearsList.js';
import { bears } from './bears-data.js';
// import your arrays here

function App() {
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <BearsList bears = {bears} />
    </div>
  );
}

export default App;
