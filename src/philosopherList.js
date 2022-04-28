import PhilosopherItem from './philosopherItem.js';


export default function PhilosopherList({ philosophers }) {
  return (
    <div>
      {philosophers.map((philosopher) => (<PhilosopherItem key= {philosopher.name} {...philosopher} />))}
    </div>
  );
}