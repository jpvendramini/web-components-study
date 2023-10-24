<template>
  <div class="bookItem" @click="handleClick">
    <img :src="imagePath" style="width: 119px;height: 160px;" />
    <div class="bookItemTextContainer">
      <TitleComponent
        :text="title || 'Default Title'"
        size="small"
        :bold="true"
        :ellipsed="true"
      />
      <LabelComponent
        :text="label || 'Default Label'"
        size="small"
        :bold="true"
        :ellipsed="true"
        :color="'#7E7E7E'"
      />
    </div>
  </div>
</template>

<script>
import TitleComponent from '../atoms/title.vue';
import LabelComponent from '../atoms/Label.vue';
export default {
  props: {
    title: String,
    label: String,
    path: String,
    onClick: Function,
  },
  computed: {
    imagePath() {
      return this.path || "https://www.dbooks.org/img/books/5635349929s.jpg";
    },
  },
  methods: {
    handleClick() {
      if (this.onClick) {
        this.onClick();
      }
    },
  },
  components:{
    TitleComponent,
    LabelComponent
  }
};
</script>
