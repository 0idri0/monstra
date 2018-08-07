<template>
  <q-layout view="hHr lpr fFf">
    <q-layout-header>
      <q-toolbar
        color="white" text-color="dark"
        class="q-py-none"
      >
        <q-toolbar-title>
          <img class="logo" alt="Logo" src="~assets/logo_from_pdf.png">
        </q-toolbar-title>
        <q-tabs color="dark" inverted class="gt-sm">
          <q-route-tab label="Home"
                       to="/"
                       slot="title"
          />
          <q-route-tab label="Stücke"
                        to="/stuecke"
                        slot="title"
        />
          <q-route-tab label="Termine"
                       to="/termine"
                       slot="title"
          />
          <q-route-tab label="Über uns"
                       to="/about"
                       slot="title"
          />
          <q-route-tab label="Kontakt"
                       to="/kontakt"
                       slot="title"
          />
        </q-tabs>
        <q-btn
          class="lt-md hide-on-drawer-visible"
          flat round dense
          icon="menu"
          @click="right = !right"
        />
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      side="right"
      v-model="right">
        <q-list-header>
          M O N S T R A - Theater für junges Publikum</q-list-header>
        <q-list no-border highlight sparse separator>
          <q-item to="/">
            <q-item-main label="Home">
            </q-item-main>
          </q-item>
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
    </q-layout-drawer>

    <q-page-container class="q-pb-xl">
      <router-view />
    </q-page-container>

    <q-layout-footer class="fixed-bottom">
      <q-toolbar color="white" text-color="dark">
        <q-toolbar-title class="q-caption">
          Copyright 2018 M O N S T R A
        </q-toolbar-title>
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
    };
  },
};
</script>

<style lang="stylus">
  .logo
    height: 50px;
    padding: 5px;
</style>
