<template>
  <div class="list">
    <card v-for="post in posts" v-bind:key="post.id"
      :href="post.url" :background="post['feature_image']">
      <template #title>
        <h3>{{ post.title }}</h3>
      </template>
      <template #description>
        <p v-html="renderDescription(post['custom_excerpt'])"></p>
      </template>
    </card>
  </div>
</template>

<script>
import Card from '@/components/ui/Card.vue'

export default {
  data () {
    return {
      posts: []
    };
  },
  components: {
    Card
  },
  mounted () {
    this.fetchTalks();
  },
  methods: {
    async fetchTalks () {
      console.log('#fetchTalks');

      const uri = new URL('/blog/ghost/api/v2/content/posts', document.baseURI);
      uri.searchParams.append('key', '624142b2a43a89a02603ee1f55');
      uri.searchParams.append('filter', 'tag:talks');
      uri.searchParams.append('fields', 'id,title,custom_excerpt,feature_image,url');
      uri.searchParams.append('limit', '2');

      const response = await fetch(uri.toString());
      const { posts = [] } = await response.json();

      console.log(posts);
      this.posts = posts;
    },
    renderDescription (description = '') {
      return description.replace('\n', '<br />')
    }
  }
}
</script>

<style scoped>
p {
  line-height: calc(0.9em * 1.25);
}
</style>
