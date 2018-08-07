<template>
  <div>
    <div v-for="br in pages" :key="br.id" v-if="br.slug === 'about'"
         class="q-ma-sm q-pa-md">
      <h2 class="q-display-3">Über uns</h2>
      <div class="row justify-center items-start">
        <div class="col-6 maincontent">
          <img :src="br._embedded['wp:featuredmedia']['0'].source_url"
               v-if="br.featured_media > 0"/>
          <div class="q-mt-xl col-6 maincontent">
            <div v-html="br.content.rendered"/>
          </div>
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
    max-width 100%

</style>
