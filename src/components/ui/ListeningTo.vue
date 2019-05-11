<template>
  <section class="music-player">
    <span class="controls" v-if="playing !== undefined">
      <font-awesome-icon :icon="controlIcon" />
    </span>
    <div class="info">
      <p class="artist">{{ artist }}</p>
      <p class="title">{{ title }}</p>
    </div>
  </section>
</template>

<script>
import { setInterval } from 'timers';
export default {
  data () {
    return {
      artist: undefined,
      title: undefined
    };
  },
  mounted () {
    setInterval(() => {
      this.refresh();
    }, 30000);

    this.refresh();
  },
  methods: {
    async refresh () {
      const response = await fetch('/api/lastfm/latest');
      const { data } = await response.json();

      Object.assign(this, data);
    }
  },
  computed: {
    controlIcon () {
      return this.playing
        ? 'play'
        : 'pause';
    }
  }
}
</script>

<style scoped>
p {
  text-align: left;
}

.music-player {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.controls {
  margin-inline-end: 1em;
}

.info {
  width: 90%;
}

.info .artist {
  font-size: 0.75em;
}

.info .title {
  font-size: 0.55em;
}
</style>
