export default function PhilosopherItem({ name, country, work }) {
  return (
    <div>
      <p> {name} </p>
      <p> {country} </p>
      {work.map((piece) => (<li key={piece}>{piece}</li>))}
    </div>
  );
}