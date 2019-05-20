<template>
  <footer>
    <p class="copy">&copy; {{ new Date().getFullYear() }} Pablo Andrés Dorado Suárez</p>
    <p class="host">
      <span>Proudly hosted by</span>
      <img class="host-logo" src="../assets/img/host.svg">
    </p>
  </footer>
</template>

<style scoped>
/**
 * Footer
 */
p {
  font-family: 'Helvetica Neue LT Std', Helvetica, Arial, sans-serif;
  font-weight: 200;
}

footer {
  justify-content: center;
  text-align: center;

  display: grid;
  column-count: 1;

  background-color: var(--color-primary);
  color: var(--color-contrast);
  padding: 3em;
}

footer .copy {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

footer .host {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.host-logo {
  height: 1.5em;
  transform: translateY(calc(-0.175em));
}

footer .host span {
  line-height: 1.5em;
  margin-inline-end: 0.32em;
}

@media(min-width: 720px) {
  footer {
    justify-content: flex-start;
    text-align: left;
    grid-template-columns: auto 1fr auto;
  }

  footer .host {
    grid-column: 3 / 3;
  }
}
</style>
