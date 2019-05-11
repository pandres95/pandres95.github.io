<template>
  <nav :class="navClass">
    <div class="info">
      <img class="profile" alt="Pablo Andrés Dorado Suárez" src="../assets/img/sign.svg">
    </div>
    <ListeningTo />
    <div class="links">
      <router-link to="/">Home</router-link>
      <span>|</span>
      <a href="/blog">Blog</a>
    </div>
  </nav>
</template>

<script>
import ListeningTo from '@/components/ui/ListeningTo.vue'

export default {
  components: {
    ListeningTo
  },
  data () {
    return {
      scrollPosition: null
    };
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll);
  },
  destroy () {
    window.removeEventListener('scroll', this.updateScroll);
  },
  methods: {
    updateScroll () {
      this.scrollPosition = window.scrollY;
    }
  },
  computed: {
    navClass () {
      return [
        this.scrollPosition >= window.innerHeight * 0.12
          ? 'floating'
          : '',
        this.scrollPosition >= window.innerHeight * 0.87
          ? 'full-floating'
          : ''
      ].filter(x => x !== '').join(' ');
    }
  }
};
</script>

<style scoped>
nav {
  position: fixed;
  display: grid;
  grid-template-columns: max-content auto max-content max-content;
  grid-column-gap: 1.15em;
  box-sizing: border-box;

  padding: 30px;
  width: 100%;
}

span {
  color: var(--color-contrast);
}

.full-floating {
  background:
    linear-gradient(rgba(24, 24, 24, 0.78), rgba(24, 24, 24, 0.78)),
    url("../assets/img/background.png"),
    linear-gradient(rgba(24, 24, 24, 1), rgba(24, 24, 24, 1));
  background-blend-mode: hard-light;
  background-size: cover;
}

.info {
  display: none;
}

.full-floating .info {
  display: flex;
  flex-direction: row;

  align-items: center;
  grid-column: 1 / 1;
}

.info > *:not(:last-child) {
  margin-inline-end: 1em;
}

.info img {
  height: 25px;
}

.info .headings {
  text-align: left;
}

.info .headings h1 {
  font-size: 1em;
  font-weight: 300;
}

.info .headings h2 {
  font-size: 0.8em;
  font-weight: 100;
}

/**
  * Music player
  */

.music-player {
  display: none;
}

@media (min-width: 720px) {
  .full-floating .music-player {
    display: inline-flex;
    color: var(--color-contrast);
    grid-column: 3 / 3;
  }
}

/**
  * Navigation links
  */

.links {
  align-self: center;
  justify-self: flex-end;
  grid-column: 4 / 4;
}

.links *:not(:last-child) {
  margin-inline-end: 0.4em;
}

a {
  font-weight: 200;
  color: #dddbdb;
  text-decoration: none;
}

a.router-link-exact-active {
  color: #42b983;
}

@media (max-width: 720px) {
  .floating {
    background: linear-gradient(rgba(24, 24, 24, 0.7), rgba(24, 24, 24, 0.7)),
      url("../assets/img/background.jpg");
    background-blend-mode: hard-light;
    background-size: cover;
  }

  .info .headings h1 {
    font-size: 0.80em;
    font-weight: 300;
  }

  .info .headings h2 {
    font-size: 0.70em;
    font-weight: 100;
  }
}
</style>
