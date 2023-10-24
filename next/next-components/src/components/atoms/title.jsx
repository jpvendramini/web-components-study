import React from "react";

const titleSizes = {
  small: "0.75rem",
  medium: "1.25rem",
  large: "4rem",
};

const TitleComponent = ({
  text = "Default Title",
  size = "medium",
  color = "",
  bold = false,
  ellipsed = false,
}) => {
  return (
    <div>
      <div
        style={{
          fontWeight: `${bold ? "bolder" : "bold"}`,
          fontFamily: "Libre Baskerville, serif",
          fontSize: `${titleSizes[size] || titleSizes.medium}`,
          color: `${color || "#232323"}`,
        }}
        className={`${ellipsed && "ellipsed"}`}
        id="title"
      >
        {text}
      </div>
    </div>
  );
};

export default TitleComponent;
