<script>
    export let text = "Default Title";
    export let size = "medium";
    export let color = "";
    export let bold = false;
    export let ellipsed = false;
  
    const labelSizes = {
      small: "0.625rem",
      medium: "0.875rem",
      large: "4rem",
    };
  
    function getFontSize() {
      // @ts-ignore
      return labelSizes[size] || labelSizes.medium;
    }
  
    function getFontWeight() {
      return bold ? "bold" : "normal";
    }
  
    function getLabelStyle() {
      return `font-weight: ${getFontWeight()}; font-family: 'Open Sans', sans-serif; font-size: ${getFontSize()}; color: ${color || "#232323"};`;
    }
  
    let labelClass = ellipsed ? "label ellipsed" : "label";
  
  </script>
  
  <div>
    <div style={getLabelStyle()} class={labelClass} id="label">
      {text}
    </div>
  </div>
  