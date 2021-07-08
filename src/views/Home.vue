<template>
  <div class="home">
    <hero />
    <main>
      <section>
        <div class="column talks">
          <h2>Latest Talks</h2>
          <LatestTalks />
        </div>

        <div class="column projects">
          <h2>Projects I'm currently working on</h2>
          <grid :columns="3">
            <a target="_blank" rel="noopener noreferrer" href="https://gestpot.com/">
              <img alt="Spot" class="project"
                src="../assets/img/getspot.png" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://bool.js.org/">
              <img alt="BoolJS" class="project"
                src="https://bool.js.org/img/booljs.svg" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://podcastless.com/">
              <img alt="Podcastless" class="project"
                src="../assets/img/podcastless.svg" />
            </a>
          </grid>

          <h2>Projects I've previously worked with</h2>
          <grid :columns="4">
            <a target="_blank" rel="noopener noreferrer" href="https://pulsarml.com/">
              <img alt="Pulsar" class="project"
                src="../assets/img/pulsar.svg" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://theowly.io/">
              <img alt="Agent Owl" class="project"
                src="../assets/img/owl.svg" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://lastfood.co/">
              <img alt="LastFood" class="project"
                src="../assets/img/lastfood.svg" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://valiu.com/">
              <img alt="Valiu" class="project"
                src="../assets/img/valiu.svg" />
            </a>
          </grid>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import Grid from '@/components/ui/Grid.vue'
import LatestTalks from '@/components/LatestTalks.vue'

import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Hero,
    Grid,
    LatestTalks,
    Footer
  }
}
</script>

<style scoped>
h2 {
  line-height: 3em;
}

main {
  min-height: calc(100vh - 120px);
  box-sizing: border-box;
  text-align: start;
}

main > section {
  padding: 3em;
  background:
    linear-gradient(
      rgba(255, 255, 255, 0.95),
      rgba(255, 255, 255, 0.95)
    ),
    url('../assets/img/papernote.png');
  background-repeat: repeat;
  column-gap: 0.5em;
}

section .column {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: calc(1em + 85px);
}

.column .grid {
  width: 100%;
}

@media (min-width: 720px) {
  .column > .grid {
    width: 75%;
  }
}

.column h2 {
  font-size: 1.5em;
  line-height: 1.2em;
  margin-bottom: 0.75em;
}

.column > .grid ~ h2 {
  margin-top: 1em;
}

@media (min-width: 720px) {
  main section {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  section:not(:last-child) .column:not(:last-child) {
    padding-top: calc(3em + 85px);
    padding-bottom: calc(4.5em + 85px);
  }

  section:last-child .column, section:not(:last-child) .column:last-child {
    padding-bottom: 0;
  }
}

/**
 * Projects
 */

img.project {
  height: 4.5em;
}

.projects .grid {
  width: auto;
}
</style>
