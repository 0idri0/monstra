<template>
  <div>
    <div v-for="br in pages" :key="br.id" v-if="br.slug === 'impressum'"
         class="q-ma-sm q-pa-md">
      <h3>Impressum</h3>
      <div class="row justify-center items-start">
        <div class="col-sm-6 maincontent">
          <div class="q-mt-xl col-sm-6 maincontent">
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

<style scoped>

</style>
