import React from "react";
import TitleComponent from "../atoms/title";
import LabelComponent from "../atoms/label";

const BookItemComponent = ({ title, label, path, onClick }) => {
  return (
    <div className="bookItem" onClick={onClick}>
      <img src={path || "https://www.dbooks.org/img/books/5635349929s.jpg"} width="119px" height="160px" />
      <div className="bookItemTextContainer">
        <TitleComponent text={title || "Default Title"} size="small" bold ellipsed />
        <LabelComponent text={label || "Default Label"} size="small" bold ellipsed color="#7E7E7E" />
      </div>
    </div>
  );
};

export default BookItemComponent;
