<template>
  <div>
    <div v-for="br in pages" :key="br.id" v-if="br.slug === 'about'"
         class="q-ma-sm q-pa-md">
      <h3>Über uns</h3>
      <div class="row justify-center items-start gutter-xl">
          <div class="col-lg-4 col-md-6 maincontent">
            <img class="lt-md" :src="br._embedded['wp:featuredmedia']['0'].source_url"
                 v-if="br.featured_media > 0"/>
            <div class="lt-md copyright q-caption"
                 v-html="br._embedded['wp:featuredmedia']['0'].caption.rendered"/>
            <div v-html="br.content.rendered"/>
          </div>
        <div class="col-lg-6 col-md-5 maincontent">
          <img class="gt-sm" :src="br._embedded['wp:featuredmedia']['0'].source_url"
               v-if="br.featured_media > 0"/>
          <div class="gt-sm copyright q-caption"
               v-html="br._embedded['wp:featuredmedia']['0'].caption.rendered"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  created() {
    this.$store.commit('posts/resetPages');
    this.fetchPages();
  },
  data() {
    return {
      pages: {},
    };
  },
  methods: {
    fetchPages() {
      this.$store.dispatch('posts/fetchPages')
        .then((res) => {
          res.data.forEach((data) => {
            this.$store.commit('posts/setPages', data);
            this.pages = this.$store.getters['posts/getPages'];
          });
        })
        .catch(err => console.log(err));
    },
  },
};
</script>

<style lang="stylus">
  .maincontent > img
    max-width: 100%
  .copyright
    color: $faded
</style>
