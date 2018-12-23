<template>
  <q-layout view="hHr lpr fFf">
    <q-page-sticky class="lt-md" position="top-right">
      <q-btn color="light" @click="right = !right" icon="menu"/>
    </q-page-sticky>
    <q-layout-header class="gt-xs" reveal>
      <q-toolbar
        color="ajda1" text-color="dark"
        class="q-py-none"
      >
        <q-toolbar-title>
          <router-link to="/">
          <img class="logo" alt="Logo" src="~assets/mooooo.svg">
          </router-link>
        </q-toolbar-title>
        <q-tabs color="ajda1" text-color="dark" class="gt-sm">
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
          flat round dense
          icon="menu"
          @click="right = !right"
        />
      </q-toolbar>
    </q-layout-header>

    <q-modal
      v-model="right">
      <router-link to="/">
        <q-list-header style="'text-decoration': 'none'">
          M O N S T R A</q-list-header>
      </router-link>
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

    <q-page-container class="q-pb-xl">
      <router-view/>
    </q-page-container>

    <q-layout-footer reveal>
      <q-toolbar toolbar-small color="ajda1" text-color="dark">
        <q-toolbar-title color="ajda1" text-color="dark" class="q-caption">
          Copyright 2018 - M O N S T R A
        </q-toolbar-title>
        <router-link class="q-caption" to="/impressum">Impressum</router-link>
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
  .svg {
    position: absolute;
  }
</style>
