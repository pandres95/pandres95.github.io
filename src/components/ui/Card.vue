<template>
  <a :href="href" :style="bgStyle" class="card">
    <div class="headings">
      <div class="headings-description">
        <slot name="description"></slot>
      </div>
      <div class="headings-title">
        <slot name="title"></slot>
      </div>
    </div>
  </a>
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
  },
  watch: {
    background: {
      immediate: true,
      handler (value) {
        this.bgStyle = value !== undefined
          ? `background-image: linear-gradient(var(--color-desire-25), var(--color-desire-25)), url(${value})`
          : '';
      }
    }
  }
}
</script>

<style scoped>
.card {
  width: 100%;
  height: 25vh;
  background-color: var(--color-indigo);
  color: var(--color-contrast);

  text-decoration: none;
}

.card {
  background-image:
    linear-gradient(
      var(--color-desire-25),
      var(--color-desire-25)
    ),
    url('../../assets/img/background.jpg');
  background-size: cover;
}

.headings {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;

  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 10% 5% 1% 15%;
}

@keyframes headings-hover-background {
  0% { background-color: rgba(0, 0, 0, 0); }
  100% { background-color: rgba(0, 0, 0, 0.78); }
}

.headings:hover {
  animation-name: headings-hover-background;
  animation-duration: 0.4s;
  background-color: rgba(0, 0, 0, 0.78);
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 500;
  font-size: 140%;
  margin: 0.5em 0 0.5em 0;
  color: var(--color-contrast);
}

.headings-description {
  display: none;
}

@keyframes headings-description-hover {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.headings:hover .headings-description {
  display: inline-flex;
  animation-name: headings-description-hover;
  animation-duration: 1s;
}
</style>
