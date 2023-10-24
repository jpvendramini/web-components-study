<template>
  <img
    :src="imgPath"
    alt="Logo icon"
    style="width: 43.224px; height: 69.333px"
  />
</template>

<script>
export default {
  props: {
    selected: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    imgPath() {
      return this.selected
        ? "/icons/bookshelf-selected-logo.svg"
        : "/icons/bookshelf-unselected-logo.svg";
    },
  },
};
</script>
