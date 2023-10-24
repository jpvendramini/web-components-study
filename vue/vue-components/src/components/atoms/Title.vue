<template>
  <div>
    <div
      :style="{
        fontWeight: bold ? 'bolder' : 'bold',
        fontFamily: 'Libre Baskerville, serif',
        fontSize: titleSizes[size] || titleSizes.medium,
        color: color || '#232323',
      }"
      :class="{ title: true, ellipsed: ellipsed }"
      :id="titleId"
    >
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Default Title",
    },
    size: {
      type: String,
      default: "medium",
    },
    color: {
      type: String,
      default: "",
    },
    bold: {
      type: Boolean,
      default: false,
    },
    ellipsed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      titleSizes: {
        small: "0.75rem",
        medium: "1.25rem",
        large: "4rem",
      },
    };
  },
  computed: {
    titleId() {
      return "title";
    },
  },
};
</script>

<style scoped>
.title {
  font-family: "Libre Baskerville, serif";
}

.ellipsed {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
