import BookItem from './BookItem.js';

export default function BooksList({ books }) {
  return (
    <div>
      {books.map((book) => (<BookItem key={book.title} {...book} />)) }
    </div>
  );
}