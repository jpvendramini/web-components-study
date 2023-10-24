<template>
  <div class="searchInputContainer">
    <img
      src="/icons/search.svg"
      alt="Search icon"
      style="margin-left: 0.5rem; width: 18px; height: 17px;"
    />
    <input
      type="text"
      class="searchInput"
      placeholder="Search a book by its name or author"
      ref="inputRef"
      :value="inputValue"
      @input="handleInput"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    onChange: Function,
  },
  data() {
    return {
      inputValue: this.value || "",
    };
  },
  methods: {
    handleInput(event) {
      const newValue = event.target.value;
      this.inputValue = newValue;

      // Call the onChange function if it's provided
      if (this.onChange) {
        this.onChange(newValue);
      }
    },
  },
};
</script>

<style scoped>
/* Add your CSS styles here */
</style>
