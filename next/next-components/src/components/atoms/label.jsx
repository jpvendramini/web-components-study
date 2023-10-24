import React from "react";

const labelSizes = {
  small: "0.625rem",
  medium: "0.875rem",
  large: "4rem",
};

const LabelComponent = ({
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
          fontWeight: `${bold ? "bold" : ""}`,
          fontFamily: "'Open Sans', sans-serif",
          fontSize: `${labelSizes[size] || labelSizes.medium}`,
          color: `${color || "#232323"}`,
        }}
        className={`label ${ellipsed && "ellipsed"}`}
        id="label"
      >
        {text}
      </div>
    </div>
  );
};

export default LabelComponent;
