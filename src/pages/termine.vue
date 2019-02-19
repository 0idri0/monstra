<template>
  <div>
    <div class="gt-xs">
    <q-table
      title="Aufführungstermine"
      :data="dates"
      :columns="columns"
      row-key="date"
      :pagination.sync="pagination"
      hide-bottom
      :visible-columns="visibleColumns">
      <q-tr slot="body" slot-scope="props" :props="props"
            @click.native="rowClick(props.row)" class="cursor-pointer">
        <q-td v-for="col in props.cols" :key="col.name" :props="props">
           {{ col.value }}
        </q-td>
      </q-tr>
    </q-table>
    </div>
    <div class="lt-sm">
    <q-table
      grid
      hide-header
      hide-bottom
      :data="dates"
      :columns="columns"
      :visible-columns="visibleColumns1"
      :pagination.sync="pagination"
      row-key="name"
    >
      <div
        slot="item"
        slot-scope="props"
        class="q-pa-xs col-xs-12 col-sm-6 col-md-4 transition-generic">
        <q-card>
          <q-card-title class="relative-position">
            <router-link :to="props.row.slug">
            {{ props.row.name }}
            </router-link>
          </q-card-title>
          <q-card-separator />
          <q-card-main class="q-pa-none">
            <q-list no-border>
              <q-item v-for="col in props.cols" :key="col.date">
                <q-item-main>
                  <q-item-tile label>{{ col.label }}</q-item-tile>
                </q-item-main>
                <q-item-side right>
                  <q-item-tile>{{ col.value }}</q-item-tile>
                </q-item-side>
              </q-item>
            </q-list>
          </q-card-main>
        </q-card>
      </div>
    </q-table>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-nested-ternary,prefer-spread */
export default {
  name: 'termine',
  created() {
    this.$store.commit('posts/resetPosts');
    this.fetchPosts();
  },
  data() {
    return {
      posts: {},
      dates: [],
      options: {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      },
      columns: [
        {
          name: 'date',
          label: 'Datum',
          align: 'left',
          field: 'date',
        },
        {
          name: 'name',
          label: 'Stück',
          align: 'left',
          field: 'name',
        },
        {
          name: 'location',
          label: 'Ort',
          align: 'left',
          field: 'location',
        },
        {
          name: 'special',
          label: '',
          align: 'left',
          field: 'special',
        },
        {
          name: 'slug',
          label: '',
          align: 'left',
          field: 'slug',
        },
      ],
      visibleColumns1: ['date', 'location', 'special'],
      visibleColumns: ['date', 'name', 'location', 'special'],
      pagination: {
        sortBy: null,
        descending: true,
        page: 1,
        rowsPerPage: 100,
      },
    };
  },
  methods: {
    getDates() {
      const eventlist = [];
      Object.keys(this.posts).forEach((post) => {
        const conv = this.posts[post].acf.event;
        const conv2 = Object.keys(conv).map(key => new Date(conv[key].datum.replace(/-/g, '/')));
        Object.keys(conv2).forEach((el) => {
          conv2[el].date = conv2[el].toLocaleString('de-DE', this.options);
          conv2[el].location = conv[el].ort;
          conv2[el].special = conv[el].special;
          conv2[el].name = this.posts[post].title.rendered;
          conv2[el].slug = this.posts[post].slug;
        });
        eventlist.push(conv2);
      });
      this.dates = eventlist;
      this.sortDates();
    },
    fetchPosts() {
      this.$store.dispatch('posts/fetchPosts')
        .then((res) => {
          res.data.forEach((data) => {
            this.$store.commit('posts/setPosts', data);
            this.posts = this.$store.getters['posts/getPosts'];
            this.getDates(this.dates);
          });
        });
    },
    sortDates() {
      this.dates = [].concat(...this.dates);
      this.dates.sort((a, b) => (a > b ? -1 : a < b ? 1 : 0));
    },
    rowClick(row) {
      this.$router.push(row.slug);
    },
  },
};
</script>

<style lang="stylus">

</style>
