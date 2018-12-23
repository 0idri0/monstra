<template>

  <q-page class="docs-carousel">
    <q-carousel
      color="white"
      arrows
      infinite
      autoplay
      height="100vh"
    >
      <q-carousel-slide v-for="br in posts" :key="br.id"
                        :img-src="br._embedded['wp:featuredmedia']['0'].source_url"
                        v-if="br.featured_media > 0">
        <!--<router-link :to="br.slug"
                     class="absolute-bottom custom-caption">
          <div class="q-headline">{{br.title.rendered}}</div>
        </router-link>-->
      </q-carousel-slide>
    </q-carousel>
  </q-page>
</template>

<style>
</style>

<script>
export default {
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
  name: 'PageIndex',
};
</script>

<style lang="stylus">
  .docs-carousel
    @import '~variables'
    p.caption:not(:first-of-type)
      margin-top 38px
    .custom-caption
      text-align center
      text-transform uppercase
      padding 12px
      color $grey-4
      background rgba(0, 0, 0, .5)
      text-decoration none
</style>
