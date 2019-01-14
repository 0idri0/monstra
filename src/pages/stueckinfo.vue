<template>
  <div>
    <div v-for="br in posts" :key="br.id" v-if="br.slug === $route.params.id"
      class="q-ma-sm q-pa-md">
      <h3>{{ br.title.rendered }}</h3>
      <div class="row justify-center items-start gutter-xl">
        <div class="col-lg-4 col-md-6 maincontent">
          <img class="lt-md mainimage" :src="br._embedded['wp:featuredmedia']['0'].source_url"
               v-if="br.featured_media > 0"
               @click="fullscreenImage(br._embedded['wp:featuredmedia']['0'].source_url)"/>
        <div>
            <div v-html="br.content.rendered"/>
          <hr class="q-hr">
          <h5 >Aktuelle Termine</h5>
          <q-list>
            <q-item v-for="item in dates" :key="item.id" v-if="item > Date.now()">
              <q-item-side icon="event" inverted color="dark" />
              <q-item-main>
                <q-item-tile label>{{ item.toLocaleString('de-DE', options)}}</q-item-tile>
                <q-item-tile label>{{ item.special}}</q-item-tile>
                <q-item-tile sublabel>{{item.location}}</q-item-tile>
              </q-item-main>
            </q-item>
          </q-list>
        </div>
        </div>
        <div class="col-lg-6 col-md-5 maincontent">
        <img class="gt-sm mainimage" :src="br._embedded['wp:featuredmedia']['0'].source_url"
             v-if="br.featured_media > 0"
             @click="fullscreenImage(br._embedded['wp:featuredmedia']['0'].source_url)"/>
          <div v-html="br._embedded['wp:featuredmedia']['0'].caption.rendered"/>
          <hr class="q-hr">
          <div class="row">
            <q-card inline class="q-ma-lg col-xl-5 shadow-0 q-caption"
                    v-for="img in media" :key="img.id" v-if="br.id === img.post">
              <q-card-media>
                <img :src="img.source_url" @click="fullscreenImage(img.source_url)"/>
              </q-card-media>
              <div v-html="img.caption.rendered"/>
            </q-card>
          </div>
        </div>
      </div>
    </div>
    <q-modal v-model="imageModal" maximized>
      <div class="imgModal">
      <img class="absolute-center" :src="selectedImage"/>
      <q-page-sticky class="q-ml-lg" expand position="top-left" :offset="[10, 10]">
        <q-btn round color="light" @click="imageModal = false" icon="close"/>
      </q-page-sticky>
      </div>
    </q-modal>
  </div>
</template>

<script>
/* eslint-disable no-nested-ternary */

export default {
  name: 'projektdetails',
  created() {
    this.$store.commit('posts/resetPosts');
    this.fetchPosts();
    this.$store.commit('posts/resetMedia');
    this.fetchMedia();
  },
  data() {
    return {
      posts: {},
      media: {},
      imageModal: false,
      selectedImage: '',
      dates: {},
      options: {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      },
    };
  },
  methods: {
    getDates() {
      Object.keys(this.posts).forEach((post) => {
        if (this.posts[post].slug === this.$route.params.id) {
          const eventlist = this.posts[post].acf.event;
          this.dates = Object.keys(eventlist).map(key => new Date(eventlist[key].datum));
          Object.keys(this.dates).forEach((el) => {
            this.dates[el].location = eventlist[el].ort;
            this.dates[el].special = eventlist[el].special;
          });
          this.sortDates(this.dates);
        }
      });
    },
    fullscreenImage(img) {
      this.imageModal = true;
      this.selectedImage = img;
    },
    fetchPosts() {
      this.$store.dispatch('posts/fetchPosts')
        .then((res) => {
          res.data.forEach((data) => {
            this.$store.commit('posts/setPosts', data);
            this.posts = this.$store.getters['posts/getPosts'];
            this.getDates(this.dates);
          });
        })
        .catch(err => console.log(err));
    },
    fetchMedia() {
      this.$store.dispatch('posts/fetchMedia')
        .then((res) => {
          res.data.forEach((data) => {
            this.$store.commit('posts/setMedia', data);
            this.media = this.$store.getters['posts/getMedia'];
          });
        })
        .catch(err => console.log(err));
    },
    sortDates() {
      this.dates.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
    },
  },
};
</script>

<style lang="stylus">
  @import '~variables'
  .maincontent > img
      max-width 100%
  .imgModal
    width 100%
    height 100%
    background-color $dark
  .imgModal > img
    max-width 100%
    max-height 100vh
  .q-list
    border 0px
  .q-item
    font-size 0.9rem
  .q-item-icon
    font-size 18px
    height 28px
    width 28px
  .mainimage
    max-height: 60vh

</style>
