<template>
  <div>
    <div
      :style="{
        fontWeight: bold ? 'bold' : '',
        fontFamily: 'Open Sans, sans-serif',
        fontSize: labelSizes[size] || labelSizes.medium,
        color: color || '#232323',
      }"
      :class="{ label: true, ellipsed: ellipsed }"
      :id="labelId"
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
      labelSizes: {
        small: "0.625rem",
        medium: "0.875rem",
        large: "4rem",
      },
    };
  },
  computed: {
    labelId() {
      return "label";
    },
  },
};
</script>

<style scoped>
.label {
  font-family: "Open Sans", sans-serif;
}

.ellipsed {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
