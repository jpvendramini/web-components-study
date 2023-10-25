<script>
  import TitleComponent from "../atoms/TitleComponent.svelte";
  import LabelComponent from "../atoms/LabelComponent.svelte";

  export let title = "Default Title";
  export let label = "Default Label";
  export let path = "https://www.dbooks.org/img/books/5635349929s.jpg";
  export let onClick = () => {};

  function handleClick() {
    if (onClick) {
      onClick();
    }
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="bookItem" on:click={onClick}>
  <img src={path} alt="Book cover" width="119px" height="160px" />
  <div class="bookItemTextContainer">
    <TitleComponent text={title} size="small" bold ellipsed />
    <LabelComponent text={label} size="small" bold ellipsed color="#7E7E7E" />
  </div>
</div>
