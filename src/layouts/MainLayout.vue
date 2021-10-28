<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon color="white" name="menu" />
        </q-btn>

        <q-toolbar-title>
          Quasar Hacktoberfest
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      content-class="bg-secondary"
      :breakpoint="400"
      overlay
      elevated
      behavior="mobile"
    >
    <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px;">
      <q-list >
        <q-item-label class="text-center" header>Menu</q-item-label>
        <q-item clickable to="/" exact active-class="text-negative">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://github.com/patrickmonteiro/quasar-hacktoberfest">
          <q-item-section avatar>
            <q-icon name="mdi-github" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Github do Projeto</q-item-label>
            <q-item-label caption>Repositório com o código fonte</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
      <q-img class="absolute-top menuImage" src="~assets/logo-hacktoberfest.svg">
        </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-positive">
      <q-toolbar>
        <q-toolbar-title>
          <q-btn
            flat
            color="white"
            icon="mdi-github"
            label="Github"
            type="a"
            href="https://github.com/patrickmonteiro/quasar-hacktoberfest"
            target="_blank"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
.menuImage{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 75%;
  margin-top:25px
}
</style>
