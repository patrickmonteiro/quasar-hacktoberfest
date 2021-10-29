<template>
  <q-dialog :value="isOpen" @hide="hide" @show="getProfileInfo">
    <q-card class="card" v-if="!loading">
      <q-card-section>
        <div class="text-h5">@{{ userAccount }}</div>
      </q-card-section>
      <q-separator class="q-mb-sm" />
      <q-card-section
        class="row q-col-gutter-sm items-center scroll"
        style="max-height: 70vh"
      >
        <div class="col-12 col-sm-4">
          <q-img
            :src="info.githubImgProfile"
            spinner-color="orange"
            class="rounded-borders"
          />
        </div>
        <div class="col-12 col-sm-8">
          <q-img
            :src="`https://github-readme-stats.vercel.app/api?show_icons=true&theme=gruvbox_light&username=${userAccount}`"
            spinner-color="orange"
          />
        </div>
        <div class="q-pt-sm">
          <q-chip
            square
            color="orange"
            text-color="white"
            icon-right="work"
            v-if="company"
            clickable
          >
            {{ company }}
            <q-tooltip> Current Job </q-tooltip>
          </q-chip>

          <q-chip square v-if="publicRepos" clickable>
            <q-avatar icon="storage" color="orange" text-color="white" />
            {{ publicRepos }}
            <q-tooltip> Public Repositories </q-tooltip>
          </q-chip>

          <q-chip
            square
            color="orange"
            text-color="white"
            icon-right="place"
            clickable
            v-if="location"
          >
            {{ location }}
            <q-tooltip> Location </q-tooltip>
          </q-chip>

          <q-chip square v-if="followers" clickable>
            <q-avatar icon="person" color="orange" text-color="white" />
            {{ followers }}
            <q-tooltip> Followers </q-tooltip>
          </q-chip>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
    <q-card class="card" v-else>
      <q-card-section>
        <app-profile-skeleton />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: {
    isOpen: {
      required: true,
      type: Boolean
    },
    info: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      loading: true,
      userAccount: null,
      urlProfile: null,
      followers: null,
      location: null,
      company: null,
      bio: null,
      publicRepos: null
    }
  },
  components: {
    AppProfileSkeleton: () =>
      import('components/skeletons/UserProfileSkeleton.vue')
  },
  methods: {
    async getProfileInfo() {
      this.userAccount = this.info.githubUrl.split('/')[3].toLowerCase()

      try {
        const {
          data: { html_url, followers, location, company, bio, public_repos }
        } = await this.$axios.get(`users/${this.userAccount}`)
        this.urlProfile = html_url
        this.followers = followers
        this.location = location
        this.company = company
        this.bio = bio
        this.publicRepos = public_repos
      } catch (e) {
        console.error(e)
        // this.$notify()
      } finally {
        this.loading = false
      }
    },
    hide() {
      this.$emit('onHide')
      this.loading = true
    }
  }
}
</script>

<style scoped>
.card {
  width: 80%;
  max-width: 600px;
}
</style>
