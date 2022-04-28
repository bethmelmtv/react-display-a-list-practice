// import logo from './logo.svg';
import './App.css';
import BearsList from './BearsList.js';
import { bears } from './bears-data.js';
import { beaches } from './beaches-data.js';
import BeachesList from './BeachesList.js';
import { books } from './books-data.js'; 
import BooksList from './BooksList';
import { philosophers } from './philosopher-data.js';
import PhilosopherList from './philosopherList.js';
// import your arrays here

function App() {
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <BearsList bears = {bears} />
      <BeachesList beaches = { beaches } />
      <BooksList books = { books } />
      <PhilosopherList philosophers = { philosophers } />
    </div>
  );
}

export default App;
