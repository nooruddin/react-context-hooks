import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.textColor }}
    >
      <ul>
        {books.map(book => (
          <li key={book.id} style={{ background: theme.ui }}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;

// export default class BookList extends React.Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
//       <div
//         className="book-list"
//         style={{ background: theme.bg, color: theme.textColor }}
//       >
//         <ul>
//           <li style={{ background: theme.ui }}>Book One</li>
//           <li style={{ background: theme.ui }}>Book Two</li>
//           <li style={{ background: theme.ui }}>Book Three</li>
//         </ul>
//       </div>
//     );
//   }
// }
