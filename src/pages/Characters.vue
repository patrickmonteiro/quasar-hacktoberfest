<template>
  <q-page padding>
    <h3>Agentes:</h3>
    <div class="row">
      <div class="q-pa-xs col-xs-12 col-sm-4 col-md-2" v-for="agent in characters" :key="agent.uuid">
        <div class="q-pb-md">
          <q-card @click="show(agent.uuid)" v-ripple class="agent-card cursor-pointer q-hoverable">
            <span class="q-focus-helper"></span>
            <img :src="agent.displayIconSmall" :alt="agent.displayIconSmall">

            <q-card-section>
              <div class="text-h6">{{agent.displayName}}</div>
              <div class="wrapper text-subtitle2">{{agent.description}}</div>
            </q-card-section>

          </q-card>
        </div>
      </div>

      <q-dialog v-model="showDialog">
        <q-card class="agent-dialog">

          <q-card-section class="bg-white">
            <div class="row">
              <q-space />
              <q-btn icon="close" flat round dense v-close-popup />
            </div>
              <q-img :src="character.fullPortrait " />
          </q-card-section>

          <q-separator color="black" />

          <q-card-section>
            <div class="no-wrap text-center">
                <div class="text-h6 ellipsis">
                  {{character.displayName}}
                </div>
              </div>
          </q-card-section>

          <q-card-section class="row q-pt-none">
            <div class="text-subtitle2">
              {{character.description}}
            </div>
          </q-card-section>

          <div class="row" style="justify-content: center;">
            <q-card-section class="q-pa-xs q-gutter-x-md" v-for="ability in character.abilities" :key="ability.slot">
              <div >
                <q-btn
                fab
                color="primary"
                >
                  <q-avatar size="32px">
                    <img :src="ability.displayIcon">
                  </q-avatar>
                </q-btn>
              </div>
            </q-card-section>
          </div>
          <q-separator />
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'Characters',
  data () {
    return {
      characters: [],
      character: [],
      showDialog: false
    }
  },
  mounted () {
    this.getCharacters()
  },
  methods: {
    async getCharacters () {
      try {
        const response = await this.$axios.get('https://valorant-api.com/v1/agents?language=pt-BR')
        this.characters = response.data.data
      } catch (err) {
        console.log(err)
      }
    },
    async show (uuid) {
      try {
        const response = await this.$axios.get(`https://valorant-api.com/v1/agents/${uuid}?language=pt-BR`)
        this.character = response.data.data
        this.showDialog = true
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
.agent-card {
  width: 100%;
  max-width: 600px;
  background-color: #90A88B;
}
.agent-dialog {
  width: 100%;
  max-width: 600px;
  background-color: #90A88B;
}
.wrapper {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 350px;
}
</style>
