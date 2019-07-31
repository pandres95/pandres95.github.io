<template>
  <header>
    <div class="info">
      <picture class="profile">
        <source srcset="../assets/img/profile.webp" type="image/webp">
        <source srcset="../assets/img/profile.jpg" type="image/jpeg">
        <img alt="Pablo Andrés Dorado Suárez">
      </picture>
      <h1>Pablo Andrés Dorado Suárez</h1>
      <h2>Development Researcher</h2>
      <nav class="social">
        <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/pandres95">
          <font-awesome-icon :icon="['fab', 'facebook-square']" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/pandres95">
          <font-awesome-icon :icon="['fab', 'twitter-square']" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/pandres95">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/pandres95">
          <font-awesome-icon :icon="['fab', 'linkedin-in']" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/pandres95">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://gitlab.com/pandres95">
          <font-awesome-icon :icon="['fab', 'gitlab']" />
        </a>
      </nav>
    </div>
    <img @click="scrollToContent" class="scroll" src="../assets/img/btn-scroll_down.svg">
  </header>
</template>

<script>
import scrollTo from '@/helpers/scrollTo.js'

export default {
  methods: {
    scrollToContent () {
      scrollTo(window.innerHeight);
    }
  }
}
</script>

<style scoped>
header {
  display: grid;
  grid-template-rows: 87% 13%;
  height: 100vh;
  background:
    linear-gradient(
      rgba(20, 20, 20, 0.98),
      rgba(20, 20, 20, 0.92)
    ),
    url("../assets/img/background.png");
    background-repeat: repeat;
}

header * {
  color: var(--color-contrast);
}

.info {
  grid-row: 1 / 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-self: center;
}

img.scroll {
  grid-row: 2 / 2;
  align-self: center;
  justify-self: center;

  cursor: pointer;

  animation-name: scroll-mouse;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
}

@keyframes scroll-mouse {
  0% { transform: translateY(0px); }
  80% { transform: translateY(0px); }
  85% { transform: translateY(10px); }
  95% { transform: translateY(-10px); }
}

.profile img {
  height: 270px;
  width: 270px;
  border-radius: 50%;

  margin-bottom: 3em;
}

h1 {
  line-height: calc(2em * 0.75);
}

h2 {
  font-weight: 100;
}

.social {
  margin-top: 1.5em;
  font-size: 1.375em;
}

.social a:not(:first-child) {
  margin-inline-start: 0.75em;
}
</style>
