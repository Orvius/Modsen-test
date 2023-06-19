import React from "react";
import "./BookPage.css";

const BookPage = (props) => {
  return (
    <main className="main">
      <div className="container">
      <div className="current-book__background">
          <div className="img-container">
            <img src="../../images/undefined_book.png" alt="book" />
          </div>
        </div>
        <div className="current-book__txt">
          <h2 className="current-book-category">Poetry / General</h2>
          <h2 className="current-book-title">Маленький принц. Том 1</h2>
          <h2 className="current-book-author">Антуан де Сент-Экзюпери</h2>
          <p className="current-book-about">
            Однажды на рассвете лётчика разбудил неизвестно откуда взявшийся
            маленький мальчик. Это был Маленький принц. — мальчик с бледным
            лицом и золотыми волосами, умеет путешествовать с планеты на
            планету, добрый, серьёзный, впечатлительный, любознательный,
            наивный. Лётчик привязался к Маленькому принцу.
          </p>
        </div>
      </div>
    </main>
  );
};

export default BookPage;
