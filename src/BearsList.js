import BearItem from './BearItem';


export default function BearsList({ bears }) {
  return (
    <div>
      {bears.map ((bear) => <BearItem key={bear} bear={bear} />)}
    </div>
  );
}