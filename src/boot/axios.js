/* eslint-disable space-in-parens */
// import something here
import axios from 'axios'

// can also create an axios instance specifically for the backend API

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async ( { Vue } ) => {
  const api = axios.create( { baseURL: 'https://api.github.com/' } )
  Vue.prototype.$axios = api
}
