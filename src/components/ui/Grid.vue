<template>
  <section :class="`grid columns-${columns}`">
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    columns: {
      type: Number,
      value: 3
    }
  }
}
</script>

<style scoped>
.grid {
  display: grid;
  justify-items: center;
  column-gap: 1em;
  row-gap: 1.15em;

  padding: 0;
}

@media (min-width: 420px) {
  .grid.columns-2 {
    column-count: 2;
    grid-template-columns: repeat(2, 1fr);
  }

  .grid.columns-3 {
    column-count: 3;
    grid-template-columns: repeat(3, 1fr);
  }

  .grid.columns-4 {
    column-count: 4;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
