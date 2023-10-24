<script>
  export let text = "Default Title";
  export let size = "medium";
  export let color = "";
  export let bold = false;
  export let ellipsed = false;

  const titleSizes = {
    small: "0.75rem",
    medium: "1.25rem",
    large: "4rem",
  };

  function getFontSize() {
    // @ts-ignore
    return titleSizes[size] || titleSizes.medium;
  }

  function getFontWeight() {
    return bold ? "bolder" : "bold";
  }

  function getTitleStyle() {
    return `font-weight: ${getFontWeight()}; font-family: Libre Baskerville, serif; font-size: ${getFontSize()}; color: ${
      color || "#232323"
    };`;
  }

  let titleClass = ellipsed ? "ellipsed" : "";
</script>

<div>
  <div style={getTitleStyle()} class={titleClass} id="title">
    {text}
  </div>
</div>
