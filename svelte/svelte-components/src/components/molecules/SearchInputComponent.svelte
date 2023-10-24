<script>
  // @ts-nocheck

  import { onMount } from "svelte";

  let value = "";
  let onChange = null;
  let inputValue = value;

  const inputRef = undefined;

  const handleInput = (event) => {
    const newValue = event.target.value;
    inputValue = newValue;

    if (onChange) {
      onChange(newValue);
    }
  };

  onMount(() => {
    if (inputRef) {
      inputRef.value = value;
    }
  });
</script>

<div class="searchInputContainer">
  <img
    src="/icons/search.svg"
    alt="Search icon"
    width="18px"
    height="17px"
    style="margin-left: .5rem"
  />
  <input
    type="text"
    class="searchInput"
    placeholder="Search a book by its name or author"
    bind:value={inputValue}
    on:input={handleInput}
  />
</div>
