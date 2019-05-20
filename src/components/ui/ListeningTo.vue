<template>
  <a :href="url" target="_blank" rel="noopener noreferrer" class="music-player">
    <span class="controls" :class="playingClass" v-if="playing !== undefined">
      <font-awesome-icon icon="compact-disc" />
    </span>
    <div class="info">
      <p class="artist">{{ title }}</p>
      <p class="title">{{ artist }}</p>
    </div>
  </a>
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
    }, 15000);

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
    playingClass () {
      return this.playing
        ? 'playing'
        : 'paused';
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
  font-size: 1.4em;
  line-height: 1em;
  margin-inline-end: 0.6em;
}

@keyframes animation-playing {
  0% { transform: rotateZ(0deg); }
  25% { transform: rotateZ(90deg); }
  50% { transform: rotateZ(180deg); }
  75% { transform: rotateZ(270deg); }
  99% { transform: rotateZ(359deg); }
}

.controls.playing svg {

  transform: rotate(360deg);
  animation-name: animation-playing;
  animation-iteration-count: infinite;
  animation-duration: 0.9s;
  animation-timing-function: linear;
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
