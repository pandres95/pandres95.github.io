<template>
  <div class="card">
    <img class="background" :src="background" alt="Card">
    <div class="headings">
      <a :href="href" class="headings-title">
        <slot name="title"></slot>
      </a>
      <div class="headings-description">
        <slot name="description"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default () { return '#'; }
    },
    background: {
      type: String
    }
  }
}
</script>

<style scoped>
h1, h2, h3, h4, h5, h6 {
  font-weight: 500;
  font-size: 120%;
  line-height: 130%;
  margin: 0 0 0.5em 0;
}

.card {
  display: inline-grid;
  grid-gap: 0.5em;
  grid-template-rows: auto auto;
  grid-template-areas: "image" "headings";

  width: 100%;
}

.card:not(:last-child) {
  margin-block-end: 1.5em;
}

.card a {
  text-decoration: none;
  color: var(--color-primary);
}

.background {
  display: inline-block;
  width: 100%;
  grid-area: image;
}

.headings {
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  width: 100%;
  grid-area: headings;
}

@media (min-width: 480px) {
  .card {
    grid-template-columns: 40% 60%;
    grid-template-areas: "image headings";
  }

  .card:not(:last-child) {
    margin-block-end: 1.1em;
  }
}

@media (min-width: 1024px) {
  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
    font-size: 140%;
    line-height: 110%;
    margin: 0 0 0.5em 0;
  }
}
</style>
