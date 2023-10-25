<script>
  // @ts-nocheck

  import LogoComponent from "../atoms/LogoComponent.svelte";
  import TitleComponent from "../atoms/TitleComponent.svelte";
  import LabelComponent from "../atoms/LabelComponent.svelte";

  export let bookInfo = "";
</script>

<div class="sidebar">
  <LogoComponent selected={!!bookInfo} />
  <TitleComponent text="Book Shelf" size="large" color="white" />
  {#if bookInfo}
    <div
      style="width: 15rem; height: 13rem; text-align: left; display: flex; flex-direction: column; gap: 1rem; overflow-y: scroll;"
    >
      <div class="bookDescription">
        <LabelComponent text="Title:" size="medium" color="white" bold />
        <LabelComponent text={bookInfo.title} size="medium" color="white" />
      </div>
      <div class="bookDescription">
        <LabelComponent text="Subtitle:" size="medium" color="white" bold />
        <LabelComponent text={bookInfo.subtitle} size="medium" color="white" />
      </div>
      <div class="bookDescription">
        <LabelComponent text="Authors:" size="medium" color="white" bold />
        <LabelComponent text={bookInfo.authors} size="medium" color="white" />
      </div>
      <div class="bookDescription">
        <LabelComponent text="Description:" size="medium" color="white" bold />
        <LabelComponent
          text={bookInfo.description}
          size="medium"
          color="white"
        />
      </div>
      <div>
        <LabelComponent text="Year:" size="medium" color="white" bold />
        <LabelComponent text={bookInfo.year} size="medium" color="white" />
      </div>
      <div>
        <LabelComponent text="Pages:" size="medium" color="white" bold />
        <LabelComponent text={bookInfo.pages} size="medium" color="white" />
      </div>
    </div>
    <a class="button" href={bookInfo.download} target="_blank">Download</a>
  {:else}
    <LabelComponent
      text="(Select a book to see its specifications here!)"
      size="small"
      color="white"
    />
  {/if}
</div>
