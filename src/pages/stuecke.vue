<template>
  <q-page class="row items-start">
      <q-card inline class="q-ma-lg col-lg-4 shadow-2"
          v-for="br in posts" :key="br.id">
        <router-link :to="br.slug">
        <q-card-media overlay-position="bottom">
        <img :src="br._embedded['wp:featuredmedia']['0'].source_url"
             v-if="br.featured_media > 0"/>
        <q-card-title slot="overlay">
         {{br.title.rendered}}
        </q-card-title>
        </q-card-media>
          </router-link>

  </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'stuecke',
  created() {
    this.$store.commit('posts/resetPosts');
    this.fetchPosts();
  },
  data() {
    return {
      posts: {},
    };
  },
  methods: {
    fetchPosts() {
      this.$store.dispatch('posts/fetchPosts')
        .then((res) => {
          res.data.forEach((data) => {
            this.$store.commit('posts/setPosts', data);
            this.posts = this.$store.getters['posts/getPosts'];
          });
        })
        .catch(err => console.log(err));
    },
  },
};
</script>

<style lang="stylus">
  @import '~variables'
  @media (max-width $breakpoint-xs-max)
    .q-card
      width 100%
</style>
