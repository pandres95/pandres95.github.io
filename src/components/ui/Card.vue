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
.card {
  display: inline-grid;
  grid-template-columns: 40% 60%;

  width: 100%;
  height: 25vmin;
}

.card a {
  text-decoration: none;
  color: var(--color-primary);
}

.background {
  display: inline-block;
  width: 100%;
}

.headings {
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  width: 100%;
  padding: 0% 0% 1% 5%;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 500;
  font-size: 140%;
  margin: 0 0 0.5em 0;
}
</style>
