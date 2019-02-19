<template>
  <q-layout view="hHr lpr fff">
    <q-layout-header>
      <q-toolbar
        color="dark" text-color="white"
        class="q-py-none"
      >
        <q-toolbar-title>
          <router-link to="/">
          <img class="logo" alt="Logo" src="~assets/mooooo.svg">
          </router-link>
        </q-toolbar-title>
        <q-tabs color="dark" text-color="white" class="gt-sm">
          <q-route-tab label="Stücke"
                        to="/stuecke"
                        slot="title"
        />
          <q-route-tab label="Termine"
                       to="/termine"
                       slot="title"
          />
          <q-route-tab label="Überuns"
                       to="/about"
                       slot="title"
          />
          <q-route-tab label="Kontakt"
                       to="/kontakt"
                       slot="title"
          />
        </q-tabs>
        <q-btn
          class="lt-md"
          flat
          size="lg"
          @click="togglemenu" icon="menu"
        />
      </q-toolbar>
    </q-layout-header>

    <q-modal
      v-model="right">
      <div class="row justify-end closebutton">
      <q-btn
        flat
        size="lg"
        @click="togglemenu" icon="close"
      /></div>
        <q-list no-border highlight sparse separator>
          <q-item to="/stuecke">
            <q-item-main label="Stücke">
            </q-item-main>
          </q-item>
          <q-item to="/termine">
            <q-item-main label="Termine">
            </q-item-main>
          </q-item>
          <q-item to="/about">
            <q-item-main label="Über uns">
            </q-item-main>
          </q-item>
          <q-item to="/kontakt">
            <q-item-main label="Kontakt">
            </q-item-main>
          </q-item>
        </q-list>
    </q-modal>

    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-layout-footer>
      <q-toolbar toolbar-small color="dark">
        <router-link class="impress q-caption" to="/impressum">Impressum & Datenschutz</router-link>
      </q-toolbar>
    </q-layout-footer>
  </q-layout>
</template>

<script>


export default {
  name: 'LayoutDefault',
  data() {
    return {
      right: false,
      buttonstyle: 'menu',
    };
  },
  methods: {
    togglemenu() {
      this.right = !this.right;
      if (this.right === true) {
        this.buttonstyle = 'close';
      } else {
        this.buttonstyle = 'menu';
      }
    },
  },
};
</script>

<style lang="stylus">
  .logo
    height: 50px;
    padding: 5px;
  .svg {
    position: absolute;
  }
  .q-list
    padding-top: 0px
  .closebutton
    padding-right: 12px
</style>
