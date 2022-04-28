export default function BookItem({ title, year, author }) {
  return (
    <div>
      <p> title: {title} </p>
      <p> date of publication: { year} </p>
      <li> author: {author.name} </li>
      <li> birthplace: {author.origin} </li>
    </div>
  );
}