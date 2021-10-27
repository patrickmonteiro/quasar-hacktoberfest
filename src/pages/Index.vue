<template>
  <q-page class="bg-secondary" padding>
    <div class="row justify-center">
      <div class="text-center">
        <img
          alt="Quasar logo"
          src="~assets/logo-hacktoberfest.svg"
          :style="$q.screen.gt.xs ? 'width: 600px;' : 'width: 300px;'"
        >
      </div>
    </div>
    <!-- <div class="row q-col-gutter-md"> -->
      <q-table
      grid
      title="Contributors"
      :data="contributors"
      row-key="name"
      hide-header
      class="row"
      :pagination.sync="pagination"
    >
      <!-- <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template> -->

      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-4 col-md-2">
          <q-card class="my-card">

          <img :src="props.row.githubImgProfile">

          <q-card-section>
            <div class="text-h6 text-center">{{ props.row.name }}</div>
          </q-card-section>

          <q-card-actions align="center">
            <q-btn
              flat
              round
              color="primary"
              icon="mdi-github"
              type="a"
              :href="props.row.githubUrl"
              target="_blank"
            />
            <q-btn
              flat
              round
              color="primary"
              icon="mdi-linkedin"
              type="a"
              :href="props.row.linkedinUrl"
              target="_blank"
            />
          </q-card-actions>
        </q-card>
        </div>
      </template>
    </q-table>
      <!-- <div class="col-md-2 col-sm-6 col-xs-6"> -->
        <!-- <q-card class="my-card">
          <img :src="contributor.githubImgProfile">

          <q-card-actions align="center">
            <q-btn
              flat
              round
              color="primary"
              icon="mdi-github"
              type="a"
              :href="contributor.githubUrl"
              target="_blank"
            />
            <q-btn
              flat
              round
              color="primary"
              icon="mdi-linkedin"
              type="a"
              :href="contributor.linkedinUrl"
              target="_blank"
            />
          </q-card-actions>
        </q-card> -->
      <!-- </div> -->
    <!-- </div> -->
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    > -->
  </q-page>
</template>

<script>
import { contributors } from 'src/assets/contributors'
export default {
  name: 'PageIndex',
  data () {
    return {
      contributors: contributors,
      pagination: {
        page: 1,
        rowsPerPage: 10
      }
    }
  }
}
</script>
