import BeachItem from './BeachItem';

export default function BeachesList({ beaches }) {
  return (
    <div>
      {beaches.map((beach) => (
        <BeachItem key={beach} {...beach} />
      ))}
    </div>
  );
}
