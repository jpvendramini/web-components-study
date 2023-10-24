<template>
  <div class="sidebar">
    <LogoComponent :selected="!!bookInfo" />
    <TitleComponent text="Book Shelf" size="large" color="white" />
    <div
      v-if="bookInfo"
      style="
        width: 15rem;
        height: 13rem;
        text-align: left;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        overflow-y: scroll;
      "
    >
      <div class="bookDescription">
        <LabelComponent
          text="Title:"
          size="medium"
          color="white"
          :bold="true"
        />
        <LabelComponent :text="bookInfo.title" size="medium" color="white" />
      </div>
      <div class="bookDescription">
        <LabelComponent
          text="Subtitle:"
          size="medium"
          color="white"
          :bold="true"
        />
        <LabelComponent :text="bookInfo.subtitle" size="medium" color="white" />
      </div>
      <div class="bookDescription">
        <LabelComponent
          text="Authors:"
          size="medium"
          color="white"
          :bold="true"
        />
        <LabelComponent :text="bookInfo.authors" size="medium" color="white" />
      </div>
      <div class="bookDescription">
        <LabelComponent
          text="Description:"
          size="medium"
          color="white"
          :bold="true"
        />
        <LabelComponent
          :text="bookInfo.description"
          size="medium"
          color="white"
        />
      </div>
      <div class="bookDescription">
        <LabelComponent text="Year:" size="medium" color="white" :bold="true" />
        <LabelComponent :text="bookInfo.year" size="medium" color="white" />
      </div>
      <div>
        <LabelComponent
          text="Pages:"
          size="medium"
          color="white"
          :bold="true"
        />
        <LabelComponent :text="bookInfo.pages" size="medium" color="white" />
      </div>
    </div>
    <a v-if="bookInfo" class="button" :href="bookInfo.download" target="_blank"
      >Download</a
    >
    <div v-else>
      <LabelComponent
        text="(Select a book to see its specifications here!)"
        size="small"
        color="white"
      />
    </div>
  </div>
</template>

<script>
import LogoComponent from "../atoms/Logo.vue";
import TitleComponent from "../atoms/title.vue";
import LabelComponent from "../atoms/Label.vue";

export default {
  props: {
    bookInfo: Object,
  },
  components: {
    LogoComponent,
    TitleComponent,
    LabelComponent,
  },
};
</script>
