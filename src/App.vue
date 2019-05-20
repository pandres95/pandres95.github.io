<template>
  <fragment>
    <navigation />
    <router-view/>
  </fragment>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
  components: {
    Navigation
  }
}
</script>

<style>
:root {
  --color-primary: #181818;
  --color-contrast: white;
  --color-secondary: #EE8434;
  --color-lapis-lazuli: #2274A5;
  --color-lapis-lazuli-25: rgba(34, 116, 165, 0.25);
  --color-black-coral: #4F5D75;
  --color-desire: #E14054;
  --color-desire-25: rgba(225, 64, 84, 0.25);

  --breakpoint-size-medium: 720px;
}

html {
  min-height: 100vh;
  height: 100%;
  font-size: 16px;
}

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Cormorant', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-primary);

  height: 100%;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Helvetica Neue LT Std', Helvetica, Arial, sans-serif;
}

fragment {
  display: grid;
  height: 100%;
}

/*
 * Primitive Elements: Headings
 */

h1 {
  font-weight: 500;
  font-size: 2em;
  line-height: calc(2em * 0.75);
}

h2 {
  font-weight: 400;
  font-size: 2em;
  line-height: 1.15em;
}

h1, h2 {
  text-align: center;
}

h3 {
  font-weight: 300;
  margin-top: 1.5em;
  line-height: 1.3em;
}

h4 {
  font-weight: 200;
  margin-top: 1.4em;
  margin-bottom: 1.2em;
}

p {
  font-size: 0.9em;
  line-height: calc(0.9em * 1.75);
}

p + *:not(p) {
  margin-top: 1.2em;
}

p + p {
  margin-top: 0.25em;
}
</style>
