<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          Quasar Hacktoberfest
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

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

export default {
  name: 'MainLayout',
  data () {
    return {
    }
  }
}
</script>
