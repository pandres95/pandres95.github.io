<template>
  <div class="home">
    <hero />
    <main>
      <section class="talks">
        <h2>Latest Talks</h2>

        <grid :columns="2">
          <card href="https://www.meetup.com/IbagueJS/events/260517787/"
            background="https://pbs.twimg.com/media/D5L-nFCX4AEbe48.jpg:large">
            <template #title>
              <h3>IbagueJS</h3>
            </template>
            <template #description>
              Hola mundo!
            </template>
          </card>
          <card></card>
        </grid>
      </section>
      <section class="projects">
        <h2>Projects I'm currently working on</h2>
        <grid :columns="3">
          <a href="https://poetri.co/">
            <img class="project"
              src="https://bool.js.org/img/users/poetri.png" />
          </a>
          <a href="https://bool.js.org/">
            <img class="project"
              src="https://bool.js.org/img/booljs.svg" />
          </a>
          <a href="https://truebots.co/">
            <img class="project"
              src="https://truebots.co/wp-content/uploads/2019/03/TrueBotr_Logo.png" />
          </a>
        </grid>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import Grid from '@/components/ui/Grid.vue'
import Card from '@/components/ui/Card.vue'

import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Hero,
    Grid,
    Card,
    Footer
  }
}
</script>

<style scoped>
h2 {
  line-height: 3em;
}

.talks h2, .projects h2 {
  color: var(--color-contrast);
}

main {
  box-sizing: border-box;
  text-align: start;
}

main section {
  padding: 3em;
}

.talks {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: calc(3em + 85px);
  padding-bottom: calc(4.5em + 85px);
  background-color: var(--color-black-coral);
}

.talks > .grid {
  width: 100%;
}

@media (min-width: 720px) {
  .talks > .grid {
    width: 75%;
  }
}

.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: calc(3em + 85px);
  padding-bottom: calc(4.5em + 85px);
  background-color: var(--color-lapis-lazuli);
}

.projects h2 {
  line-height: 1.2em;
  margin-bottom: 2em;
}

img.project {
  height: 4.5em;
}
</style>
